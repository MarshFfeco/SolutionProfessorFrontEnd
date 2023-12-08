<script setup lang="ts">

</script>

<template>
  <div id="LoginComponentStyle">
    <div id="LoginComponentStyle--Title">
      <h2>
        Login
      </h2>
    </div>

    <div id="LoginComponentStyle--Form">
      <form action="">
        <!-- TEXTFIELD EMAIL -->
        <div class="textfield">
          <input
            type="text"
            placeholder="Email"
          >
        </div>

        <!-- TEXTFIELD PASSWORD -->
        <div class="textfield">
          <input
            type="text"
            placeholder="Senha"
          >
          <!-- EXTRA FORGOT PASSWORD -->
          <div class="textfield--extra">
            <button type="button">
              Esqueceu sua senha?
            </button>
          </div>
        </div>

        <!-- BUTTON -->
        <button
          id="LoginComponentStyle--Button"
          type="submit"
          class="button"
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

        &--Title {
            font-size: 36px;

            margin-bottom: 32px;
        }
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
