 
module.exports = {
  proxy:{
      '/api':{
          target:'http://test.songofsongs.life',
          // target:'http://localhost:8082',
          changeOrigin:true,  // 允许跨域
          rewrite:path => path.replace(/^\/api/,'')
      }
  }

}