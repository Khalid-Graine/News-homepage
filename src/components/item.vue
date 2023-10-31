<template>
     <div class="col-span-3 lg:col-span-1 flex gap-4">
           
          <img class="flex object-cover max-w-[100px]" :src="`../../public/images/${props.pictureName}`" alt="">

         <div class="flex flex-col justify-around flex-grow">
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
