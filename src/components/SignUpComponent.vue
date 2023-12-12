<script setup lang="ts">
    import FormEmail from "./Form/FormEmail.vue";
    import FormText from "./Form/FormText.vue";
    import FormPassword from "./Form/FormPassword.vue";

    const ListInputs = {
       "Text": ["Nome", "sobrenome"],
       "Password": ["Senha", "Repetir Senha"]
    }

    function SendForm(email: string) {
        console.log(email)
    }
</script>

<template>
  <div id="SignUpComponent">
    <div class="FORM">
      <form action="">
        <!-- TEXTFIELD FIRST NAME AND LAST NAME -->
        <div class="TEXTFIELD--COMP">
          <FormText
            v-for="input in ListInputs.Text"
            :key="input"
            :placehold="input"
            @submit="SendForm"
          />
        </div>

        <!-- TEXTFIELD EMAIL -->
        <FormEmail @submit="SendForm" />

        <!-- TEXTFIELD PASSWORD + REPEAT-PASSWORD -->
        <div class="TEXTFIELD--COMP">
          <FormPassword
            v-for="input in ListInputs.Password"
            :key="input"
            placehold="Senha"
          />
        </div>

        <!-- TEXTFIELD SEX -->
        <div class="TEXTFIELD--RADIO">
          <label>
            <input
              type="radio"
              name="radio"
              checked
            >
            <span>Feminino</span>
          </label>
          <label>
            <input
              type="radio"
              name="radio"
            >
            <span>Masculino</span>
          </label>
        </div>

        <div class="OBS">
          <small>
            Ao clicar em Cadastre-se, você concorda com nossos <a
              href="#"
              target="_blank"
            ><em>Termos</em></a>, <a
              href="#"
              target="_blank"
            ><em>Política de Privacidade</em></a> e <a
              href="#"
              target="_blank"
            ><em>Política de Cookies</em></a>.
          </small>
        </div>
        <!-- BUTTON -->
        <button
          id="SignUpComponent--Button"
          type="submit"
          class="BUTTON--OUTLINE"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

  <style lang="scss" scoped>
    @import "../style.scss";

      #SignUpComponent {
          width: 90vmin;
      }
  </style>
