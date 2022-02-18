<template>
  <div class="table relative">
    <div class="header">
      <div class="row" :class="columnNumber">
        <span
          class="text-xs font-medium flex items-center"
          v-for="column in tableHeaders"
          :key="column.name"
          :class="columnSpan(column.span)"
        >
          <input
            v-if="column.slug == 'company'"
            class="opacity-0 absolute h-8 w-8"
            type="checkbox"
          />
          <div
            v-if="column.slug == 'company'"
            class="bg-fidia-light-purple mr-3 border-2 rounded-md border-fidia-light-ash w-5 h-5 flex flex-shrink-0 justify-center items-center focus-within:border-fidia-purple"
          >
            <svg
              class="fill-current hidden w-3 h-3 text-fidia-purple pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#7F56D9"
                  fill-rule="nonzero"
                >
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                  />
                </g>
              </g>
            </svg>
          </div>
          {{ column.name }}
          <Icon
            v-if="column.slug == 'company'"
            class="ml-2 cursor-pointer"
            icon="charm:arrow-down"
          />
        </span>
        <p :class="columnSpan(actionSpan)" v-if="hasActions"></p>
      </div>
    </div>
    <div class="body">
      <div
        class="row"
        :class="columnNumber"
        v-for="(rowData, index) in tableBody"
        :key="index"
      >
        <div
          v-for="column in tableHeaders"
          :key="column.name"
          class="text-sm"
          :class="columnSpan(column.span)"
        >
          <div
            v-if="column.slug == 'company'"
            class="flex items-center gap-x-3"
          >
            <input
              type="checkbox"
              class="opacity-0 cursor-pointer absolute h-8 w-8"
            />
            <div
              class="bg-fidia-light-purple border-2 rounded-md border-fidia-light-ash w-5 h-5 flex flex-shrink-0 justify-center items-center focus-within:border-fidia-purple"
            >
              <svg
                class="fill-current hidden w-3 h-3 text-fidia-purple pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="#7F56D9"
                    fill-rule="nonzero"
                  >
                    <path
                      d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="w-10 h-10">
              <img
                class="object-contain w-full h-full"
                :src="rowData[column.slug].logo"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-medium truncate">{{
                rowData[column.slug].name
              }}</span>
              <span class="text-fidia-dark-ash truncate">{{
                rowData[column.slug].website
              }}</span>
            </div>
          </div>
          <div
            v-if="column.slug == 'license'"
            class="relative flex items-center"
          >
            <div
              class="absolute top-1/2 z-10 rounded h-2 bg-fidia-purple"
              :class="rowData[column.slug]"
            ></div>
            <div
              class="absolute top-1/2 rounded w-full h-2 bg-fidia-light-purple"
            ></div>
          </div>
          <div v-if="column.slug == 'status'" class="flex items-center">
            <div
              class="rounded-2xl px-2 py-0.5 font-medium"
              :class="[
                rowData[column.slug] === 'Customer'
                  ? 'text-fidia-green bg-fidia-light-green'
                  : 'text-fidia-grey bg-fidia-light-grey',
              ]"
            >
              {{ rowData[column.slug] }}
            </div>
          </div>
          <div v-if="column.slug == 'users'" class="flex items-center">
            <div
              v-for="i of 5"
              :key="i"
              class="border-2 border-white rounded-full w-8 h-8 first:-ml-0 -ml-2"
            >
              <img
                class="w-full h-full object-contain"
                src="/fidia-avatar.svg"
              />
            </div>
            <div
              v-if="rowData[column.slug] > 5"
              class="border-2 flex items-center justify-center text-xs border-white bg-fidia-light-purple font-medium text-fidia-purple rounded-full w-8 h-8 first:-ml-0 -ml-2"
            >
              +{{ rowData[column.slug] - 5 }}
            </div>
          </div>
          <div v-if="column.slug == 'about'" class="flex items-center">
            <div class="flex flex-col">
              <span class="font-medium truncate">{{
                rowData[column.slug].title
              }}</span>
              <span class="text-fidia-dark-ash truncate">{{
                rowData[column.slug].subtitle
              }}</span>
            </div>
          </div>
        </div>
        <div
          v-if="hasActions"
          class="flex gap-x-3 overflow-x-auto hide-scrollbar"
          :class="columnSpan(actionSpan)"
        >
          <div class="action" @click="deleteRowData()">
            <Icon icon="gg:trash" />
          </div>
          <div class="action" @click="edit()">
            <Icon icon="prime:pencil" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="flex items-center gap-x-3">
        <Button type="secondary">Previous</Button>
        <Button type="secondary">Next</Button>
      </div>
      <p class="text-sm text-fidia-grey">Page 1 of 10</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableBody: {
      type: Array,
      required: true,
    },
    hasActions: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const actionSpan = 1;
    return { actionSpan };
  },
  methods: {
    columnSpan(length) {
      return `span-${length}`;
    },
    edit(rowData) {
      alert("Edited");
    },
    deleteRowData(rowData) {
      alert("Deleted");
    },
  },
  computed: {
    columnNumber() {
      let number = 0;
      this.$props.tableHeaders.forEach((column) => {
        number += column.span;
      });
      return `col-${
        this.$props.hasActions ? number + this.actionSpan : number
      }`;
    },
  },
};
</script>

<style scoped src="./Table.css"></style>
