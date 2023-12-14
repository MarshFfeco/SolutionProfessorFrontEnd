<script setup lang="ts">
    import { reactive, ref } from "vue";
    import FormEmail from "./Form/FormEmail.vue";
    import FormPassword from "./Form/FormPassword.vue";

    import { until } from '@vueuse/core'

    const form = reactive({
        "email": "",
        "password": "",
    })

    const isDisable = ref(true)

    until(form).toMatch(v => v.email.length > 0 && v.password.length > 0).then(() => { isDisable.value = false })

    function SendFormEmail(value: string) {
        form.email = value
    }

    function SendFormPassword(value: string) {
        form.password = value
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
          :disabled="isDisable"
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
