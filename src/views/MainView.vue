<script setup lang="ts">
    import { ref, computed } from 'vue';
    import LoginComponent from '../components/LoginComponent.vue';
    import SignUpComponet from "../components/SignUpComponent.vue"

    const isButtonActive = ref(true)
    const IsButtonActive = computed({
        get() {
            return isButtonActive.value
        },
        set(newValue) {
            isButtonActive.value = newValue
        }
    })

    function ChangeClicked(value: boolean) {
        IsButtonActive.value = value
    }

</script>

<template>
  <div id="MainView">
    <div id="MainView--Title">
      <button
        id="MainView--Title--Button"
        :class="[IsButtonActive ? 'BUTTON-ACTIVE' : '']"
        @click="ChangeClicked(true)"
      >
        <h2>
          Login
        </h2>
      </button>

      <button
        id="MainView--Title--Button"
        :class="[!IsButtonActive ? 'BUTTON-ACTIVE' : '']"
        @click="ChangeClicked(false)"
      >
        <h2>
          SignUp
        </h2>
      </button>
    </div>

    <LoginComponent v-if="isButtonActive" />
    <SignUpComponet v-if="!isButtonActive" />
  </div>
</template>

<style lang="scss" scoped>
    #MainView {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &--Title {
            width: 90vmin;

            font-size: 36px;

            margin-bottom: 32px;

            &--Button {
                margin-right: 64px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>

