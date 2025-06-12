<template>
    <aside class="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-semibold text-gray-800">Menu</h2>
        </div>
        
        <nav class="flex-1 p-4 overflow-y-auto">
            <div 
                v-for="(group, groupIndex) in menuData" 
                :key="group.title"
                class="mb-6"
                :class="{ 'mb-6': groupIndex < menuData.length - 1 }"
            >
                <!-- Grup Başlığı -->
                <div class="mb-3">
                    <h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {{ group.title }}
                    </h3>
                </div>
                
                <!-- Grup Menüleri -->
                <ul class="space-y-1">
                    <MenuItem
                        v-for="item in group.items"
                        :key="item.key"
                        :label="item.label"
                        :icon="item.icon"
                        :menu-key="item.key"
                        :is-active="activeMenuItem === item.key"
                        :aria-label="item.ariaLabel"
                        @menu-click="handleMenuClick"
                    />
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from '@/components/MenuItem.vue'
import { menuData } from '@/data/menuData'
import type { MenuItem as MenuItemType } from '@/types/menu'

const activeMenuItem = ref<string>('dashboard')

const handleMenuClick = (menuKey: string): void => {
    activeMenuItem.value = menuKey
    console.log(`${menuKey} menüsüne tıklandı`)
}
</script>

<style scoped>

</style>
