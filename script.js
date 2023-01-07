/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2 = [
  { id: 4, name: "alpha", age: "18", profession: "developer" },
  { id: 5, name: "jane", age: "20", profession: "admin" },
  { id: 6, name: "jill", age: "19", profession: "admin" }
]

function PrintDeveloperswithMap(x) {
  //Write your code here
arr.map(function(value){
  if(value.profession === "developer"){
    console.log(value);
  }
})

  }

function PrintDeveloperbyForEach() {
  //Write your code here
  for(let i = 0; i < arr.length; i++){
    let temp = arr[i];
    if(temp.profession === "developer"){
    console.log(temp);
    }
  }
}

function addData() {
  //Write your code here
  console.log(arr.splice(3,0, {id:4,name:"susan",age: "20", profession:"intern"}))
  console.log(arr)
}

function removeAdmin() {
  //Write your code here
  console.log(arr.splice(2,1,))
  console.log(arr)
}

function concatenateArray() {
  //Write your code here
  let a = arr.concat(arr2)
  console.log(a)
}
