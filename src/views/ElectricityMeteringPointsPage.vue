<template>
  <div class="ElectricityMeteringPoints">
    <h4 class="text-center margin-bottom-60px">Точка измерения электроэнергии</h4>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Название</th>
        <th>Объект потребления</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='elMeterPoint in electricityMeteringPoints' :key='elMeterPoint.id'>
        <td>{{getElementIndexByArray(electricityMeteringPoints, elMeterPoint) + 1}}</td>
        <td>{{elMeterPoint.name}}</td>
        <td>{{elMeterPoint.consumptionObjectName}}</td>
      </tr>
      </tbody>
    </table>
    <AddButton />
  </div>
</template>

<script>
import { getElementIndexByArray } from "../functions/getElementIndexByArray";
import AddButton from "../components/app/buttons/AddButton";
export default {
  name: 'ElectricityMeteringPointPage',
  components: {
    AddButton
  },
  methods: {
    getElementIndexByArray
  },
  computed: {
    electricityMeteringPoints() {
      return this.$store.state.electricityMeteringPoints;
    },
  },
  mounted() {
    this.$store.dispatch("getElectricityMeteringPoints");
  }
}
</script>
