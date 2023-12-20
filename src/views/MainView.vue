<script setup lang="ts">
    import { ref, computed } from 'vue';
    import LoginComponent from '../components/MainComponents/LoginComponent.vue';
    import SignUpComponet from "../components/MainComponents/SignUpComponent.vue"

    const isButtonActive = ref(true)
    const IsButtonActive = computed({
        get() {
            return isButtonActive.value
        },
        set(newValue) {
            isButtonActive.value = newValue
        }
    })

    function ChangeClicked() {
        IsButtonActive.value = !IsButtonActive.value
    }

</script>

<template>
  <div id="MainView">
    <div id="MainView--Title">
      <button
        id="MainView--Title--Button"
        :class="[IsButtonActive ? 'BUTTON-ACTIVE' : '']"
        @click="ChangeClicked"
      >
        <h2 class="HEADLINE">
          Entrar
        </h2>
      </button>

      <button
        id="MainView--Title--Button"
        :class="[!IsButtonActive ? 'BUTTON-ACTIVE' : '']"
        @click="ChangeClicked"
      >
        <h2 class="HEADLINE">
          Cadastrar
        </h2>
      </button>
    </div>

    <Transition
      name="slide-move"
      mode="out-in"
    >
      <LoginComponent v-if="isButtonActive" />
      <SignUpComponet v-else-if="!isButtonActive" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
    @import "../style.scss";

    .slide-move-enter-active,
    .slide-move-leave-active {
    transition: all 0.2s ease-out;
    }
    .slide-move-enter-from {
    opacity: 0;
    transform: translateX(300px);
    }
    .slide-move-leave-to {
    opacity: 0;
    transform: translateX(-300px);
    }

    #MainView {
        min-height: 80vh;
        margin-block: 10vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow-x: hidden;

        &--Title {
            width: 90vmin;

            margin-bottom: 32px;

            &--Button {
                margin-right: 64px;

                &:hover {
                    color: $BASE--COLOR;
                }
            }
        }
    }
</style>

