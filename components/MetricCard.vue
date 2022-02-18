<template>
  <div class="card">
    <div class="flex items-center justify-between">
      <p class="font-medium">{{ title }}</p>
      <Icon
        class="text-[#98A2B3] cursor-pointer"
        icon="entypo:dots-three-vertical"
      />
    </div>
    <div class="flex items-end justify-between mt-5">
      <div>
        <h1>{{ statistic }}</h1>
        <div class="flex items-center mt-4">
          <Icon v-if="profit" class="text-[#12B76A]" icon="charm:arrow-up" />
          <Icon v-else class="text-[#F04438]" icon="charm:arrow-down" />
          <p
            class="text-sm font-medium"
            :class="[profit ? 'text-fidia-green' : 'text-fidia-red']"
          >
            {{ change }}%
            <span class="text-fidia-dark-ash">vs last month</span>
          </p>
        </div>
      </div>
      <img v-if="profit" src="/chart-up.svg" />
      <img v-else src="/chart-down.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MetricCardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    statistic: {
      type: String,
      required: true,
    },
    change: {
      type: Number,
      required: true,
    },
    profit: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  @apply bg-white p-4 lg:p-6 rounded-lg border border-[#EAECF0];
}
</style>
