function myEach(arr,func){  //outer function
    for(let i=0;i<arr.length;i++){
        func(arr[i]);       //inner function.
    }
}
console.log("myEach()");
myEach([1,3,4],func=(num)=>console.log(num*10));



function myMap(arr, func){
    let newArr = [];
    for(let i=0; i<arr.length;i++){
        newArr[i]= func(arr[i]);
    }
    return newArr;
}
console.log("\n\nmyMap()");
let items = [{genre:"hip hop", bpm : 130}, {genre: "pop",bpm:120},{genre : "indie rock",bpm:100}];
let genreName = myMap(items,func=(array)=>{return array.genre});
console.log(genreName);



function myFilter(arr, func){
    let newArray = [];
    for(let i = 0; i<arr.length;i++){
        if(func(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log("\n\nmyFilter()");
console.log(myFilter([0,1,2,46,12,50,20,3],item=>item>5));



function mySome(arr,func){
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            return true;
        }
    }
    return false;
}
const array=[3,5,7,9,11];
console.log("\n\nmySome()");
console.log(mySome(array,(ele)=>ele%2==0));


function myEvery(arr,func){
    for(let i=0;i<arr.length;i++){
        if(!func(arr[i])){
            return false;
        }
    }
    return true;
}
const array1=[2,4,6,8,17];
console.log("\n\nmyEvery()")
console.log(myEvery(array1,(ele)=>ele%2==0));

 
 function myReduce(arr, cb){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += cb(arr[i]);        // loop over array and get the sum
    }
    return sum;  
 }
const array2 = [1,2,3,4];
console.log("\n\nmyReduce()");
console.log(myReduce(array2,(element)=>{return element}));


function myIncludes(arr,element){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==element){
            return true;
        }
    }
    return false;
}
const pets=["cat","dog","bunny","turtle"];
console.log("\n\nmyIncludes()");
console.log(myIncludes(pets,"turtle"));


function myIndexOf(arr,target){
    for(let i=0; i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
const pets1=["cat","dog","bunny","turtle"];
console.log("\n\nmyIndexOf()");
console.log(myIndexOf(pets1,"elephant"));


function myPush(arr,element){
    return [...arr,element];
}
let pets2=["cat","dog","bunny","turtle","cat","turtle"];
pets2=myPush(pets2,"elephant");
console.log("\n\nmyPush()");
console.log(pets2);


function lastIndexOf(arr, target){
    for(let i=arr.length-1; i >=0; i--){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}
const pets3=["cat","dog","bunny","turtle","cat","turtle"];
console.log("\n\nlastIndexOf()");
console.log(lastIndexOf(pets3,"turtle"));



function grabKeys(obj){  //returns all of the keys in the key:value pairs.
    let arr=[];     //store in array and will be returned.
    for (const temp in obj) {
        arr.push(temp);
    }
    return arr;
}
console.log("\n\ngrabKeys()");
console.log(grabKeys({a: 1, b: 2, c: 3,d:4,e:5}));  


function grabValues(obj){
    let arr=[];
    for(const val in obj){
        arr.push(obj[val]);
    }
    return arr;
}
console.log("\n\ngrabValues");
console.log(grabValues({a: 5, b: 10, c: 6,d:60,e:21}));  

