<template>
    <div class="flex justify-center items-center h-screen">
        <InfiniteSlider gap="16" speed="100" direction="horizontal"
            class="bg-gray-100 border border-gray-200 rounded-lg p-4 w-[500px]">
            <div v-for="item in items" :key="item.id" class="flex flex-col gap-2">
                <h1 class="p-2 text-center bg-purple-100 rounded-lg text-2xl font-bold">{{ item.title }}</h1>
            </div>
        </InfiniteSlider>
    </div>
</template>

<script setup>
import InfiniteSlider from '@/components/InfiniteSlider.vue';
import { ref } from 'vue';

const items = ref([
    {
        id: 1,
        title: 'Item 1',
    },
    {
        id: 2,
        title: 'Item 2',
    },
    {
        id: 3,
        title: 'Item 3',
    },
    {
        id: 4,
        title: 'Item 4',
    },
    {
        id: 5,
        title: 'Item 5',
    },
    {
        id: 6,
        title: 'Item 6',
    },
]);
</script>