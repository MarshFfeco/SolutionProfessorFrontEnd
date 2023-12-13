<template>
  <div
    class="TEXTFIELD--MESSAGE"
  >
    <slot name="message" />
  </div>
</template>

<style lang="scss">
    @import "../../style.scss";
    .TEXTFIELD--MESSAGE {
        @extend .TEXTFIELD--EXTRA;

        text-decoration: dotted;
        text-align: left;
    }
</style>
