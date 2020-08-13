<template>
  <div></div>
</template>

<script>
// 错误处理，请求错误时进行的处理
import axios from 'axios'
export default {
  name: '3-4错误处理',
  created () {
    // 请求拦截器
    axios.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    axios.interceptors.response.use(res => {
      return res
    }, error => {
      return Promise.reject(error)
    })
    axios.get('/data.json', {
      params: {
        id: 13
      }
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // 例子：实际开发国恒中，一般都需要添加一个统一的错误处理
    const instance = axios.create({})
    instance.interceptors.request.use(config => {
      return config
    }, error => {
      // 请求错误 http状态 常见：401超时，404 not
      $('#modal').show()
      setTimeout(() => {
        $('#modal').hide()
      }, 2000)
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      return res
    }, error => {
      // 响应错误 http状态 常见：500系统错误 502 系统重启
      $('#modal').show()
      setTimeout(() => {
        $('#modal').hide()
      }, 2000)
      return Promise.reject(error)
    })
    instance.get('/data.json').then(res => {
      console.log(res)
    })
  }
}
</script>
