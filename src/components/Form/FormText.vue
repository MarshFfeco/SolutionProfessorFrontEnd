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
</script>

<template>
  <div
    :class="['TEXTFIELD', InputClass]"
  >
    <v-icon
      class="ICON"
      name="md-drivefilerenameoutline-outlined"
      fill="#ff7f50"
      scale="1.5"
    />
    <input
      v-model="InputValue"
      type="text"
      :placeholder="props.placehold"
      @change="verify()"
    >
  </div>
</template>

<style></style>
