<template>
    <div class="h-full p-8 bg-gray-50">
        <div class="max-w-4xl mx-auto space-y-12">
            <h1 class="text-4xl font-bold text-gray-800 mb-8">Reveal Text Animasyonları</h1>
            
            <!-- Characters Animation -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Characters Animation</h2>
                <div class="flex gap-4 mb-4">
                    <button 
                        @click="handleTriggerChars"
                        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Animasyonu Başlat
                    </button>
                    <button 
                        @click="handleResetChars"
                        class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                    >
                        Sıfırla
                    </button>
                </div>
                <RevealText 
                    :trigger="charsTrigger"
                    type="chars"
                    :stagger-delay="0.05"
                    class="text-2xl font-medium text-gray-800"
                >
                    Bu metin karakter karakter animasyonlu olarak görünecek!
                </RevealText>
            </div>

            <!-- Words Animation -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Words Animation</h2>
                <div class="flex gap-4 mb-4">
                    <button 
                        @click="handleTriggerWords"
                        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                        Animasyonu Başlat
                    </button>
                    <button 
                        @click="handleResetWords"
                        class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                    >
                        Sıfırla
                    </button>
                </div>
                <RevealText 
                    :trigger="wordsTrigger"
                    type="words"
                    :stagger-delay="0.2"
                    class="text-2xl font-medium text-gray-800"
                >
                    Bu metin kelime kelime animasyonlu şekilde ekrana gelecek ve etkileyici görünecek!
                </RevealText>
            </div>

            <!-- Lines Animation -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">Lines Animation</h2>
                <div class="flex gap-4 mb-4">
                    <button 
                        @click="handleTriggerLines"
                        class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                    >
                        Animasyonu Başlat
                    </button>
                    <button 
                        @click="handleResetLines"
                        class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                    >
                        Sıfırla
                    </button>
                </div>
                <RevealText 
                    :trigger="linesTrigger"
                    type="lines"
                    :stagger-delay="0.4"
                    class="text-2xl font-medium text-gray-800 leading-relaxed"
                >
                    Bu metin satır satır animasyonlu olarak görünecek. Her satır farklı zamanlarda ekrana gelecek ve güzel bir efekt oluşturacak. Motion-v kütüphanesi ile yapılan bu animasyon çok etkileyici görünüyor.
                </RevealText>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RevealText from '@/components/RevealText.vue'

const charsTrigger = ref(true)
const wordsTrigger = ref(true)
const linesTrigger = ref(true)

// Event handlers
const handleTriggerChars = (): void => {
    charsTrigger.value = true
}

const handleResetChars = (): void => {
    charsTrigger.value = false
}

const handleTriggerWords = (): void => {
    wordsTrigger.value = true
}

const handleResetWords = (): void => {
    wordsTrigger.value = false
}

const handleTriggerLines = (): void => {
    linesTrigger.value = true
}

const handleResetLines = (): void => {
    linesTrigger.value = false
}
</script>

<style scoped>
</style>    