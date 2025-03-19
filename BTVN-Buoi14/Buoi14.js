const companyA = [
    { id: 1, name: "Minh", age: 25 },
    { id: 2, name: "An", age: 30 },
    { id: 3, name: "Bình", age: 28 },
    { id: 4, name: "Dũng", age: 25 }
  ];
  
  const companyB = [
    { id: 5, name: "Bình", age: 32 },
    { id: 6, name: "Chi", age: 28 },
    { id: 7, name: "An", age: 29 },
    { id: 8, name: "Dũng", age: 25 }
  ];
  



  //1. Viết hàm findCommonNames(arr1, arr2) để tìm những người trùng tên trong cả hai danh sách.
/*                                                                
   ┌────────────────────────────────────────────────────────┐    
   │ Let array = [],findName = []                           │    
   │             │                                          │    
   │             │                                          │    
   │             ▼                                          │    
   │    for i=0,i<arr1.length                               │    
   │             │       │                                  │    
   │             │       │   ┌────────────────────────────┐ │    
   │             │       └──►│ let temp = arr1[i].name    │ │    
   │             │           │ array[temp] = arr1[i].name │ │    
   │             │           └────────────────────────────┘ │    
   │             │                                          │    
   │             │                                          │    
   │             ▼                                          │    
   │    for i=0,i<arr2.length                               │    
   │             │       │                                  │    
   │             │       │   ┌────────────────────────────┐ │    
   │             │       └──►│ temp = arr2[i].name        │ │    
   │             │           │ if (array[temp]) {         │ │    
   │             │           │     findName[temp] = temp  │ │    
   │             │           │ }                          │ │    
   │             │           └────────────────────────────┘ │    
   │             │                                          │    
   │             ▼                                          │    
   │       return findName                                  │    
   │                                                        │    
   │                                                        │    
   └────────────────────────────────────────────────────────┘                                                                
*/
  function findCommonNames(arr1, arr2) {
    let array = {}
    let findName = {}
    for (let i = 0; i < arr1.length; i++) {
        let temp = arr1[i].name
        array[temp] = arr1[i].name
    }
    for (let i = 0; i < arr2.length; i++) {
        temp = arr2[i].name
        if (array[temp]) {
            findName[temp] = temp
        }
    }
    return findName
}
console.log(findCommonNames(companyA, companyB))


  //2. Viết hàm findCommonAgesAndName(arr1, arr2) để tìm những người có cùng độ tuổi và tên trong cả hai danh sách.
    /*
      ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐  
  │ let recordsMap = {};                                                                            │  
  │ let fullIdentity;                                                                               │  
  │ let duplicateRecords = {};                                                                      │  
  │       │                                                                                         │  
  │       │                                                                                         │  
  │       ▼                                                                                         │  
  │ for i=0;i<array1.length                                                                         │  
  │       │           │                                                                             │  
  │       │           │                                                                             │  
  │       │           │    ┌────────────────────────────────┬──────────────────────────────────────┐│  
  │       │           └───►│ fullIdentity = arr1[i].name + "│" + arr1[i].age;                      ││  
  │       │                │ recordsMap[fullIdentity] = { name: arr1[i].name, age: arr1[i].age };  ││  
  │       │                └───────────────────────────────────────────────────────────────────────┘│  
  │       │                                                                                         │  
  │       ▼                                                                                         │  
  │ for i=0;i<array2.length                                                                         │  
  │       │           │                                                                             │  
  │       │           │                                                                             │  
  │       │           │    ┌───────────────────────────────────────────────────┐                    │  
  │       │           └───►│ fullIdentity = arr2[i].name + " " + arr2[i].age;  │                    │  
  │       │                │ if (recordsMap[fullIdentity]) {                   │                    │  
  │       │                │     duplicateRecords[fullIdentity] = fullIdentity;│                    │  
  │       │                │ }                                                 │                    │  
  │       │                └───────────────────────────────────────────────────┘                    │  
  │       │                                                                                         │  
  │       ▼                                                                                         │  
  │                                                                                                 │  
  │ return duplicateRecords;                                                                        │  
  └─────────────────────────────────────────────────────────────────────────────────────────────────┘  
                                                                                                       
    */


  function findCommonAgesAndNames(arr1, arr2) {
    let recordsMap = {};
    let fullIdentity;
    let duplicateRecords = {};

    for (let i = 0; i < arr1.length; i++) {
        fullIdentity = arr1[i].name + " " + arr1[i].age;
        recordsMap[fullIdentity] = { name: arr1[i].name, age: arr1[i].age };
    }

    for (let i = 0; i < arr2.length; i++) {
        fullIdentity = arr2[i].name + " " + arr2[i].age;
        if (recordsMap[fullIdentity]) {
            duplicateRecords[fullIdentity] = fullIdentity;
        }
    }

    return duplicateRecords;
}

console.log(findCommonAgesAndNames(companyA, companyB));




