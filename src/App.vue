<template>
  <div id="app">
    <div id="nav">
      <notifications position="top left"/>
      <Home />
    </div>
  </div>
</template>
<script>
import Home from "./views/Home";
export default {
  components: {Home},
  data() {
    return {
    }
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  background-image: url("./assets/lukasz-lada-LtWFFVi1RXQ-unsplash.jpg");
  background-size: cover;
  overflow: hidden;
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
