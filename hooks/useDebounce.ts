
let timeout;

type Props = {
  callback?: Function,
  wait: number
}

export default function useDebouce ({callback, wait}: Props) {
  
  const executedFunction = (...args) => {

    const later = () => {
      timeout = null;
      
      // Execute the callback
      callback(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };

  const cancelDebounce = () => {
    if(timeout){
      clearTimeout(timeout);
    }  
  }

  return [executedFunction, cancelDebounce];
};