<template>
  <button
    class="rounded-lg font-medium select-none py-2 px-4"
    :class="[type, fullWidth ? 'w-full' : '']"
  >
    <span class="flex items-center justify-center gap-x-2 text-sm">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
button {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  @apply border;
}

.primary {
  @apply text-white bg-fidia-purple border-fidia-purple;
}

.secondary {
  @apply text-fidia-grey bg-white border-fidia-light-ash;
}
</style>
