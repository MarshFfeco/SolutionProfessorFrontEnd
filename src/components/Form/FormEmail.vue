<script setup lang="ts">
    import { reactive } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
    import { whenever  } from '@vueuse/core'

    const form = reactive({ inputValue: ''})
    const rules: Rules = {
        inputValue: [
            {
                type: 'email',
                required: true,
                message: "Email é necessário"
            },
        ],
    }

    const { pass, errorFields } = useAsyncValidator(form, rules)

    const emit = defineEmits(["submit"]);

    whenever(pass, () => emit('submit', form.inputValue))
</script>

<template>
  <!-- TEXTFIELD INPUT -->
  <div
    class="TEXTFIELD"
    :class="{'TEXTFIELD--REJECT': errorFields?.inputValue?.length, 'TEXTFIELD--ACCEPT': !errorFields?.inputValue?.length}"
  >
    <v-icon
      class="ICON"
      name="md-drivefilerenameoutline-outlined"
      fill="#3197EE"
      scale="1.5"
    />
    <input
      v-model="form.inputValue"
      autocomplete=""
      type="text"
      placeholder="Email"
    >
  </div>

  <!-- MESSAGE -->
  <div
    v-if="errorFields?.inputValue?.length"
    class="TEXTFIELD--MESSAGE"
  >
    <small>{{ errorFields.inputValue[0].message }}</small>
  </div>
</template>
