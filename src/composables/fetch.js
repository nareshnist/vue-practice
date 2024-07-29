import { ref, toValue, watch, watchEffect } from "vue";

export function useFetchData(url){

    //debugger
    const error = ref(false);
    const data = ref(null);

    const fetchData = () => {
        fetch(toValue(url))
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => {
            d//ebugger;
            error.value  = true;
            console.log("==========")
            console.log(error);
        });
    }

//    watch(url ,(newValue) => {
//     debugger;
//     console.log(toValue(newValue));
//         fetchData(newValue);
//    },true) 


watchEffect(() => {
    fetchData()
})


return {
    error,
    data
}
}



// watch & watch effect 
// https://www.youtube.com/watch?v=O4EpUitjpR0
// https://www.youtube.com/watch?v=QkadKspKoJo