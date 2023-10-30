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
      <nav class="hidden md:flex space-x-5 pr-4">
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
     
    
    <!-- page -->
    <div class="grid md:grid-cols-3 gap-3  bg-black">
      <div class="bg-yellow-200  md:col-span-2 grid grid-cols-2 gap-4 pb-4">
        <div class="col-span-2">
          <img class="hidden md:flex" src="./assets/images/image-web-3-desktop.jpg" alt="">
          <img class="md:hidden" src="./assets/images/image-web-3-mobile.jpg" alt="">
        </div>
        <div class="col-span-2 md:col-span-1 w-10/12 md:w-full">
          <h1 class="text-5xl font-bold">The Bright Future of Web 3.0 ?</h1>
        </div>
        <div class="col-span-2 md:col-span-1">
          <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button class="mt-4 bg-xred text-white uppercase font-semibold text-lg py-1 px-5  tracking-widest">read more</button>
        </div>
      </div>


      <div class="bg-green-200 md:col-span-1">
        <h2>New</h2>
        <ul>
          <li>
            <h3>Hydrogen VS Electric Cars</h3>
          <small>Will hydrogen-fueled cars ever catch up to EVs?</small>
          </li>
          <li>
            <h3>The Downsides of AI Artistry</h3>
          <small>What are the possible adverse effects of on-demand AI image generation?</small>
          </li>
          <li>
            <h3>Is VC Funding Drying Up?</h3>
          <small>Private funding by VC firms is down 50% YOY. We take a look at what that means</small>
          </li>
        </ul>
       
     
      </div>
      <div class="bg-yellow-200 md:col-span-3">
        <div>
          <img src="./assets/images/image-retro-pcs.jpg" alt="">
          <b>01</b>
            <h4>Reviving Retro PCs</h4>
            <small>What happens when old PCs are given modern updrades?</small>
          </div>

          <div>
          <img src="./assets/images/image-top-laptops.jpg" alt="">
          <b>02</b>
          <h4>Top 10 Laptops of 2022</h4>
          <small>Our best picks for various needs and budgets.</small>
        </div>

        <div>
          <img src="./assets/images/image-gaming-growth.jpg" alt="">
          <div>
            <b>03</b>
          <h4>The Growth of Gaming</h4>
          <small>How the pandemic has sparked fresh opportuninties</small>
          </div>
        </div>

        </div>
    </div>
  </div>
</template>

<script setup>
import links from "./components/links.vue";
import { ref } from "vue";

const showMenu = ref(false);

function triggerMenu() {
  showMenu.value = !showMenu.value;
}
</script>

