<template>
   <form class="authForm" v-on:submit.prevent="submit">
      <img class="logoImage" src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-banner-pic/366597e1699ca7a2ed07a7b45351e1b8.png"/>
      <!-- LOGIN -->
      <div class="authInputArea" v-if="state.switchLogin === true">
         <Input name="Email" padding="0.5vw" type="email" v-model="state.loginForm.email" width="75%"/>
         <Input name="Password" padding="0.5vw" type="password" v-model="state.loginForm.password" width="75%"/>
      </div>
      <!-- REGISTER -->
      <div class="authInputArea" v-else>
         <Input name="New Email" padding="0.5vw" type="email" v-model="state.registerForm.email" width="75%"/>
         <Input name="New Password" padding="0.5vw" type="password" v-model="state.registerForm.password" width="75%"/>
      </div>
      <div class="authBtnArea">
         <Button v-if="state.switchLogin === true" height="50%" margin="5% 0 2.5% 0" name="LOGIN" type="primary" width="80%"/>
         <Button v-else height="50%" margin="5% 0 2.5% 0" name="REGISTER" type="primary" width="80%"/>
         <div class="authBottomText">
            {{ state.switchLogin === true ? "Don't have an account?" : "Already have an account?" }}
            <span class="authBottomTextBtn" v-on:click="switchAuth">
               {{ state.switchLogin === true ? "Register now!" : "Login now!" }}
            </span>
         </div>
      </div>
   </form>
</template>

<script>
   import { useStore } from 'vuex'
   import Button from "@/components/Button.vue"
   import Input from "@/components/Input.vue"
   import { reactive } from '@vue/reactivity'

   export default {
      components: {
         Button, Input
      },
      // data() {
      //    return {
      //       switchLogin: true,
      //       loginForm: {
      //          email: "",
      //          password: ""
      //       },
      //       registerForm: {
      //          email: "",
      //          password: ""
      //       }
      //    }
      // },
      // methods: {
      //    ...mapActions({
      //          login: "login",
      //          register: "register"
      //    }),
      //    submit() {
      //       if(this.switchLogin === true) {
      //          this.login(this.loginForm)
      //       }
      //       else {
      //          this.register(this.registerForm)
      //       }
      //    },
      //    switch() {
      //       this.switchLogin = !this.switchLogin
      //    }
      // }
      setup() {
         const store = useStore()
         const state = reactive({
            switchLogin: true,
            loginForm: {
               email: "",
               password: ""
            },
            registerForm: {
               email: "",
               password: ""
            }
         })
         const login = (data) => { store._actions.login[0](data) }
         const register = (data) => { store._actions.register[0](data) }
         const submit = () => {
            if(state.switchLogin === true) {
               login(state.loginForm)
            }
            else {
               register(state.registerForm)
            }
         }
         const switchAuth = () => {
            state.switchLogin = !state.switchLogin
         }
         return {
            state,
            submit,
            switchAuth,
         }
      }
   }
</script>

<style lang="scss">
   .authForm {
      @include custom-border(transparent, none, none, grey);
      @include flex-centerize(column, center, space-between);
      height: 80%;
      width: 30%;
   }
   .authBtnArea {
      @include flex-centerize(column, center, center);
      height: 25%;
      width: 100%;
   }
   .authBottomText {
      font-size: 0.8vw;
      height: 50%;
      margin: 2.5% 0 5% 0;
      text-align: center;
      width: 100%;
   }
   .authBottomTextBtn {
      font-weight: bold;
      text-decoration: underline;
   }
   .authBottomTextBtn:hover {
      cursor: pointer;
      opacity: 0.5;
   }
   .authInputArea {
      @include flex-centerize(column, center, center);
      width: 100%;
   }
   .logoImage {
      filter: contrast(100%) grayscale(100%);
      margin: 10% 10% 0 10%;
      width: 80%;
   }
</style>