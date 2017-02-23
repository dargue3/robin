<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import RandomOrg from '../assets/js/RandomOrgApi'

export default {
  name: 'App',
  mounted() {
    if (this.onHomePage()) {
      // if at home screen, instead move us to random conversation
      // denoted by a random slug generated from Random.org
      axios.post(RandomOrg.url, RandomOrg.payload).then((response) => {
        this.$router.push(response.data.result.random.data[0])
      })
    }
  },

  methods: {
    onHomePage() {
      return this.$route.path.length === 1
    },
  },
}

</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Overlock:400,400i,700')
body, html
  height: 100%
  margin: 0
  font-family: 'Overlock'
</style>
