<template>
  <Navigation v-show="showNavigation" />
  <router-view />
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import Navigation from '@/components/Navigation.vue'

  const route = useRoute()
  const isVisible = ref(false)

  const showNavigation = computed(() => route.name !== 'Home' || isVisible.value)

  function handleScroll() {
    isVisible.value = window.scrollY > window.innerHeight
  }

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
