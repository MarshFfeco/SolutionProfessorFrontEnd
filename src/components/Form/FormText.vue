<script setup lang="ts">
    import { reactive } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

    import FormMessage from './FormMessage.vue';
import { whenever } from '@vueuse/core';

    const props = defineProps({
        placehold: { type: String, required: true },
    })

    const form = reactive({ inputValue: ''})
    const rules: Rules = {
        inputValue: [
        {
                type: 'string',
                required: true,
                message: `${props.placehold} é necessário`,
            },
            {
                type: 'string',
                min: 3,
                max: 10,
                message: `${props.placehold} deve ter entre 3 e 10 caracteres`
            }
        ],
    }

    const { pass, errorFields } = useAsyncValidator(form, rules)

    const emit = defineEmits(["submit"]);

    whenever(pass, () => emit('submit', form.inputValue))
</script>

<template>
  <div
    class="TEXTFIELD"
    :class="{'TEXTFIELD--REJECT': errorFields?.inputValue?.length, 'TEXTFIELD--ACCEPT': !errorFields?.inputValue?.length}"
  >
    <v-icon
      class="ICON"
      name="md-drivefilerenameoutline-outlined"
      fill="#ff7f50"
      scale="1.5"
    />
    <input
      v-model="form.inputValue"
      type="text"
      :placeholder="props.placehold"
    >
  </div>

  <!-- MESSAGE -->
  <FormMessage
    v-if="errorFields?.inputValue?.length"
    class="TEXTFIELD--MESSAGE"
  >
    <template #message>
      <small>{{ errorFields.inputValue[0].message }}</small>
    </template>
  </FormMessage>
</template>

<style></style>
