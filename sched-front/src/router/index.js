import Vue from 'vue'
import Router from 'vue-router'
import EmpList from '@/components/EmpList'
import CreateEmp from '@/components/CreateEmp'
import CreateBiz from '@/components/CreateBiz'
import AppLogin from '../components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmpList',
      component: EmpList
    },
    {
      path: '/createemp',
      name: 'CreateEmp',
      component: CreateEmp
    },
    {
      path: '/createbiz',
      name: 'CreateBiz',
      component: CreateBiz
    },
    {
      path: '/login',
      component: AppLogin
    }
  ],
  mode: 'history'
})
