<script setup lang="ts">
    import { reactive, ref, computed, Ref } from 'vue';
    import type { Rules } from 'async-validator'
    import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

    import FormMessage from "./FormMessage.vue"
    import FormExtra from "./FormExtra.vue"

    const props = defineProps({
        placehold: { type: String, required: true },
        isExtra: {type: Boolean}
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
    class="TEXTFIELD"
    :class="{'TEXTFIELD--REJECT': errorFields?.inputValue?.length, 'TEXTFIELD--ACCEPT': !errorFields?.inputValue?.length}"
  >
    <v-icon
      class="ICON"
      name="md-security-sharp"
      fill="#ff7f50"
      scale="1.5"
    />
    <input
      v-model="form.inputValue"
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

  <div id="FormPassword">
    <!-- MESSAGE -->
    <FormMessage v-if="errorFields?.inputValue?.length">
      <template #message>
        <small>{{ errorFields.inputValue[0].message }}</small>
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

<style>
    #FormPassword {
        display: flex;
        justify-content: space-between;
    }
</style>
