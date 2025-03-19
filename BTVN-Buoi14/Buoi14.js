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