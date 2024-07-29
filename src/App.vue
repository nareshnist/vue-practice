<!-- <template> -->
  <!-- <h1>Root Component</h1>
  <products></products>
  <PaymentDetails></PaymentDetails> -->
 <!-- printing user name in app component {{ username }} -->

 <!-- <AsyncComp  v-if="ishow"/> -->

  <!-- <ComponentC v-if="false"></ComponentC> -->

  <!-- <ComponentB></ComponentB>
  <ComponentB1></ComponentB1>
  <WatchComponent></WatchComponent> -->

  <!-- <VuePlugins></VuePlugins> -->

  <!-- <CustomDirective></CustomDirective> -->
  <!-- <Transitions></Transitions> -->
<!-- </template> -->

<!-- <script setup> -->

// import {provide,ref} from 'vue';
// import {defineAsyncComponent} from 'vue';
//  import PaymentDetails from './components/PaymentDetails.vue';
// import ComponentC from './components/ComponentC.vue';
// import ComponentB from './components/ComponentB.vue';
// import ComponentB1 from './components/ComponentB1.vue';
// import WatchComponent from'./components/WatchComponent.vue';
// import Transitions from './components/Transitions.vue';



import CustomDirective from './components/CustomDirective.vue';



// const AsyncComp = defineAsyncComponent(
  
// {
//   loader: () => import('./components/ComponentC.vue'),
//   delay :5000
// }
// );

// console.log(AsyncComp)

// const username = ref('Jupalle Naresh');
// const ishow = ref(false);
// provide('userName',username);

// 6000     
// 3000                                         

setTimeout(() => {
   ishow.value = true;
}, 5000);

<!-- </script> -->



<!--  Vue Provide & inject apis  -->
<!-- https://www.youtube.com/watch?v=1oy8dn9xAQE -->




<!-- Composables -->


<!-- Vue medium guide -->
<!-- https://medium.com/@sixtusgreat_16629/title-a-comprehensive-guide-to-fetching-data-from-api-with-vue-js-710c44a81ce3 -->

<template>
  <!-- <div class="container">
  <Suspense>
    <ProductList />
  </Suspense>

  <h2>
    FallthruAttributes / events 
    <parentCom />
  </h2>

  <H2>Vue Slots 
    <SlotParent />
  </H2>
  
  <h3>
    Provide /inject

    <provideComponentA />
  </h3>

  <div class="reativity">
    <vueReactivityVue></vueReactivityVue>

  </div>
  <div class="reativity">
      <vueReactiveUtilities></vueReactiveUtilities>
  </div>

  <button @click="asyncComponnet">Loading async component</button>

<component :is="async" v-if="data"></component>

<TheTest></TheTest>
  </div> -->


  <!-- another categories  -->
  <div>
    <vueSuspens></vueSuspens>
  </div>
  
</template>

<script setup>
// import parentCom from './components/FallthruAttributes/parentCom.vue';
// import ProductList from './components/PropsEvents/ProductList.vue';
// import provideComponentA from './components/provideinject/provideComponentA.vue';
// import vueReactivityVue from './components/reactivity/vueReactivity.vue';
// import SlotParent from './components/slots/SlotParent.vue';
// import vueReactiveUtilities from './components/reactivity/vueReactiveUtilities.vue';
// import  TheTest from './components/scrool-with-display/TheTest.vue'
// import { defineAsyncComponent, ref } from 'vue';
// const async =  defineAsyncComponent(() =>  import('./components/AsyncComponents/async-component.vue'));
// const data = ref(false);




// function asyncComponnet(){
//   data.value != data.value;
// }

//another categories
import vueSuspens from './components/suspense/vueSuspens.vue';


</script>

<style scoped>
h2 {
  border: 3px solid green;
  margin-top: 40px;
}
h3 {
  border:  3px solid #333;
  margin-top: 30px;
}

.reativity {
  margin-top: 30px;
  border: 4px solid #3333;
}

</style>