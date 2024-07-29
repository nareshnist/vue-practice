import { onMounted, onUnmounted } from "vue";


export function useEventListener(target,event,callback){

    // before ready
    onMounted(() => {
        target.addEventListener(event, callback);
    });

    // leaving the component;
    onUnmounted(() => {
        target.removeEventListener(event, callback);

    });
}