<template>
    <div class="overflow-hidden [contain:layout_style_paint]" :class="className">
        <motion.div class="flex" :class="[
            'w-max will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden]',
            direction === 'horizontal' ? 'flex-row' : 'flex-col h-max w-auto',
            '[&>*]:shrink-0'
        ]" :style="{
                ...(direction === 'horizontal'
                    ? { x: translation }
                    : { y: translation }),
                gap: `${gap}px`,
            }" ref="tickerContentRef">
            <slot></slot>
            <slot></slot>
        </motion.div>
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount, watch, nextTick } from 'vue';
import { animate, useMotionValue, motion } from 'motion-v';
import { useElementSize } from '@vueuse/core';

const props = defineProps({
    gap: {
        type: Number,
        default: 16,
    },
    speed: {
        type: Number,
        default: 100,
    },
    direction: {
        type: String,
        default: 'horizontal',
    },
    reverse: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: '',
    },
});

const tickerContentRef = ref(null);
const translation = useMotionValue(0);
let animationControls = null;

const { width, height } = useElementSize(tickerContentRef);

const startAnimation = async () => {
    if (animationControls) {
        animationControls.stop();
    }

    await nextTick();

    if (!tickerContentRef.value) return;

    // Toplam boyut (2 slot + gap)
    const totalSize = props.direction === 'horizontal' ? width.value : height.value;
    // Tek bir slot'un boyutu (gap dahil)
    const singleContentSize = (totalSize - props.gap) / 2;
    
    if (singleContentSize <= 0) {
        translation.set(0);
        return;
    }

    // Animation için başlangıç ve bitiş noktaları
    const from = props.reverse ? -(singleContentSize + props.gap) : 0;
    const to = props.reverse ? 0 : -(singleContentSize + props.gap);

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / props.speed;

    // Translation'u başlangıç pozisyonuna ayarla
    translation.set(from);

    animationControls = animate(translation, to, {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
    });
};

watch(
    [
        () => props.speed,
        () => props.direction,
        () => props.reverse,
        () => props.gap,
        width,
        height,
    ],
    () => {
        startAnimation();
    },
    { immediate: true }
);

onBeforeUnmount(() => {
    if (animationControls) {
        animationControls.stop();
        animationControls = null;
    }
});
</script>