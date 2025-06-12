<template>
    <div 
        ref="wrapperRef"
        v-bind="$attrs"
        class="reveal-text-wrapper"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useAnimate, stagger } from 'motion-v'

type SplitType = "chars" | "words" | "lines"

interface RevealTextProps {
    type?: SplitType
    staggerDelay?: number
    trigger?: boolean
    customTransition?: Record<string, any>
}

const props = withDefaults(defineProps<RevealTextProps>(), {
    type: 'chars',
    staggerDelay: 0.05,
    trigger: true,
    customTransition: () => ({})
})

const { type, staggerDelay, trigger, customTransition } = props;

const wrapperRef = ref<HTMLDivElement | null>(null)

const defaultTransitions: Record<SplitType, Record<string, any>> = {
    chars: {
        duration: 0.7,
        ease: 'easeOut'
    },
    words: {
        duration: 1,
        ease: 'easeOut'
    },
    lines: {
        duration: 1,
        ease: 'easeOut'
    }
}

const defaultInitialStates: Record<SplitType, Record<string, any>> = {
    chars: { x: 150, opacity: 0 },
    words: { x: 150, opacity: 0, y: -100, rotate: 0 },
    lines: { y: '100%', opacity: 0 }
}

const defaultAnimateStates: Record<SplitType, Record<string, any>> = {
    chars: { x: 0, opacity: 1 },
    words: { x: 0, opacity: 1, y: 0, rotate: 0 },
    lines: { y: '0%', opacity: 1 }
}

const splitText = (element: HTMLElement, type: SplitType): HTMLElement[] => {
    const text = element.textContent || ''
    const elements: HTMLElement[] = []
    
    element.innerHTML = ''
    
    if (type === 'chars') {
        const chars = text.split('')
        
        chars.forEach((char, index) => {
            const span = document.createElement('span')
            span.textContent = char === ' ' ? '\u00A0' : char
            span.style.display = 'inline-block'
            span.dataset.charIndex = index.toString()
            element.appendChild(span)
            elements.push(span)
        })
    } else if (type === 'words') {
        const words = text.split(' ')
        
        words.forEach((word, index) => {
            const span = document.createElement('span')
            span.textContent = word
            span.style.display = 'inline-block'
            span.style.marginRight = '0.25em'
            span.dataset.wordIndex = index.toString()
            element.appendChild(span)
            elements.push(span)
        })
    } else if (type === 'lines') {
        const words = text.split(' ')
        
        const wordsPerLine = Math.ceil(words.length / Math.ceil(words.length / 8))
        for (let i = 0; i < words.length; i += wordsPerLine) {
            const lineWords = words.slice(i, i + wordsPerLine)
            const lineSpan = document.createElement('span')
            lineSpan.textContent = lineWords.join(' ')
            lineSpan.style.display = 'block'
            lineSpan.style.overflow = 'hidden'
            lineSpan.dataset.lineIndex = Math.floor(i / wordsPerLine).toString()
            element.appendChild(lineSpan)
            elements.push(lineSpan)
        }
    }
    
    return elements
}

const animateElements = async (): Promise<void> => {
    if (!wrapperRef.value) return
    
    const elements = splitText(wrapperRef.value, type)
    
    if (elements.length === 0) return
    
    const initialState = { ...defaultInitialStates[type] }
    const animateState = { ...defaultAnimateStates[type] }
    const transition = { ...defaultTransitions[type], ...customTransition }
    
    elements.forEach(element => {
        Object.assign(element.style, {
            transform: `translateX(${initialState.x || 0}px) translateY(${initialState.y || 0}px) rotate(${initialState.rotate || 0}deg)`,
            opacity: String(initialState.opacity || 0)
        })
    })
    
    const [scope, animate] = useAnimate()
    
   await animate(
    elements,
    animateState,
    {
        ...transition,
        delay: stagger(staggerDelay)
    }
   )
}

const resetAnimation = (): void => {
    if (!wrapperRef.value) return
    
    const elements = wrapperRef.value.querySelectorAll('span')
    const initialState = defaultInitialStates[type]
    
    elements.forEach(element => {
        Object.assign(element.style, {
            transform: `translateX(${initialState.x || 0}px) translateY(${initialState.y || 0}px) rotate(${initialState.rotate || 0}deg)`,
            opacity: String(initialState.opacity || 0)
        })
    })
}

watch(() => trigger, (newTrigger) => {
    if (newTrigger) {
        nextTick(() => {
            animateElements()
        })
    } else {
        resetAnimation()
    }
}, { immediate: true })

watch(() => type, () => {
    if (trigger) {
        nextTick(() => {
            animateElements()
        })
    }
}, { deep: false})
</script>

<style scoped>
.reveal-text-wrapper {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.reveal-text-wrapper:hover {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
}
</style> 