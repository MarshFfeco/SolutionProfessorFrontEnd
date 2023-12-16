<script setup lang="ts">
    import { reactive, computed } from "vue";
    import FormEmail from "./Form/FormEmail.vue";
    import FormPassword from "./Form/FormPassword.vue";

    const form = reactive({
        "email": "",
        "password": "",
    })

    const IsDisable = computed(() => form.email.length === 0 || form.password.length === 0)

    function SendFormEmail(value: string) {
        form.email = value
    }

    function SendFormPassword(value: string) {
        form.password = value
    }

    function login() {
        console.log(form)
    }

</script>

<template>
  <div id="LoginComponentStyle">
    <div
      class="FORM"
    >
      <form @submit.prevent="login">
        <!-- TEXTFIELD EMAIL -->
        <FormEmail @submit="SendFormEmail" />

        <!-- TEXTFIELD PASSWORD -->
        <FormPassword
          is-extra
          placehold="Senha"
          @submit="SendFormPassword"
        />

        <!-- BUTTON -->
        <button
          :disabled="IsDisable"
          type="submit"
          class="BUTTON--FULL"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import "../style.scss";

    #LoginComponentStyle {
        width: 90vmin;
    }
</style>
