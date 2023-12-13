<script setup lang="ts">
    import { reactive, Ref } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

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

    const emit = defineEmits({
        submit(_: string, pass: Ref<boolean>): Boolean {
            if(!pass.value) {
                return false;
            }

            return true;
        }
    })

    function verify() {
        emit('submit', form.inputValue, pass)
    }
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
      placeholder="Email"
      @change="verify()"
    >
  </div>
  <div
    v-if="errorFields?.inputValue?.length"
    class="TEXTFIELD--MESSAGE"
  >
    <small>{{ errorFields.inputValue[0].message }}</small>
  </div>
</template>
