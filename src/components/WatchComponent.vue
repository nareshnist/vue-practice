<template>
    <h1>watcher </h1>
    <br><br><br>
    <h1>eagar watcher </h1>
    <h1>deep watcher</h1>
    <h1>once watcher</h1>

    <input type="text" v-model="input">
</template>

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';


let input = ref('');

// router change listen for chnages 


// any reactive variable or computed property changes  

//  1 watch runs razily  watchEffect runs on init 


// only run when value is changed not on init load need to configure for init
// watch(() => input.value ,(curr,prev) => {
//     console.log(curr);
//     console.log(prev)
//     input.value =  `new value`;
// }) 

// 


// automaticatlly ru  on first time on load without any value chnage s where as watch will wait 
// watchEffect(() =>{
//     input.value =  `new value`;
// })



// 2 be more specific on what should trigger on re-run

// watch([input], (z,b) => {

// });

// 3able to see previou and next value s
//     watch([input], (z,b) => {

//     });
// // 


// automatically call when ever  changes the reactivity 

// when every dependency changes it will trigger 




//  ==================== ***************** =================

// const state =  reactive({counter:0})
// watch( () => state.counter ,() =>{
//     // console.log("executed watch")
// })
// watchEffect(() => {
//     console.log("executed watchEffect");
//     console.log(state.counter);
// });


// setTimeout(() => {
//     debugger
//     console.log("***************")
//     state.counter++;
// }, 7000);


// Deep Watchers

const obj = reactive({ count: 0 ,name:"x"})

watch(obj, (newValue, oldValue) => {
    debugger;
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!
})

// setTimeout(() => {
//     obj.count++
// }, 3000);
const state = reactive({
 count: 0,
 name: 'Leo'
})

const sleep = ms => new Promise(resolve => setTimeout(resolve,ms))


watchEffect(async () => {
    console.log(`Count: ${state.count}`) // This will be tracked
 await sleep(200)
 console.log(`Name:  ${state.name}`)
})

//https://fadamakis.com/vue-3-watcheffect-is-impressive-but-watch-is-still-the-best-choice-8903b62fdc19

</script>

