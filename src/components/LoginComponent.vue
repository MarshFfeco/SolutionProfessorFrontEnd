<template>
  <div id="LoginComponentStyle">
    <div id="LoginComponentStyle--Form">
      <form action="">
        <!-- TEXTFIELD EMAIL -->
        <div class="TEXTFIELD">
          <input
            type="text"
            placeholder="Email"
          >
        </div>

        <!-- TEXTFIELD PASSWORD -->
        <div class="TEXTFIELD">
          <input
            type="text"
            placeholder="Senha"
          >
          <!-- EXTRA FORGOT PASSWORD -->
          <div class="TEXTFIELD--extra">
            <button type="button">
              Esqueceu sua senha?
            </button>
          </div>
        </div>

        <!-- BUTTON -->
        <button
          id="LoginComponentStyle--Button"
          type="submit"
          class="BUTTON"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    #LoginComponentStyle {
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
            background-color: coral;
        }
    }
</style>
