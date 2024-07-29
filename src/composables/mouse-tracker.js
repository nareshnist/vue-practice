import { onBeforeUnmount, onMounted, ref } from "vue";
import { useEventListener } from "./events";


export default function useMouseTraclker(){

    const  x =  ref(0);
    const  y =  ref(0);

    function uppdate(event){
        x.value = event.x;
        y.value  = event.y;
    }
    useEventListener(window,'mousemove',uppdate)
    useEventListener(window,'mousemove',uppdate)

    return {
        x,
        y
    }
}



// methode one 

// generic object creation 
// function   createObject (){
//     let keys = ['name','age','placeholde'];
//     let values = ['naresh','26','search input'];
    
//     let x = {};
//     let count = keys.length - 1;
    
//     for(let i = count; i>=0; i--){
//         console.log(i);
//         x[keys[i]] = values[i];
//     }
//     console.log(x);
// }

// genericObject([],[]);


// methode two 

// const generatefilterConfig = (name,disabled,type,placeholder,id,list,isVisible) => {
//   return {
//     name,
//     disabled,
//     type,
//     placeholder,
//     id,
//     list,
//     isVisible
//   }
// }

// generatefilterConfig('Product',false,'single','Product','product','productNames',true)