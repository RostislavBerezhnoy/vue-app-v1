<template>
  <ul class="left hide-on-small-and-down">
    <li class="input-field col s12">
      <select ref="metDevSelect" id="metDevSelect">
        <option value="all">Выбрать все</option>
        <option
          v-for="year in years"
          :key="year.value"
          :value="year.value"
          :selected="year.selected"
        >
          {{year.value}}
        </option>
      </select>
      <label>Выберите год установки</label>
    </li>
  </ul>
</template>

<script>
import JQuery from 'jquery';
export default {
  name: "MeteringDevicesSelect",
  data: () => ({
    years: [
      { value: 2015 },
      { value: 2016 },
      { value: 2017 },
      { value: 2018, selected: true },
      { value: 2019 },
      { value: 2020 },
      { value: 2021 }
    ]
  }),
  mounted() {
      M.FormSelect.init(this.$refs.metDevSelect);
    let $ = JQuery;
    let select = $("#metDevSelect");
    if (select.val()){
      this.FilterByYear(select.val());
    }
    select.change(function(){
      this.FilterByYear(select.val());
    }.bind(this));
  },
  methods: {
    FilterByYear (year) {
      this.$emit('startDate', year);
    }
  }
}
</script>
