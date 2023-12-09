<template>
  <div id="SignUpComponent">
    <div id="SignUpComponent--Form">
      <form action="">
        <!-- TEXTFIELD FIRST NAME AND LAST NAME -->
        <div class="TEXTFIELD-COMP">
          <input
            type="text"
            placeholder="Nome"
          >
          <input
            type="text"
            placeholder="Sobrenome"
          >
        </div>

        <!-- TEXTFIELD EMAIL -->
        <div class="TEXTFIELD">
          <input
            type="text"
            placeholder="Email"
          >
        </div>

        <!-- TEXTFIELD PASSWORD -->
        <div class="TEXTFIELD-COMP">
          <input
            type="password"
            placeholder="Senha"
          >
          <input
            type="password"
            placeholder="Repetir-Senha"
          >
        </div>

        <div class="TEXTFIELD--RADIO">
          <p>Selecione seu sexo:</p>

          <div class="TEXTFIELD--RADIO--CHECKES">
            <label>
              <input
                checked
                type="radio"
                name="sex"
                value="m"
              >
              Masculino
            </label>

            <label>
              <input
                type="radio"
                name="sex"
                value="w"
              >
              Feminino
            </label>
          </div>
        </div>

        <!-- BUTTON -->
        <button
          id="SignUpComponent--Button"
          type="submit"
          class="BUTTON"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

  <style lang="scss" scoped>
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
          &--Button {
            border: 2px solid coral;

            color: coral;
          }
      }
  </style>
