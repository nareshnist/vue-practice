import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue';

import Products from './components/Products.vue';



const app = createApp(App);
app.component('products',Products);


app.directive('highlight',
    {
    bind(el) {
      debugger;
      el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = 'yellow';
      });
  
      el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = null;
      });
    }
  })



app.mount('#app')
