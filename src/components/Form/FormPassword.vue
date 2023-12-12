<script setup lang="ts">
    import { ref, computed } from 'vue';

    const props = defineProps({
        placehold: { type: String, required: true },
    })

    const inputValue = ref("")
    const InputValue = computed({
        get() {
            return inputValue.value
        },
        set(newValue) {
            inputValue.value = newValue
        }
    })

    const inputClass = ref("")
    const InputClass = computed({
        get() {
            return inputClass.value
        },
        set(newValue) {
            inputClass.value = newValue
        }
    })

    const emit = defineEmits({
        submit(input) {
            if(input.length <= 0) {
                throw new Error()
            }

            return true;
        }
    })

    function verify() {
        try {
            emit('submit', InputValue.value)
            InputClass.value = "TEXTFIELD--ACCEPT"
        } catch {
            InputClass.value = "TEXTFIELD--REJECT"
        }
    }

    const isVisible = ref(false);
    const IsVisible = computed({
        get() {
            return isVisible.value
        },
        set(newValue) {
            isVisible.value = newValue
        }
    });


    const NameIconPassword = computed(() => IsVisible.value ? "bi-eye" : "bi-eye-slash")

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
  <div
    :class="['TEXTFIELD', InputClass]"
  >
    <v-icon
      class="ICON"
      name="md-security-sharp"
      fill="#ff7f50"
      scale="1.5"
    />
    <input
      v-model="InputValue"
      type="password"
      :placeholder="props.placehold"
      @change="verify()"
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
</template>

<style></style>
