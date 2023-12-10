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
    .slide-move-enter-active,
    .slide-move-leave-active {
    transition: all 0.25s ease-out;
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
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        overflow-x: hidden;

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

