<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'axios2-2',
  components: {
  },
  created () {
    // get方法
    axios.get('/data.json', {
      params: {
        id: 14
      }
    }).then((res) => {
      console.log(res)
    })
    axios({
      method: 'get',
      url: '/data.json',
      params: {
        id: 15
      }
    }).then((res) => {
      console.log(res)
    })
    // post方法
    // 上传方式：
    // form-data：表单提交，（图片上传、文件上传）
    // application-json:
    const data = {
      id: 12
    }
    axios.post('/post', data).then((res) => {
      console.log(res)
    })
    axios({
      method: 'post',
      url: '/post',
      data: data
    }).then((res) => {
      console.log(res)
    })
    // form-data 数据
    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key])
    }
    axios.post('/post', formData).then((res) => {
      console.log(res)
    })
    // put请求
    axios.put('/put', data).then((res) => {
      console.log(res)
    })
    // patch请求
    axios.patch('/patch', data).then((res) => {
      console.log(res)
    })
    // delete请求,params 参数用于url上
    axios.delete('/delete', {
      params: {
        id: 12
      }
    }).then((res) => {
      console.log(res)
    })
    // delete请求,data 参数不显示于url上
    axios.delete('/delete', {
      data: {
        id: 13
      }
    }).then((res) => {
      console.log(res)
    })
    axios({
      method: 'delete',
      url: '/delete',
      params: {},
      data: {}
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>
