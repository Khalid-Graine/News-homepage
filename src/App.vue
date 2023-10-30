<template>
  <div class="wrapper p-3">
    <!-- Header -->
    <header class="flex justify-between items-center bg-white  shadow-md">
      <!-- Left Layer (Navigation) -->
      <div
      @click="triggerMenu"
        :class="showMenu ? 'left-0' : '-left-full'"
        class="fixed top-0 h-screen bg-black opacity-30 w-4/12 transition-all ease-in-out delay-300 duration-500 p-4"
      ></div>

      <!-- Logo -->
      <div class="text-2xl font-bold">
        <img src="./assets/images/logo.svg" class="w-12" alt="">
      </div>

      <!-- Main Navigation (Desktop) -->
      <nav class="hidden md:flex space-x-2">
        <links  />
      </nav>

      <!-- Navigation Toggle (Mobile) -->
      <div @click="triggerMenu" class="md:hidden cursor-pointer text-3xl ">☰</div>

      <!-- Right Layer (Mobile Navigation) -->
      <nav
        :class="showMenu ? 'right-0' : '-right-full'"
        class="fixed top-0 h-screen bg-white w-8/12 transition-all ease-in-out delay-300 duration-500 p-4"
      >
        <div @click="triggerMenu" class="font-bold text-right cursor-pointer text-3xl  ">✕</div>
        <ul class="flex flex-col space-y-2">
          <links  />
        </ul>
      </nav>
      
    </header>

  </div>
</template>

<script setup>
import links from "./components/links.vue";
import { ref } from "vue";

const showMenu = ref(true);

function triggerMenu() {
  showMenu.value = !showMenu.value;
}
</script>

