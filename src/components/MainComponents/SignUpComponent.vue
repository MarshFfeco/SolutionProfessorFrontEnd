<script setup lang="ts">
    import { computed, reactive } from "vue";

    /* COMPONENTS */
    import FormEmail from "../Form/FormEmail.vue";
    import FormText from "../Form/FormText.vue";
    import FormPasswordRepeat from "../Form/FormPasswordRepeat.vue";
    import FormSex from "../Form/FormSex.vue";

    import axios from "axios"

    const ListInputs = [
      { "placehold": "Nome", "submit": SendFirstName },
      { "placehold": "sobrenome", "submit": SendLastName }
    ]

    const form = reactive({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "sex": ""
    })

    const IsDisable = computed(() => form.email.length === 0 || form.firstName.length === 0 || form.lastName.length === 0 || form.password.length === 0)

    function SendFirstName(value: string) {
        form.firstName = value
    }

    function SendLastName(value: string) {
        form.lastName = value
    }

    function SendEmail(value: string) {
        form.email = value
    }

    function SendPassword(value: string) {
        form.password = value
    }

    function SendSex(value: string) {
        form.sex = value
    }

    function SignUp() {
        const instance = axios.create({
            // BaseURL: import.meta.env.API_PROFESSOR_SOLUTION,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            method: "post"
        })

        instance.post('https://localhost:3000/api/v1/professor/signup', {
            "first_name": form.firstName,
            "last_name": form.lastName,
            "email": form.email,
            "password": form.password,
            "sex": form.sex
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
</script>

<template>
  <div id="SignUpComponent">
    <div class="FORM">
      <form @submit.prevent="SignUp">
        <!-- TEXTFIELD FIRST NAME AND LAST NAME -->
        <div class="TEXTFIELD--COMP">
          <div
            v-for="input in ListInputs"
            :key="input.placehold"
          >
            <FormText

              :placehold="input.placehold"
              @submit="input.submit"
            />
          </div>
        </div>

        <!-- TEXTFIELD EMAIL -->
        <FormEmail @submit="SendEmail" />

        <!-- TEXTFIELD PASSWORD + REPEAT-PASSWORD -->
        <FormPasswordRepeat @submit="SendPassword" />

        <!-- TEXTFIELD SEX -->
        <FormSex @submit="SendSex" />

        <!-- OBS -->
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
          :disabled="IsDisable"
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
    @import "../../style.scss";

      #SignUpComponent {
          width: 90vmin;
      }
  </style>
