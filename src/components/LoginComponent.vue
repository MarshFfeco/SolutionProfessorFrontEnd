<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue';

    /* FORM */
    const form = ref({
        email: "",
        password: ""
    })
    const Email = computed({
        get() {
            return form.value.email
        },
        set(newValue) {
            form.value.email = newValue
        }
    })
    const Password = computed({
        get() {
            return form.value.password
        },
        set(newValue) {
            form.value.password = newValue
        }
    })

    /* FORM METHOD EMAIL */
    function corret() {
        if(Email.value.length > 0) {
            EmailClass.value = 'TEXTFIELD--ACCEPT'
        } else {
            EmailClass.value = 'TEXTFIELD--REJECT'
        }
    }

    /* FORM | CLASS INPUTS */
    const formClass = ref ({
        email: "TEXTFIELD",
        password: "TEXTFIELD"
    })
    const EmailClass = computed({
        get() {
            return formClass.value.email
        },
        set(newValue) {
            formClass.value.email = newValue
        }
    })
    const PasswordClass = computed({
        get() {
            return formClass.value.password
        },
        set(newValue) {
            formClass.value.email = newValue
        }
    })

    /* FORM | CHANGE VISIBILITY PASSWORD */
    const isVisible = shallowRef(false);
    const IsVisible = computed({
        get() {
            return isVisible.value
        },
        set(newValue) {
            isVisible.value = newValue
        }
    });
    /* FORM | CHANGE VISIBILITY PASSWORD | CHANGE ICON */
    const NameIconPassword = computed(() => IsVisible.value ? "bi-eye" : "bi-eye-slash")
    /* FORM | CHANGE VISIBILITY PASSWORD | METHOD */
    function HidePassword(event: HTMLElement) {
        const input = event.parentElement?.getElementsByTagName("input")[0] as HTMLInputElement;

        if(IsVisible.value) {
            IsVisible.value = false
            input.type = "password"
        } else {
            IsVisible.value = true;
            input.type = "text"
        }

    }
</script>

<template>
  <div id="LoginComponentStyle">
    <div id="LoginComponentStyle--Form">
      <form action="">
        <!-- TEXTFIELD EMAIL -->
        <div
          :class="['TEXTFIELD', EmailClass]"
        >
          <v-icon
            class="ICON"
            name="md-email-outlined"
            fill="#ff7f50"
            scale="1.5"
          />
          <input
            v-model="Email"
            type="text"
            placeholder="Email"
            @keydown="corret"
          >
        </div>

        <!-- TEXTFIELD PASSWORD -->
        <div
          id="LoginComponentStyle--Form--Password"
          :class="['TEXTFIELD', PasswordClass]"
        >
          <v-icon
            class="ICON"
            name="md-security-sharp"
            fill="#ff7f50"
            scale="1.5"
          />

          <input
            v-model="Password"
            type="text"
            placeholder="Senha"
          >
          <button
            type="button"
            @click="HidePassword($event.currentTarget as HTMLElement)"
          >
            <v-icon
              class="ICON"
              :name="NameIconPassword"
              fill="#ff7f50"
              scale="1.5"
            />
          </button>
        </div>
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

        &--Form {
            color: black;

            border-radius: 20px;

            padding-inline: 20px;
            padding-block-start: 40px;
            padding-block-end: 30px;

            background-color: #F8FAFC;

            &--Password{
                margin-bottom: 8px;
            }
        }
    }
</style>
