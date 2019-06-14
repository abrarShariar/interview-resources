//rotate in place left 

function rotate(arr, k) {
   let cycle = 0;
   while (cycle < k) {
     let i = cycle;
     let temp = arr[i];
     while (i < arr.length) {
         arr[i] = arr[i+=k];
     }
     
     arr[i-k] = temp;
     cycle++;
   }
   
   return arr;
 }



