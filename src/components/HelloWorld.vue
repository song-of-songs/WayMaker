<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="uploadOneFile()">uploadFile: {{returnNum}}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
// import wayMakerService from "../service/index.js";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      info:"",
      returnNum:"0"
    }
  },
  mounted () {
    // console.log(wayMakerService.uploadOneFile({"test":1}).then(res => {
    //   console.log(res)}));
    console.log("hello~")
  },
  methods:{
    uploadOneFile(){
      this.$service.uploadOneFile({"test":1})
        .then(res => {
          console.log(res)
          this.returnNum = res})
    }
  }
}
</script>
