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
    let data = {
      id : 12
    }
    axios.post('/post',data).then((res)=>{
      console.log(res)
    })
    axios({
      method: 'post',
      url: '/post',
      data: data
    }).then((res)=>{
      console.log(res)
    })
    // form-data 数据
    let formData = new FormData()
    for(let key in data){
      formData.append(key, data[key])
    }
    axios.post('/post',formData).then((res)=>{
      console.log(res)
    })
  }
}
</script>
