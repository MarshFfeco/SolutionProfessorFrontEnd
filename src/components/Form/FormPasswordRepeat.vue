<script setup lang="ts">
    import { computed, reactive, ref } from 'vue';

    import FormPassword from './FormPassword.vue';

    const emit = defineEmits(["submit"]);

    const inputValues = reactive({
        password: "",
        repeatPassword: ""
    })

    const ListPassword = [
        {
            "placehold": "Senha",
            "submit": sendPassword
        },
        {
            "placehold": "Repetir Senha",
            "submit": sendRepeatPassword
        },
    ]

    const error = ref("");
    const Error = computed(({
        get() {
            return error.value
        },
        set(val: string) {
            error.value = val
        }
    }))

    function sendPassword(value: string) {
        inputValues.password = value
    }

    function sendRepeatPassword(value: string) {
        inputValues.repeatPassword = value

        isEqualPassword()
    }

    function isEqualPassword() {
        if(inputValues.password === inputValues.repeatPassword) {
            Error.value = ""
            emit('submit', inputValues.password)
        } else {
            Error.value = "As senhas precisam ser iguais"
        }
    }
</script>

<template>
  <div class="TEXTFIELD--COMP">
    <div
      v-for="field in ListPassword"
      :key="field.placehold"
    >
      <FormPassword
        :classes="!Error ? 'TEXTFIELD--ACCEPT' : 'TEXTFIELD--REJECT'"
        :placehold="field.placehold"
        :errors="Error"
        @submit="field.submit"
      />
    </div>
  </div>
</template>

<style>
</style>
