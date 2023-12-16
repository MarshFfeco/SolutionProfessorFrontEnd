<script setup lang="ts">
    import { reactive, ref, computed } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
    import { whenever } from '@vueuse/core';

    import FormMessage from "./FormMessage.vue"
    import FormExtra from "./FormExtra.vue"

    const emit = defineEmits(["submit"]);

    const props = defineProps({
        placehold: { type: String, required: true },
        isExtra: { type: Boolean },
        classes: {type: String, default: ""},
        errors: {type: String, default: ""}
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
                min: 8,
                max: 20,
                message: `${props.placehold} deve ter entre 8 e 20 caracteres`
            }
        ],
    }

    const { pass, errorFields } = useAsyncValidator(form, rules);

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

    whenever(pass, () => emit('submit', form.inputValue))

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
    class="TEXTFIELD"
    :class="[pass ? 'TEXTFIELD--ACCEPT' : 'TEXTFIELD--REJECT', props.classes]"
  >
    <v-icon
      class="ICON"
      name="md-security-sharp"
      fill="#3197EE"
      scale="1.5"
    />
    <input
      v-model="form.inputValue"
      type="password"
      :placeholder="props.placehold"
    >
    <button
      type="button"
      @click="HidePassword($event.currentTarget as HTMLElement)"
    >
      <v-icon
        class="ICON"
        :name="NameIconPassword"
        fill="#3197EE"
        scale="1.5"
      />
    </button>
  </div>

  <div id="FormPassword">
    <!-- MESSAGE -->
    <FormMessage v-if="errorFields?.inputValue?.length">
      <template #message>
        <small>{{ errorFields.inputValue[0].message }}</small>
      </template>
    </FormMessage>
    <FormMessage v-else-if="props.errors.length > 0">
      <template #message>
        <small>{{ props.errors }}</small>
      </template>
    </FormMessage>
    <!-- MESSAGE EXTRA -->
    <FormExtra v-if="props.isExtra">
      <template #extra>
        <small>Esqueceu a senha</small>
      </template>
    </FormExtra>
  </div>
</template>

<style scoped>
    #FormPassword {
        display: flex;
        justify-content: space-between;
    }
</style>
