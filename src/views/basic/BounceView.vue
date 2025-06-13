<template>
    <div class="h-full p-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div class="max-w-4xl mx-auto space-y-12">
            <h1 class="text-4xl font-bold text-gray-800 mb-8">Bounce Animasyonu</h1>
            
            <!-- Single Bounce -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Tek Element Bounce</h2>
                <div class="flex gap-4 mb-6">
                    <button 
                        @click="handleTriggerSingle"
                        class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        tabindex="0"
                        aria-label="Tek element bounce animasyonunu başlat"
                    >
                        Bounce Başlat
                    </button>
                    <button 
                        @click="handleResetSingle"
                        class="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                        tabindex="0"
                        aria-label="Tek element animasyonunu sıfırla"
                    >
                        Sıfırla
                    </button>
                </div>
                <BounceComponent 
                    :trigger="singleTrigger"
                    :bounce-height="20"
                    :duration="0.8"
                    class="inline-block"
                >
                    <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-bold shadow-lg">
                        🚀 Bounce Me!
                    </div>
                </BounceComponent>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BounceComponent from '@/components/BounceComponent.vue'

// Reactive state
const singleTrigger = ref(false)


// Event handlers
const handleTriggerSingle = (): void => {
    singleTrigger.value = true
}

const handleResetSingle = (): void => {
    singleTrigger.value = false
}
</script>

<style scoped>
</style>
