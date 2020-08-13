<template>
 <div></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'axios3-1创建axios实例',
  created () {
    // 创建实例
    const instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 1000
    })
    // 使用实例
    instance.get('/data.json').then(res => {
      console.log(res)
    })
  }
}
</script>
