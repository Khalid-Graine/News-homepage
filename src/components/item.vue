<template>
     <div class="item">
           
          <img :src="`../../public/images/${props.pictureName}`" alt="">

         <div class="">
           <b class="text-3xl text-xgrayishblue">
            {{ props.number }}
           </b>
           <h4 class="font-bold">
            {{ props.title }}
           </h4>
           <small class="text-xblue"
             >
             {{ props.description }}
             </small
           >
         </div>
       </div>
</template>

<script setup>

const props = defineProps(['number', 'title', 'description', 'pictureName']);

</script>


<style>
.item {
  @apply  col-span-3 lg:col-span-1 flex gap-4   ;
}
.item img {
  @apply   flex object-cover max-w-[100px]
}
.item div {
  @apply flex flex-col justify-around flex-grow
}
</style>