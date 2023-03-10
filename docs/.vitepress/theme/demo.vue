<template>
  <ClientOnly>
    <div class="my-2 demoWrap">
      <slot />
      <div class="text-sm text-center bg-violet-50 cursor-pointer rounded px-3 py-2 select-none mt-2" @click="showCode = !showCode">
        ToggleCode
      </div>
      <div class="-mt-2">
        <slot v-if="showCode" name="code" />
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showCode = ref(false)
</script>
