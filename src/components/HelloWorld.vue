<template>
  <h1>{{ msg }}</h1>
  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <input type="file" id="fileObj" /> <!-- webkitdirectory -->
  <button @click="uploadOneFile()">点击上传</button>
  <!-- <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p> -->
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
      returnNum:"0",
      fileObj:{}
    }
  },
  mounted () {
    // console.log(wayMakerService.uploadOneFile({"test":1}).then(res => {
    //   console.log(res)}));
    console.log("hello~")
    let fileObj = document.getElementById("fileObj")
    // console.log(fileObj.target)
    const onFileChange = (e) => {
        this.fileObj = e.target.files[0]
        console.log(this.fileObj)
    };
    fileObj.addEventListener("change", onFileChange, false);

  },
  methods:{
    uploadOneFile(){
      // console.log(this.fileObj)
      // this.$service.uploadOneFile(this.fileObj)
      //   .then(res => {
      //     console.log(res)
      //     this.returnNum = res})

      //新建 formData 对象
      let formData = new FormData()
      //添加文件信息
      formData.append("file", this.fileObj)
      let config = {
          //必须
          headers: {
              "Content-Type": "multipart/form-data"
          },
          //获取上传进度, 可去掉
          onUploadProgress: function(progressEvent) {
              let complete =
                  ((progressEvent.loaded / progressEvent.total) * 100) | 0
              console.log(complete + "%")
          },
      }
      this.$service.upload("/", formData, {
              "Content-Type": "multipart/form-data"
          }).then(result => {
          console.log(result)
      });
    }
  }
}
</script>
<style>
input{
  width: 300px;
  height: 250px;
  background-image: linear-gradient(to bottom right, #FFC0C0, #A6BCE8);
  border-radius: 50px;
  text-align: center;
  
}
button{
  width: 300px;
  height: 100px;
  margin-top: 20px;
}
</style>
