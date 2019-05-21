<template>
  <div id="app">
    <Navbar />
    <Header />
    <h2 style="text-align: center;">Most Read Article</h2>
    <ShowRecommendation />
    <Modal>
      <template v-slot:modalHeader>
        <div>
          <h2>Login Account</h2>
        </div>
      </template>
      <template v-slot:modalBody>
        <div>
          <input type="text" placeholder="username" required>
          <input type="text" placeholder="password" required>
          <button @click="handleLogin">LOGIN</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Header from './components/Header';
import ShowRecommendation from './components/ShowRecommendation';
import Modal from './components/Modal';
export default {
  components: {
    Header,
    ShowRecommendation,
    Modal
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
