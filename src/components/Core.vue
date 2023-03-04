<template>
  <div class="hello">
    <div class="input-container mt-2 position-relative">
      <input v-model="city" @keyup.enter="fetch" class="input-field" placeholder="Enter location..." type="text">
      <div v-if="loaded" class="spinner-border text-light position-absolute" role="status">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data () {
    return {
      api_key: '470fc4efa3bdff3b7bd6a240ac65c3bd',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      city: '',
      loaded: false,
      visited: 0
    }
  },
  mounted () {
  },
  methods: {
    async fetch() {
      this.loaded = true
      try{
        const response = await axios.get(`${this.url_base}weather?q=${this.city}&units=metric&appid=${this.api_key}`)
        if (response.status === 200) {
            this.$emit('weather', response.data)
        }
      } catch (e) {
        if (e.message === 'Request failed with status code 404') {
          this.$notify({ type: 'error', text: 'Enter location name correctly' })
        } else {
          this.$notify({ type: 'error', text: 'Something went wrong' })
        }
      }
      this.loaded = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 0 auto;
}
.input-container {
 display: flex;
  justify-items: center;
  margin: 0 auto;
}
.input-field{
  line-height: 3;
  border: 2px solid #fff;
  width: 300px;
  background-color: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding-left: 8px;
  box-shadow: 0px 0px #000;
  align-self: center;
}
.input-field:focus {
  outline: none;
}
.input-field::placeholder{
  color: #ffffff;
}
.marker{
  width: 45px;
}
button:disabled {
  cursor: not-allowed;
}
.spinner-border.text-light.position-absolute {
  right: 15px;
  top: 24%;
  width: 25px;
  height: 25px;
}
</style>
