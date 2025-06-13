<template>
    <div ref="wrapperRef" v-bind="$attrs" class="bounce-wrapper">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useAnimate, stagger } from 'motion-v'

interface BounceComponentProps {
    trigger?: boolean
    bounceHeight?: number
    duration?: number
    repeat?: boolean
    easing?: string
}

const props = withDefaults(defineProps<BounceComponentProps>(), {
    trigger: false,
    bounceHeight: 20,
    duration: 0.6, 
    repeat: false,
    easing: 'easeOut'
})

const wrapperRef = ref<HTMLDivElement | null>(null)
let repeatInterval: number | null = null

const getAnimationTarget = (): HTMLElement | null => {
    return wrapperRef.value
}

const createBounceAnimation = async (target: HTMLElement): Promise<void> => {
    if (!target) return

    const [scope, animate] = useAnimate()

    await animate(
        target,
        {
            transform: [
                'translateY(0px)',
                `translateY(-${props.bounceHeight}px)`,
                'translateY(0px)',
                `translateY(-${props.bounceHeight * 0.4}px)`,
                0
            ]
        },
        {
            duration: props.duration,
            ease: props.easing
        }
    )
}

const startBounceAnimation = async (): Promise<void> => {
    if (!wrapperRef.value) return

    const target = getAnimationTarget()
    if (target) {
        await createBounceAnimation(target)
    }
}

const resetAnimation = (): void => {
    if (!wrapperRef.value) return

    wrapperRef.value.style.transform = 'translateY(0px)'
}

const startRepeatAnimation = (): void => {
    if (repeatInterval) {
        clearInterval(repeatInterval)
    }

    repeatInterval = window.setInterval(() => {
        startBounceAnimation()
    }, (props.duration + 0.2) * 1000)

    startBounceAnimation()
}

const stopRepeatAnimation = (): void => {
    if (repeatInterval) {
        clearInterval(repeatInterval)
        repeatInterval = null
    }
    resetAnimation()
}

watch(() => props.trigger, (newTrigger) => {
    if (newTrigger) {
        nextTick(() => {
            if (props.repeat) {
                startRepeatAnimation()
            } else {
                startBounceAnimation()
            }
        })
    } else {
        if (props.repeat) {
            stopRepeatAnimation()
        } else {
            resetAnimation()
        }
    }
}, { immediate: true })

watch(() => props.repeat, (newRepeat) => {
    if (props.trigger) {
        if (newRepeat) {
            startRepeatAnimation()
        } else {
            stopRepeatAnimation()
        }
    } else {
        stopRepeatAnimation();
    }
})

onUnmounted(() => {
    if (repeatInterval) {
        clearInterval(repeatInterval)
    }
})
</script>

<style scoped>
.bounce-wrapper {
    display: inline-block;
}

.bounce-wrapper>* {
    transform-origin: center bottom;
}
</style>