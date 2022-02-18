<template>
  <div>
    <div class="header responsive-wrapper py-4">
      <div class="lg:flex lg:items-center lg:gap-x-4">
        <NuxtLink to="/">
          <img src="/untitled-logo.svg" />
        </NuxtLink>
        <div id="navigation" class="hidden lg:flex items-center gap-x-2">
          <NuxtLink to="/home">Home</NuxtLink>
          <NuxtLink to="/">Dashboard</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/tasks">Tasks</NuxtLink>
          <NuxtLink to="/reporting">Reporting</NuxtLink>
          <NuxtLink to="/users">Users</NuxtLink>
        </div>
      </div>

      <div class="hidden lg:flex lg:items-center lg:gap-x-4">
        <Button type="secondary">
          <Icon class="text-xl" icon="ph:lightning-bold" />
          Upgrade now
        </Button>
        <div class="flex items-center gap-x-4 text-fidia-dark-ash">
          <Icon class="text-2xl cursor-pointer" icon="mi:settings" />
          <Icon class="text-2xl cursor-pointer" icon="iconoir:bell" />
        </div>
        <div>
          <img src="/fidia-avatar.svg" />
        </div>
      </div>

      <div class="lg:hidden">
        <Icon
          class="text-fidia-dark-ash text-2xl"
          icon="heroicons-outline:menu-alt-1"
        />
      </div>
    </div>
    <div class="header hidden lg:flex responsive-wrapper lg:py-3">
      <div class="lg:flex lg:items-center lg:gap-x-4">
        <div id="navigation" class="hidden lg:flex items-center gap-x-2">
          <NuxtLink to="/">Overview</NuxtLink>
          <NuxtLink to="/notifications">Notifications</NuxtLink>
          <NuxtLink to="/analytics">Analytics</NuxtLink>
          <NuxtLink to="/saved-reports">Saved reports</NuxtLink>
          <NuxtLink to="/trade-history">Trade history</NuxtLink>
          <NuxtLink to="/user-reports">User reports</NuxtLink>
        </div>
      </div>

      <div class="hidden lg:flex lg:items-center lg:gap-x-4">
        <div class="search-input">
          <Icon class="text-xl" icon="eva:search-outline" />
          <input class="w-full outline-none" placeholder="Search" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  @apply flex items-center justify-between bg-white;
}

a {
  @apply px-3 py-2 rounded-md text-fidia-grey font-medium hover:bg-fidia-ash;
}

a.nuxt-link-exact-active {
  @apply bg-fidia-ash;
}
</style>
