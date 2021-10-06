<template>
  <div class="ElectricityMeteringPoints">
    <h4 class="text-center margin-bottom-60px">Счетчик электрической энергии</h4>
    <ConsumptionObjectsSelect
        WithExpiredDate="true"
        @request="request"
    />
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Номер</th>
        <th>Тип</th>
        <th>Дата поверки</th>
        <th>Точка измерения электроэнергии</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='elMeter in electricityMeters' :key='elMeter.id'>
        <td>{{getElementIndexByArray(electricityMeters, elMeter) + 1}}</td>
        <td>{{elMeter.no}}</td>
        <td>{{elMeter.type}}</td>
        <td>{{dateFormatter(elMeter.verificationDate)}}</td>
        <td>{{elMeter.electricityMeteringPointName}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getElementIndexByArray } from "../functions/getElementIndexByArray";
import { dateFormatter } from "../functions/dateFormatter";
import ConsumptionObjectsSelect from "../components/app/selects/ConsumptionObjectSelect";
export default {
  name: 'ElectricityMeterPage',
  methods: {
    getElementIndexByArray, dateFormatter,
    request (params){
      this.$store.dispatch("getElectricityMeters", params);
    }
  },
  computed: {
    electricityMeters() {
      return this.$store.state.electricityMeters;
    },
  },
  mounted() {
    this.$store.dispatch("getElectricityMeters");
  },
  components: {
    ConsumptionObjectsSelect
  }
}
</script>
