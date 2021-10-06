<template>
  <div v-if="consumptionObjects.length" >
    <div class="select-container">
      <ul>
        <li class="input-field col s12">
          <select ref="consObjSelect" id="consObjSelect">
            <option value="">Выбрать все</option>
            <option
                v-for="consObj in consumptionObjects"
                :key="consObj.id"
                :value="consObj.id"
            >
              {{consObj.name}}
            </option>
          </select>
          <label>Выберите объект потребления</label>
        </li>
      </ul>
    </div>
    <div class="expired-date-checkbox" v-if="WithExpiredDate">
      <label>
        <input type="checkbox" class="filled-in" :checked="state.checked" @change="check($event)">
        <span>Закончившийся срок поверки</span>
      </label>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { cleanObject } from "../../../functions/cleanObject";
export default {
  name: "ConsumptionObjectsSelect",
  props: ["WithExpiredDate"],
  data: () => ({
    state: {
      checked: false,
      consObjectID: null
    }
  }),
  computed: {
    consumptionObjects() {
      return this.$store.state.consumptionObjects;
    },
  },
  created() {
    this.$store.dispatch("getConsumptionObjects");
  },
  mounted() {
    this.SelectInitialization();
  },
  updated() {
    this.$nextTick(function () {
      this.SelectInitialization();
      $("#consObjSelect").change(function(){
        this.FilterByConsObject($("#consObjSelect").val());
      }.bind(this));
    })
  },
  methods: {
    SelectInitialization(){
      M.FormSelect.init(this.$refs.consObjSelect);
    },
    check(e){
      this.$set(this.state, 'checked', e.target.checked);
      this.getRequest();
    },
    FilterByConsObject(id){
      this.$set(this.state, 'consObjectID', id);
      this.getRequest();
    },
    getRequest(){
      let params = cleanObject({
        ConsumptionObjectID: this.state.consObjectID,
        WithExpiredDate: this.state.checked
      });
      this.$emit('request', params);
    }
  }
}
</script>

<style scoped>
  .select-container{
    width: 250px;
    display: inline-block;
    margin-right: 30px;
  }
  .expired-date-checkbox{
    width: 250px;
    display: inline-block;
    vertical-align: bottom;
    margin-bottom: 10px;
  }
</style>
