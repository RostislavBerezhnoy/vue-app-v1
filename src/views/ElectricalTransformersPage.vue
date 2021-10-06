<template>
  <div class="ElectricalTransformers">
    <h4 class="text-center margin-bottom-60px">Трансформатор тока</h4>
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
      <tr v-for='elTransformer in electricalTransformers' :key='elTransformer.id'>
        <td>{{getElementIndexByArray(electricalTransformers, elTransformer) + 1}}</td>
        <td>{{elTransformer.no}}</td>
        <td>{{elTransformer.type}}</td>
        <td>{{elTransformer.transformationRatio}}</td>
        <td>{{dateFormatter(elTransformer.verificationDate)}}</td>
        <td>{{elTransformer.electricityMeteringPointName}}</td>
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
      this.$store.dispatch("getElectricalTransformers", params);
    }
  },
  computed: {
    electricalTransformers() {
      return this.$store.state.electricalTransformers;
    },
  },
  mounted() {
    this.$store.dispatch("getElectricalTransformers");
  },
  components: {
    ConsumptionObjectsSelect
  }
}
</script>
