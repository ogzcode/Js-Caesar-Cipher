<template>
    <aside class="w-64 h-screen bg-white shadow-lg border-r border-gray-200 flex flex-col">
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
                        :route="item.route"
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
import { useRouter, useRoute } from 'vue-router'
import MenuItem from '@/components/MenuItem.vue'
import { menuData } from '@/data/menuData'

const router = useRouter()
const route = useRoute()

const activeMenuItem = ref<string>('reveal-text')

const handleMenuClick = (menuKey: string): void => {
    activeMenuItem.value = menuKey
    console.log(`${menuKey} menüsüne tıklandı`)
    
    // Router navigation
    const routePath = `/${menuKey}`
    if (route.path !== routePath) {
        router.push(routePath)
    }
}
</script>

<style scoped>

</style>
