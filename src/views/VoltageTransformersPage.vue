<template>
  <div class="VoltageTransformers">
    <h4 class="text-center margin-bottom-60px">Трансформатор напряжения</h4>
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
        <th>Коэффициент трансформации</th>
        <th>Дата поверки</th>
        <th>Точка измерения электроэнергии</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='voltTransformer in voltageTransformers' :key='voltTransformer.id'>
        <td>{{getElementIndexByArray(voltageTransformers, voltTransformer) + 1}}</td>
        <td>{{voltTransformer.no}}</td>
        <td>{{voltTransformer.type}}</td>
        <td>{{voltTransformer.transformationRatio}}</td>
        <td>{{dateFormatter(voltTransformer.verificationDate)}}</td>
        <td>{{voltTransformer.electricityMeteringPointName}}</td>
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
  name: 'ElectricalTransformerPage',
  methods: {
    getElementIndexByArray, dateFormatter,
    request (params){
      this.$store.dispatch("getVoltageTransformers", params);
    }
  },
  computed: {
    voltageTransformers() {
      return this.$store.state.voltageTransformers;
    },
  },
  mounted() {
    this.$store.dispatch("getVoltageTransformers");
  },
  components: {
    ConsumptionObjectsSelect
  }
}
</script>
