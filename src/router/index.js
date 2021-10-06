import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ConsumptionObjectsPage',
    meta: {layout: 'main'},
    component: () => import('../views/ConsumptionObjectsPage')
  },
  {
    path: '/electricity-metering-points',
    name: 'ElectricityMeteringPointPage',
    meta: {layout: 'main'},
    component: () => import('../views/ElectricityMeteringPointsPage')
  },
  {
    path: '/electricity-metering-points/create',
    name: 'ElectricityMeteringPointsCreate',
    meta: {layout: 'main'},
    component: () => import('../views/ElectricityMeteringPointsCreatePage')
  },
  {
    path: '/electricity-meters',
    name: 'ElectricityMeter',
    meta: {layout: 'main'},
    component: () => import('../views/ElectricityMetersPage')
  },
  {
    path: '/electrical-transformers',
    name: 'ElectricalTransformer',
    meta: {layout: 'main'},
    component: () => import('../views/ElectricalTransformersPage')
  },
  {
    path: '/voltage-transformers',
    name: 'VoltageTransformer',
    meta: {layout: 'main'},
    component: () => import('../views/VoltageTransformersPage')
  },
  {
    path: '/metering-devices',
    name: 'MeteringDevices',
    meta: {layout: 'main'},
    component: () => import('../views/MeteringDevicesPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
