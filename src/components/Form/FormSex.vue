<script setup lang="ts">
    import { reactive } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
    import { whenever  } from '@vueuse/core'

    const form = reactive({ inputValue: 'w'})
    const rules: Rules = {
        inputValue: [
            {
                type: 'enum',
                enum: ["m", "w"],
                required: true,
            },
        ],
    }

    const { pass } = useAsyncValidator(form, rules)

    const emit = defineEmits(["submit"]);

    whenever(pass, () => emit('submit', form.inputValue))
</script>

<template>
  <div class="TEXTFIELD--RADIO">
    <label>
      <input
        v-model="form.inputValue"
        type="radio"
        name="radio"
        value="w"
      >
      <span>Feminino</span>
    </label>
    <label>
      <input
        v-model="form.inputValue"
        type="radio"
        name="radio"
        value="m"
      >
      <span>Masculino</span>
    </label>
  </div>
</template>
