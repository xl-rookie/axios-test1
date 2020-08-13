<template>
  <div>
  </div>
</template>

<script>
// 拦截器：在请求或响应被处理前拦截它们
// 请求拦截器
// 响应拦截器
import axios from 'axios'
export default {
  name: 'axios3-3拦截器',
  created () {
    //请求拦截器
    axios.interceptors.request.use(config => {
      // 在发送请求前做些什么
      return config
    },error => {
      // 请求错误的时候做些什么
      // reject 一般错误时使用
      return Promise.reject(error)
    })
    // 响应拦截器
    axios.interceptors.response.use(res => {
      // 请求成功对响应数据做出处理
      return res    //res的数据会到 then的 res中
    },error => {
      // 响应错误做些什么
      return Promise.reject(error)
    })
    // axios.get().then().catch(error => {})  成功：then，错误：catch
    // 取消拦截器(了解)
    const interceptors = axios.interceptors.request.use(config => {
      config.headers = {
        auth: true
      }
      return config
    })
    // 取消拦截器使用
    axios.interceptors.request.eject(interceptors)
    // 例子，登陆状态(token:'')，需要登录的接口
    const instance = axios.create({})
    instance.interceptors.request.use(config => {
      config.headers.token = ''
      return config
    })
    // 访问不需要登陆的接口
    const newInstance = axios.create({})
    // 移动端开发,登陆时添加动画过渡
    const instance_phone = axios.create({})
    instance_phone.interceptors.request.use(config => {
      $('#modal').show()
      return config
    })
    instance_phone.interceptors.response.use(res => {
      $('#modal').show()
      return res
    })
  }
}
</script>
