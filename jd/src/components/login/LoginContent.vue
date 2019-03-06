<template>
  <div class="conter">
      <login-form></login-form>
      <login-way></login-way>
  </div>

</template>

<script>
    import LoginForm from "./LoginForm"
    import LoginWay from "./LoginWay"
    export default {
        name: "LoginContent",
        components: {LoginWay, LoginForm},
          LoginForm,
          LoginWay
    }
</script>

<style scoped>
  .conter{
    margin:0 .20rem;
  }
</style>
