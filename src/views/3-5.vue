<template>
  <div></div>
</template>

<script>
// 取消正在进行的http请求(了解)
import axios from 'axios'
export default {
  name: 'axios取消请求',
  created () {
    axios.get('/data.json', {
      params: {
        id: 12
      }
    }).then((res) => {
      console.log(res)
    })
    axios({
      method: 'get',
      url: '/data.json',
      params: {
        id: 13
      }
    }).then((res) => {
      console.log(res)
    })
    // 生成一个source对象
    const source = axios.CancelToken.source()
    axios.get('/data.json', {
      cancelToken: source.token
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // 取消请求
    source.cancel('cancel http')
    // 使用取消请求情况：请求时常很长，变更请求条件的情况下，使用取消请求
  }
}
</script>
