<template>
  <div id="app">
    <Navbar />
    <Header />
    <ShowRecommendation />
  </div>
</template>

<script>
import Header from './components/Header';
import ShowRecommendation from './components/ShowRecommendation';
export default {
  components: {
    Header,
    ShowRecommendation
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  margin: 0;

}
</style>
