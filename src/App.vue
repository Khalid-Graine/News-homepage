<template>
  <div class="wrapper relative p-4 my-4 lg:w-10/12 mx-auto">
    <!-- Header -->
    <header class="flex justify-between items-center">
      <!-- Left Layer (Navigation) -->
      <div
        @click="triggerMenu"
        :class="showMenu ? 'left-0' : '-left-full'"
        class="fixed top-0 h-screen bg-black opacity-30 w-4/12 transition-all ease-in-out delay-300 duration-500 p-4"
      ></div>

      <!-- Logo -->
      <div class="text-2xl font-bold">
        <img src="../public/images/logo.svg" class="w-12" alt="" />
      </div>

      <!-- Main Navigation (Desktop) -->
      <nav class="hidden lg:flex space-x-5 pr-4">
        <links />
      </nav>

      <!-- Navigation Toggle (Mobile) -->
      <div @click="triggerMenu" class="lg:hidden cursor-pointer text-3xl">
        ☰
      </div>

      <!-- Right Layer (Mobile Navigation) -->
      <nav
        :class="showMenu ? 'right-0' : '-right-full'"
        class="fixed top-0 h-screen bg-white w-8/12 transition-all ease-in-out delay-300 duration-500 p-4"
      >
        <div
          @click="triggerMenu"
          class="font-bold text-right cursor-pointer text-3xl mt-4"
        >
          ✕
        </div>
        <ul class="flex flex-col space-y-2">
          <links />
        </ul>
      </nav>
    </header>
    <!-- end header -->

    <!-- page -->
    <div class="grid grid-cols-4 gap-4 mt-5">
      <!-- top part -->
      <div class="col-span-full lg:col-span-3 grid grid-cols-4 gap-4">
        <div class="col-span-full">
          <img
            class="hidden md:flex"
            src="../public/images/image-web-3-desktop.jpg"
            alt=""
          />
          <img
            class="md:hidden"
            src="../public/images/image-web-3-mobile.jpg"
            alt=""
          />
        </div>

        <div class="col-span-full lg:col-span-2 lg:w-full">
          <h1
            class="text-5xl lg:text-4xl font-bold text-gradientColorStops-xgradient"
          >
            The Bright Future of Web 3.0 ?
          </h1>
        </div>

        <div class="col-span-full lg:col-span-2 p-2">
          <p class="text-xblue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <MyButton>read more</MyButton>
          
        </div>
      </div>

      <!-- middle part -->
      <div class="col-span-full lg:col-span-1 bg-xdarkblue flex flex-col p-3">
        <h2 class="mb-10 text-xorange font-bold text-3xl">New</h2>
        <div class="h-full flex flex-col gap-4 justify-between">
          <feature
            :title="'Hydrogen VS Electric Cars'"
            :description="'Will hydrogen-fueled cars ever catch up to EVs?'"
          />
          <feature
            :title="'The Downsides of AI Artistry'"
            :description="'What are the possible adverse effects of on-demand AI image generation?'"
            :class="'border border-x-transparent py-4'"
          />
          <feature
            :title="'Is VC Funding Drying Up?'"
            :description="'Private funding by VC firms is down 50% YOY. We take a look at what that means'"
          />
        </div>
      </div>

      <!-- bottom part -->
      <div class="col-span-full grid grid-cols-3 gap-4">
        <item
          :number="'01'"
          :title="'Reviving Retro PCs'"
          :description="'What happens when old PCs are given modern updrades?'"
          :pictureName="'image-retro-pcs.jpg'"
        />

        <item
          :number="'02'"
          :title="'Top 10 Laptops of 2022'"
          :description="'Our best picks for various needs and budgets.'"
          :pictureName="'image-top-laptops.jpg'"
        />

        <item
          :number="'03'"
          :title="'The Growth of Gaming'"
          :description="'How the pandemic has sparked fresh opportuninties'"
          :pictureName="'image-gaming-growth.jpg'"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import links from "./components/links.vue";
import item from "./components/item.vue";
import feature from "./components/feature.vue";
import MyButton from "./components/mybutton.vue"
import { ref } from "vue";

const showMenu = ref(false);

function triggerMenu() {
  showMenu.value = !showMenu.value;
}
</script>
