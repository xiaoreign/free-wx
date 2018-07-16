<template>
  <div id="app">
    <p class="card">
      {{text}}asdasd
    </p>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "card",
  props: ["text"]
};
</script>

<style>
.card {
  padding: 10px;
}
</style>
