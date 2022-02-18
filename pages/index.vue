<template>
  <div class="lg:mb-[72px]">
    <Header />
    <div>
      <div
        class="responsive-wrapper my-8 lg:flex lg:items-start lg:justify-between"
      >
        <div>
          <h2 class="mb-1">Welcome Back, Olivia</h2>
          <p class="text-base text-fidia-dark-ash">
            Track, manage and forecast your customers and orders.
          </p>
        </div>
        <div class="flex gap-x-3 mt-4 lg:mt-0">
          <Button type="secondary">
            <Icon class="text-2xl" icon="lucide:upload-cloud" />Import
          </Button>
          <Button>
            <Icon class="text-2xl" icon="akar-icons:plus" /> Add
          </Button>
        </div>
      </div>
      <div
        class="responsive-wrapper mb-8 space-y-5 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
      >
        <MetricCard
          title="Total customers"
          statistic="2,420"
          :change="40"
          :profit="true"
        />
        <MetricCard
          title="Members"
          statistic="1,210"
          :change="10"
          :profit="false"
        />
        <MetricCard
          title="Active now"
          statistic="316"
          :change="20"
          :profit="true"
        />
      </div>
      <div
        class="responsive-wrapper mb-6 space-y-3 lg:flex lg:flex-row-reverse lg:justify-between lg:space-y-0"
      >
        <div class="search-input">
          <Icon class="text-xl" icon="eva:search-outline" />
          <input class="w-full outline-none" placeholder="Search" />
        </div>
        <div class="lg:flex lg:flex-row-reverse lg:gap-x-3">
          <Button :fullWidth="isMobile" type="secondary">
            <Icon class="text-fidia-grey text-2xl" icon="bi:filter" /> Edit
            filters
          </Button>
          <div class="filters flex gap-x-3 mt-3 lg:mt-0">
            <div class="filter">
              <span>All time</span>
              <Icon
                class="text-fidia-light-violet cursor-pointer"
                icon="octicon:x-16"
              />
            </div>
            <div class="filter">
              <span>US, AU, +4</span>
              <Icon
                class="text-fidia-light-violet cursor-pointer"
                icon="octicon:x-16"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="lg:px-20 2xl:px-40 overflow-x-auto">
        <Table :tableHeaders="companyHeaders" :tableBody="companies" />
      </div>
      <div
        class="mobile-footer lg:hidden my-8 responsive-wrapper bg-white w-full max-w-xs mx-auto"
      >
        <div class="border-t border-[#EAECF0] flex justify-between p-6">
          <Icon class="text-fidia-dark-ash" icon="charm:arrow-left" />
          <p class="text-sm text-fidia-grey">
            Page <span class="font-medium">1 of 10</span>
          </p>
          <Icon class="text-fidia-dark-ash" icon="charm:arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableHeader from "../components/Table/tableHeader";
import catalog from "../static/company-logos/catalog.svg";
import circooles from "../static/company-logos/circooles.svg";
import command from "../static/company-logos/command.svg";
import hourglass from "../static/company-logos/hourglass.svg";
import layers from "../static/company-logos/layers.svg";
import quotient from "../static/company-logos/quotient.svg";
import sisyphus from "../static/company-logos/sisyphus.svg";

export default {
  name: "DashboardPage",
  computed: {
    isMobile() {
      return window.matchMedia("only screen and (max-width: 760px)").matches;
    },
  },
  data() {
    return {
      companyHeaders: [
        new TableHeader("Company", "company", 3),
        new TableHeader("License use", "license", 1),
        new TableHeader("Status", "status", 1),
        new TableHeader("Users", "users", 2),
        new TableHeader("About", "about", 3),
      ],
      companies: [
        {
          company: { name: "Catalog", website: "catalogapp.io", logo: catalog },
          license: "w-9/12",
          status: "Customer",
          users: 10,
          about: {
            title: "Content curating app",
            subtitle: "Brings all your news into one place",
          },
        },
        {
          company: {
            name: "Circooles",
            website: "getcirooles.com",
            logo: circooles,
          },
          license: "w-8/12",
          status: "Churned",
          users: 13,
          about: {
            title: "Design software",
            subtitle: "Super lightweight design app",
          },
        },
        {
          company: { name: "Command+R", website: "cmdr.ai", logo: command },
          license: "w-6/12",
          status: "Customer",
          users: 7,
          about: {
            title: "Data prediction",
            subtitle: "AI and machine learning data",
          },
        },
        {
          company: {
            name: "Hourglass",
            website: "hourglass.app",
            logo: hourglass,
          },
          license: "w-11/12",
          status: "Customer",
          users: 7,
          about: {
            title: "Productivity app",
            subtitle: "Time management and productivity",
          },
        },
        {
          company: { name: "Layers", website: "getlayers.io", logo: layers },
          license: "w-5/12",
          status: "Churned",
          users: 5,
          about: {
            title: "Web app integrations",
            subtitle: "Connect web apps seamlessly",
          },
        },
        {
          company: { name: "Quotient", website: "quotient.co", logo: quotient },
          license: "w-2/12",
          status: "Customer",
          users: 11,
          about: {
            title: "Sales CRM",
            subtitle: "Web-based sales doc management",
          },
        },
        {
          company: {
            name: "Sisyphus",
            website: "sisyphus.com",
            logo: sisyphus,
          },
          license: "w-6/12",
          status: "Customer",
          users: 9,
          about: {
            title: "Automation and workflow",
            subtitle: "Time tracking, invoicing and expenses",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.filter {
  @apply flex items-center gap-x-2 rounded-2xl bg-fidia-light-purple px-2 py-0.5;
  @apply lg:rounded-lg lg:px-4 lg:py-2;
}

.filter > span {
  @apply text-sm font-medium text-fidia-violet;
}
</style>
