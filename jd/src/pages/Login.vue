<template>
    <div class="login">
        <login-head></login-head>
        <login-content></login-content>
    </div>

</template>

<script>
    import LoginHead from "../components/login/LoginHead"
    import LoginContent from "../components/login/LoginContent"
    export default {
        name: "Login",
        components:{
          LoginHead,
          LoginContent
        }
    }
</script>

<style scoped>
  .login{
    height: 100%;
    background: #fff;
  }
</style>
