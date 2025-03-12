/*
 for i 0-->arr.length                                                      
     │                                                                     
     │                      call all elements in array                     
     │     ┌──────────────────────────────────────────────────────────────┐
     │     │ for j 0-->arr.length-i-1                                     │
     └────►│     │                                                        │
           │     │                  for loop swap position                │
           │     │  ┌────────────────────────────────────────────────────┐│
           │     └─►│                          No                        ││
           │        │ if (arr[j] > arr[j + 1])────► No change            ││
           │        │            │                                       ││
           │        │            │Yes                                    ││
           │        │            │                                       ││
           │        │            ▼                                       ││
           │        │    var temp = arr[j];                              ││
           │        │    arr[j] = arr[j + 1];                            ││
           │        │    arr[j + 1] = temp;                              ││
           │        └────────────────────────────────────────────────────┘│
           └──────────────────────────────────────────────────────────────┘
*/
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

var arr = [2, 3, 4, 1, 0, 8];
bubbleSort(arr);
console.log(arr);