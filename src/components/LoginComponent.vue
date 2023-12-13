<script setup lang="ts">
    import { Ref, reactive } from "vue";
    import FormEmail from "./Form/FormEmail.vue";
    import FormPassword from "./Form/FormPassword.vue";

    import { validation } from "../validation/Validation";

    const form = reactive({
        "email": "",
        "password": "",
    })

    function SendFormEmail(value: string, pass: Ref<boolean>) {
        validation(pass.value, () => {
            form.email = value
        })
    }

    function SendFormPassword(value: string, pass: Ref<boolean>) {
        validation(pass.value, () => {
            form.password = value
        })
    }

</script>

<template>
  <div id="LoginComponentStyle">
    <div
      class="FORM"
    >
      <form action="">
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
../validation/Validation
