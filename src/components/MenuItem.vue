<template>
    <li>
        <a 
            href="#" 
            class="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            :class="{ 'bg-blue-50 text-blue-700': isActive }"
            tabindex="0"
            :aria-label="ariaLabel"
            @click="handleClick"
            @keydown="handleKeyDown"
        >
            <component 
                :is="iconComponent" 
                class="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700"
                :class="{ 'text-blue-600': isActive }"
            />
            <span>{{ label }}</span>
        </a>
    </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { menuIcons } from '@/data/menuData'
import { LayoutDashboard } from 'lucide-vue-next'

interface Props {
    label: string
    icon: string
    menuKey: string
    isActive?: boolean
    ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
    isActive: false,
    ariaLabel: ''
})

const emit = defineEmits<{
    'menu-click': [menuKey: string]
}>()

const iconComponent = computed(() => {
    return menuIcons[props.icon as keyof typeof menuIcons] || LayoutDashboard
})

const handleClick = (): void => {
    emit('menu-click', props.menuKey)
}

const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleClick()
    }
}
</script> 