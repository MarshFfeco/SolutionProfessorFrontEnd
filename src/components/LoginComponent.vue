<script setup lang="ts">
    import FormEmail from "./Form/FormEmail.vue";
    import FormPassword from "./Form/FormPassword.vue";

    function SendForm(email: string) {
        console.log(email)
    }

</script>

<template>
  <div id="LoginComponentStyle">
    <div
      class="FORM"
    >
      <form action="">
        <!-- TEXTFIELD EMAIL -->
        <FormEmail @submit="SendForm" />

        <!-- TEXTFIELD PASSWORD -->
        <FormPassword placehold="Senha" />

        <!-- BUTTON FORGOT PASSWORD -->
        <div class="TEXTFIELD--EXTRA">
          <button type="button">
            <small>Esqueceu a senha?</small>
          </button>
        </div>

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
