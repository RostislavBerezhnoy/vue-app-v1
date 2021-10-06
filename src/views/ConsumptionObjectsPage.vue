<template>
  <div class="ConsumptionObjects">
    <h4 class="text-center margin-bottom-60px">Объект потребления</h4>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Название</th>
        <th>Адрес</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='consObj in consumptionObjects' :key='consObj.id'>
        <td>{{getElementIndexByArray(consumptionObjects, consObj) + 1}}</td>
        <td>{{consObj.name}}</td>
        <td>{{consObj.address}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getElementIndexByArray } from "../functions/getElementIndexByArray";
export default {
  name: 'ConsumptionObjectsPage',
  methods: {
    getElementIndexByArray
  },
  computed: {
    consumptionObjects() {
      return this.$store.state.consumptionObjects;
    },
  },
  mounted() {
    this.$store.dispatch("getConsumptionObjects");
  }
}
</script>
