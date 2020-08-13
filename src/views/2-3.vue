<template>
  <div></div>
</template>

<script>
// 并发请求，同时进行多个请求，并统一返回处理值,请求多个请求，获得的值同时处理
import axios from 'axios'
export default {
  name: 'axios2-3',
  created () {
    // axios.all()  axios.apread()
    axios.all([
      axios.get('/data.json'),
      axios.get('/city.json')
    ]).then(
      axios.spread((dataRes, cityRes) => {
        console.log(dataRes)
        console.log(cityRes)
      })
    )
  }
}
</script>
