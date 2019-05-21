<template>
  <div id="app">
    <Navbar />
    <Header />
    <h2 style="text-align: center;">Most Read Article</h2>
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
