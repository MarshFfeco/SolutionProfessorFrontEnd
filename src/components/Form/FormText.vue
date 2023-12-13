<script setup lang="ts">
    import { reactive, Ref } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

    import FormMessage from './FormMessage.vue';

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

    const emit = defineEmits({
        submit(_, pass: Ref<Boolean>) {
            if(!pass.value) {
                return false
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
      :placeholder="props.placehold"
      @change="verify()"
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
