<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        :exact="link.exact"
        custom
        v-slot="{navigate, isActive, isExactActive}"
    >
      <li :class="[isActive && 'active', isExactActive && 'active']">
        <a
           href="#"
           @click="navigate"
           class='waves-effect waves-orange pointer active'
        >
          {{link.title}}
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["isOpen"],
  data: () => ({
    links: [
      {title: 'Объект потребления', url: '/', exact: true},
      {title: 'Точка измерения электроэнергии', url: '/electricity-metering-points'},
      {title: 'Счетчик электрической энергии', url: '/electricity-meters'},
      {title: 'Трансформатор тока', url: '/electrical-transformers'},
      {title: 'Трансформатор напряжения', url: '/voltage-transformers'},
      {title: 'Расчетный прибор учета', url: '/metering-devices'},

    ]
  })
}
</script>
