<template>
  <div class="MeteringDevices">
    <h4 class="text-center margin-bottom-60px">Расчетный прибор учета</h4>
    <MeteringDevicesSelect @startDate="getRequest"/>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Номер</th>
        <th>Дата установки</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='meterDevice in meteringDevices' :key='meterDevice.id'>
        <td>{{getElementIndexByArray(meteringDevices, meterDevice) + 1}}</td>
        <td>{{meterDevice.no}}</td>
        <td>{{dateFormatter(meterDevice.startDate)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getElementIndexByArray } from "../functions/getElementIndexByArray";
import { dateFormatter } from "../functions/dateFormatter";
import MeteringDevicesSelect from "../components/app/selects/MeteringDevicesSelect";
export default {
  name: 'MeteringDevicesPage',
  methods: {
    getElementIndexByArray, dateFormatter,
    getRequest(year){
      if(year === 'all'){
        this.$store.dispatch("getMeteringDevices");
      } else {
        this.$store.dispatch("getMeteringDevices", year);
      }
    }
  },
  components: {
    MeteringDevicesSelect
  },
  computed: {
    meteringDevices() {
      return this.$store.state.meteringDevices;
    },
  }
}
</script>
