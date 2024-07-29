<template>
  
  <h1>Vue reactivity</h1>
  {{ person }}

  <button type="button" @click="updatePerson">Update person</button>
  <br><br>

  {{ persontwo }}
  <button type="button" @click="deeplyMutation">Deep Mutation</button>
  {{ count }}

  <br> <br> <br>

  {{ state }}

  {{ anotherState }}

  <button type="button" @click="ReactiveData">ReactiveData</button>

  <br><br><br>

  <p>reactive obejct replacement :{{ reactiveOject }}</p>

  <br><br><br>
<p>name with destructure friendly {{ name }}</p>
</template>

<script setup>

// creating reactive data with ref & reactivity 

import { nextTick, reactive,ref } from "vue";

// ref create an ref object 

const count = ref(0);
console.log(count);

// A ref can be deeply reactive 

const persontwo = ref(
  {
    nested:{
      firstName:"Naresh",
      lastName:"Jupalle"
    },
    arr:[10,20,30,40,50,60,70,80,90]
  }
);


function deeplyMutation (){
  persontwo.value.arr.push(100);
  persontwo.value.nested = {fullName :"Naresh jupalle"}
  increment()
}


async function  increment(){
  count.value++;
  await nextTick();
  console.log(count.value);
}


// There is another way to declare reactive state

// reactive create an 

// limitation ns
// can't use for primitives 
// not a destructure friendly
// can't replace the entire object 


const state =  reactive({name:"vue js A"});
const anotherState = reactive({
  tech:{name:"Vue js B "}
});

console.log("reactive object ")
console.log(state)

let person = reactive({name:"naresh",age:25});


function updatePerson(){
    person = {fullName:"Naresh jupalle"};
    console.log(person)
}


function ReactiveData(){
  state.name = "UI frame work vue js";
  anotherState.tech.name ="UI ---> Vue js"
}


// just an note 

const exp = {};
const reacExp = reactive(exp);

console.log(exp ===reacExp);
console.log(reacExp === reactive(exp))
console.log(reacExp === reactive(reacExp))



// reactive limitation
 //1. we can'tv use for the primitives like string number and boolean.
 const primitives = reactive(0);
 const primitivesStrings = reactive("naresh")
 console.log("waring in console ",primitives);
 console.log("waring in console ",primitivesStrings);

 //2. we can't complete the replace the entire object.

 let reactiveOject = reactive({firstName:"Naresh",lastName:"jupalle"});

 function replacingReactiveObject(){
  reactiveOject = reactive({fullName:"Naresh"});
 }

 setTimeout(() => {
  replacingReactiveObject();
  // debugger;
  // console.log(replacingReactiveObject)
 }, 9000);

 // 3.Not destructure-friendly

 const fullName = reactive({name:"xyz"});

 let {name } =  fullName;

 setTimeout(() => {
    name = "naresh royal ";
    // check ui name is not updated 
 }, 5000);

 // **** due to above limitaion doc advised to use the ref instead of reactive.
 



//  Caveat when Unwrapping in 
// collections 
// nested ref with tempplate


//    only top level ref has un wrapping details. const count = ref(0);

//  const object = {id:ref(1)}


// https://www.youtube.com/watch?v=sAj6tdVS2cA


</script>

<style scoped>
 br  {
  border-block: 3px solid red;
 }
</style>
