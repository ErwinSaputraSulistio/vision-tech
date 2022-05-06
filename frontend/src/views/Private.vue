<template>
   <div class="private">
      <span>This is the PRIVATE route.</span>
      <span>If you can see this text, then you're already login successfully.</span>
      <span>Your data after login, including JWT token, are saved in Vuex store.</span>
      <Button :func="logout" height="3vw" margin="5% 0 2.5% 0" name="LOGOUT" type="primary" width="80%"/>
   </div>
</template>

<script>
   import { useStore } from "vuex"
   import Button from "../components/Button.vue"

   export default {
      components: {
         Button
      },
      // methods: {
      //     ...mapActions({
      //          logout: "logout"
      //    }),
      //    signOut() {
      //       this.logout()
      //    }
      // }
      setup() {
         const store = useStore()
         const logout = () => { store._actions.logout[0]() }
         return {
            logout,
         }
      }
   }
</script>

<style lang="scss">
   .private {
      @include flex-centerize(column, center, center);
   }
</style>