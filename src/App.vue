<template>
  <div class="container mx-auto">
    <NavComponent  v-if="!isDashboardRoute"/>
    <router-view/>
  </div>
</template>
<script lang="js" setup>
import NavComponent from '@/components/NavComponent'
import { useRoute } from 'vue-router'
import {computed} from 'vue'

const route = useRoute()
const isDashboardRoute = computed(() => route.name === 'dashboard')

</script>
