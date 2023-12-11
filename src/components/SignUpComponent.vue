<template>
  <div id="SignUpComponent">
    <div id="SignUpComponent--Form">
      <form action="">
        <!-- TEXTFIELD FIRST NAME AND LAST NAME -->
        <div class="TEXTFIELD--COMP">
          <!-- TEXTFIELD FIRST NAME -->
          <div class="TEXTFIELD">
            <v-icon
              class="ICON"
              name="md-drivefilerenameoutline-outlined"
              fill="#ff7f50"
              scale="1.5"
            />
            <input
              type="text"
              placeholder="Nome"
            >
          </div>

          <!-- TEXTFIELD LAST NAME -->
          <div class="TEXTFIELD">
            <v-icon
              class="ICON"
              name="md-drivefilerenameoutline-outlined"
              fill="#ff7f50"
              scale="1.5"
            />
            <input
              type="text"
              placeholder="Sobrenome"
            >
          </div>
        </div>

        <!-- TEXTFIELD EMAIL -->
        <div class="TEXTFIELD">
          <v-icon
            class="ICON"
            name="md-email-outlined"
            fill="#ff7f50"
            scale="1.5"
          />
          <input
            type="text"
            placeholder="Email"
          >
        </div>

        <!-- TEXTFIELD PASSWORD + REPEAT-PASSWORD -->
        <div class="TEXTFIELD--COMP">
          <!-- TEXTFIELD PASSWORD -->
          <div class="TEXTFIELD">
            <v-icon
              class="ICON"
              name="md-password"
              fill="#ff7f50"
              scale="1.5"
            />
            <input
              type="text"
              placeholder="Senha"
            >
            <button type="button">
              <v-icon
                class="ICON"
                name="bi-eye"
                fill="#ff7f50"
                scale="1.5"
              />
            </button>
          </div>

          <!-- TEXTFIELD REPEAT PASSWORD -->
          <div class="TEXTFIELD">
            <v-icon
              class="ICON"
              name="md-password"
              fill="#ff7f50"
              scale="1.5"
            />
            <input
              type="text"
              placeholder="Repetir senha"
            >
            <button type="button">
              <v-icon
                class="ICON"
                name="bi-eye"
                fill="#ff7f50"
                scale="1.5"
              />
            </button>
          </div>
        </div>

        <!-- TEXTFIELD SEX -->
        <div class="TEXTFIELD--RADIO">
          <label>
            <input
              type="radio"
              name="radio"
              checked
            >
            <span>Feminino</span>
          </label>
          <label>
            <input
              type="radio"
              name="radio"
            >
            <span>Masculino</span>
          </label>
        </div>

        <div class="OBS">
          <small>
            Ao clicar em Cadastre-se, você concorda com nossos <a
              href="#"
              target="_blank"
            ><em>Termos</em></a>, <a
              href="#"
              target="_blank"
            ><em>Política de Privacidade</em></a> e <a
              href="#"
              target="_blank"
            ><em>Política de Cookies</em></a>.
          </small>
        </div>
        <!-- BUTTON -->
        <button
          id="SignUpComponent--Button"
          type="submit"
          class="BUTTON--OUTLINE"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

  <style lang="scss" scoped>
    @import "../style.scss";

      #SignUpComponent {
          width: 90vmin;
          &--Form {
              color: black;

              border-radius: 20px;

              padding-inline: 20px;
              padding-block-start: 40px;
              padding-block-end: 30px;

              background-color: #F8FAFC;
          }
      }
  </style>
