import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    consumptionObjects: [],
    electricityMeteringPoints: [],
    createElectricityMeteringPoint: {},
    electricityMeters: [],
    electricalTransformers: [],
    voltageTransformers: [],
    meteringDevices: []
  },
  mutations: {
    SET_CONSUMPTION_OBJECTS(state, consumptionObjects) {
      state.consumptionObjects = consumptionObjects
    },
    SET_ELECTRICITY_METERING_POINTS(state, electricityMeteringPoints) {
      state.electricityMeteringPoints = electricityMeteringPoints
    },
    SET_ELECTRICITY_METERS(state, electricityMeters) {
      state.electricityMeters = electricityMeters
    },
    SET_ELECTRICAL_TRANSFORMERS(state, electricalTransformers) {
      state.electricalTransformers = electricalTransformers
    },
    SET_VOLTAGE_TRANSFORMERS(state, voltageTransformers) {
      state.voltageTransformers = voltageTransformers
    },
    SET_METERING_DEVICES(state, meteringDevices) {
      state.meteringDevices = meteringDevices
    },
    CREATE_ELECTRICITY_METERING_POINT(state, response) {
      state.createElectricityMeteringPoint = response
    },
  },
  actions: {
    getConsumptionObjects({ commit }) {
      axios.get('/ConsumptionObject')
        .then(response => {
          commit('SET_CONSUMPTION_OBJECTS', response.data)
        })
    },
    getElectricityMeteringPoints({ commit }) {
      axios.get('/ElectricityMeteringPoint')
        .then(response => {
          commit('SET_ELECTRICITY_METERING_POINTS', response.data)
        })
    },
    createElectricityMeteringPoints({ commit }, data) {
      axios('/ElectricityMeteringPoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        data: JSON.stringify(data)
      })
        .then(response => {
          commit('CREATE_ELECTRICITY_METERING_POINT', response.data)
        })
    },
    getElectricityMeters({ commit }, params) {
      axios.get('/ElectricityMeter', {params})
        .then(response => {
          commit('SET_ELECTRICITY_METERS', response.data)
        })
    },
    getElectricalTransformers({ commit }, params) {
      axios.get('/ElectricalTransformer', {params})
        .then(response => {
          commit('SET_ELECTRICAL_TRANSFORMERS', response.data)
        })
    },
    getVoltageTransformers({ commit }, params) {
      axios.get('/VoltageTransformer', {params})
        .then(response => {
          commit('SET_VOLTAGE_TRANSFORMERS', response.data)
        })
    },
    getMeteringDevices({ commit }, year) {
      axios.get('/MeteringDevice', {
        params: {
          year
        }})
        .then(response => {
          commit('SET_METERING_DEVICES', response.data)
        })
    }
  },
  modules: {}
})
