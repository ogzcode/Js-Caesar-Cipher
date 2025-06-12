<template>
    <div class="flex h-screen bg-gray-50">
        <Sidebar />
        <main class="flex-1 h-screen overflow-y-auto p-6">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue'
</script>

<style scoped></style>