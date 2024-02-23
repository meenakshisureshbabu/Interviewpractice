//reverse a string

function reverseorder(str){
    return str.split('').reverse().join('');
}

console.log(reverseorder("Hi this is me"))
console.log("-------------------------")

//remove duplicates from an array

function remduplicates(arr){
    return  [...new Set(arr)]
}

console.log(remduplicates([1,2,2,3,5,5]))
console.log("----------------------------")


//merge 2 objects

function mergeobj(obj1,obj2){
    return ({...obj1,...obj2})
}

console.log(mergeobj({1:1,2:2},{3:3,4:4}))
console.log("-----------------------------")

//cumulative sum of an array

function cumsum(arr){
    return arr.reduce((acc,num) => acc+num,0)
}

console.log(cumsum([4,2,3]))
console.log("-----------------------------")

//split array into chucks of specified size

function splitchunkssize(arr,size){
    return Array.from({length:Math.ceil(arr.length/size)},(_,i) => arr.slice(i*size,i*size+size))
}

console.log(splitchunkssize([1,2,3,4,5,6,7,8],3))
console.log("---------------------------------")

//find the largest consecutive sequence

function largeconsseq(arr,element){
    return Math.max(...arr.join('').split(element).map(group => group.length))
}

console.log(largeconsseq([1,2,3,4,8,9,6],5))
console.log("---------------------------------")

//replace hypens and underscores to camelcase

function replacehypundercamel(str){
    return str.replace(/[_-](.)/g,(_,c) => c.toUpperCase())
}

console.log(replacehypundercamel("mee-na_k"))
console.log("---------------------------------")

//swap 2 variables without tem variable

function swapvar(a,b){
    return [a,b] = [b,a]
}

console.log(swapvar(1,2))
console.log("----------------------------------")


//countdwon from a given number

function countdown(num){
    return Array.from({length:num},(_,i) => num-i)
}

console.log(countdown(5))
console.log("------------------------------------")

// convert string to integer

function convertstrtoint(str){
    return +str===+str ? +str : 0
}

console.log(convertstrtoint("123"))
console.log("--------------------------------")

//decimal to binary

function convertdectobin(num){
    return num.toString(2);
}

console.log(convertdectobin(23))
console.log("--------------------------------------")

//factorial of a number

function factorial(num){
    return Array.from({length:num},(_,i) => i+1).reduce((acc,num) => acc*num)
}

console.log(factorial(4))
console.log("----------------------------------------")

//generate a random integer between max and min

function genrandom(max,min){
    return Math.floor(Math.random()*(max - min + 1) + min)
}


console.log(genrandom(2,4))
console.log("----------------------------------------")

//count the occurences

function countoccur(arr){
    return arr.reduce((acc,num) => (acc[num] = (acc[num] || 0) + 1,acc),{})
}

console.log(countoccur([1,2,2,3,4]))
console.log("-------------------------------------------")

//capitalize first letter of each word
function capitalizefirst(str){
    return str.replace(/\b\w/g,c => c.toUpperCase())
}

console.log(capitalizefirst("this is me"))
console.log("------------------------------------------")

//reverse a given string

function reversestring(str){
    return str.split('').reverse().join('');
}

console.log(reversestring("meena"))
console.log("----------------------------------------")

//find the longest word

function longestword(str){
    return str.split(' ').reduce((acc,word) => acc.length > word.length ? acc : word,'')
}

console.log(longestword("this is meeeeee"))
console.log("---------------------------------------------")


//second largest number in array

function secondlargest(arr){
    return [...new Set(arr)].sort((a,b) => b-a)[1];
}

console.log(secondlargest([1,2,3,5,8,6]))
console.log("--------------------------------------------")


// finding the missing number in consecutive integers

function findmissingnum(arr,limit){
    let actualsum = (limit * (limit+1))/2;
    let total = arr.reduce((acc,num) => acc+num)
    return actualsum-total;
    
}

console.log(findmissingnum([1,2,3,5,6,7,8,9],9))
console.log("-----------------------------------------------")

//truncate a given string to a specified length

function truncatestr(str,limit){
    return str.slice(0,limit) + "..."
}

console.log(truncatestr("meenakshisundari",4))
console.log("------------------------------------------------")

// //debounce

// function debounce(func,delay){
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func(...args,delay))
//     }
// }


// const delayedLog = debounce((text) => console.log(text), 1000);
// delayedLog('Hello'); // Logs 'Hello' after 1000 milliseconds
// delayedLog('World');

// console.log("--------------------------------------------------")

//throttle function

// to check if a string contains all unique characters

function checkuniqueletters(str){
    return str.length === new Set(str.split('')).size ? true : false
}

console.log(checkuniqueletters("menakshi"))
console.log("---------------------------------------------------")


// convert each string in an array of strings to uppercase

function convertarrayupper(arr){
    return arr.map((item) => item.toUpperCase())
}

console.log(convertarrayupper(['apple','banana','kiwi']))
console.log("---------------------------------------------------")


//find the first non-repeated character of a string

function firstnonrepeatchar(str){
    console.log(str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char)))
}

firstnonrepeatchar("mmeenakshi")
console.log("-----------------------------------------------------")

// to rotate the elements of an array
function rotateArray(arr,positions){
    return arr.slice(-positions).concat(arr.slice(0,-positions))
}

console.log(rotateArray([1,2,3,4,5],2))
console.log("---------------------------------------------------")

//to convert minutes to hours and mins

function convertmins(num){
    return `${Math.floor(num/60)} h ${num%60}m`;
}

console.log(convertmins(120))
console.log("--------------------------------------------------")

//generate a random password of specified length

function generaterandompwd(length){
    return Array.from({length},() => String.fromCharCode(Math.floor(Math.random() * 94) + 33)).join('')
}

console.log(generaterandompwd(8))
console.log("--------------------------------------------------")

//convert RGB color to hexadecimal code

function convertRGBtohex(code1,code2,code3){
    return `#${(1 << 24 | code1 << 16 | code2 << 8|code3).toString(16).slice(1)}`
}

console.log(convertRGBtohex(123,345,234))
console.log("--------------------------------------------------")

//check if a given string has balanced brackets

function checkbalancedbrackets(str){
    return !str.split('').reduce((count, char) => (char === '(' || char === '[' || char === '{') ? ++count : (char === ')' || char === ']' || char === '}') ? --count : count, 0);
}
console.log(checkbalancedbrackets("hi(this)[hi]"))
console.log("-----------------------------------------------------")


//generate a unique identifier

function generateuniqueidentifier(){
    return Math.random().toString(36).substring(2,9)
}

console.log(generateuniqueidentifier())
console.log("---------------------------------------------------")

//to return a promise after a particular time

function returnpromise(ms){
    return new Promise((response) => setTimeout(response,ms))
}

console.log(returnpromise(1000))

let str = "123"
console.log(+str)


// word break

function wordbreak(str1,strarray,result=[]){
    if(str1.length === 0){
        return 0;
    }
    else{
        for(let i=0;i<str1.length;i++){
            const substring = str1.slice(0,parseInt(i)+1)
            console.log(substring)
            if(strarray.includes(substring)){
                console.log("Inside")
                const remainingstring = str1.slice(parseInt(i)+1);
                const wordsegment = wordbreak(remainingstring,strarray,[...result,substring])
                if(wordsegment != null){
                    return 1;
                }
            }
        }
    }
    return null;
}

console.log(wordbreak("ilike",['i','like','sam','sung','samsung']))


// subarray with given sum

function subarraywithgivensum(arr,n,s){
    //arr.sort();
    
    for(let i=0;i<n;i++){
        let sum = arr[i];
        for(let j=i+1;j<n;j++){
            sum += arr[j]
            if(sum === s){
                return [i+1,j+1]
            }
        }
    } 
    return null;  
}

console.log(subarraywithgivensum([1,2,3,4,5,6,7,8,9,10],10,15))


class Node{
    constructor(){
        this.value = null;
        this.next = null;
    }
}

class Solution{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    reverseList(head){
        let node = head;
        this.head = tail;
        this.tail = node;
        let prev=null;
        let next;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;

        }
    }
}


// function buyandsellstock(arr,n){

//     let sell;
//     let buyindex;
//     let sellindex;
//     let i = 0;
//     let maxsellindex;
//     while(i<= n){
//         buyindex = i;
//        for(let j=i+1;j<=n;j++){
//         if(arr[buyindex] > arr[j]){
//             sellindex = j-1;
//             i = j;
//         }
//         else{
//             maxsellindex = j;
//         }
        
//        }
//     }
//     // 1,2,3,4,5,6
//     // 4,2,2,4
//     //100,180,360,250,40,450
//      // buyIndex = 0 ; sellIndex = 1;
//     while(buyindex <=sellIndex ) {
        
//         // buy < sell && maxselIndex < sell -> maxSelIndex = selIndex selIndex++;
//         // buy >= sell -> buyIndex = selIndex selIndex++; 4 > 2 buyIndex = 2 selIndex = 3
//         }

//         // (2,3)


//     console.log("Sell",sell)
//     console.log("Buy",buyindex)
// }

// console.log(buyandsellstock([100,180,260,310,40,535,695],7))


// Fibonacci series

//1,2,3,5,8,13

// Merge Sort

function merge(arr1,arr2){
    let i=0;
    let j=0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++;
        }
        else{
            result.push(arr1[i])
            i++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j])
        j++;
    }
    return result;
}

function mergesort(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let leftarr = mergesort(arr.slice(0,mid));
    let rightarr = mergesort(arr.slice(mid))
    return merge(leftarr,rightarr)
}



console.log(mergesort([3,1,4,6,5]))
//console.log(merge([1,3,5],[2,4,6]))


//find the element in an array

function findelement(arr,n){
    if(arr.includes(n))
    return arr.indexOf(n)
    else
    return false
}

console.log(findelement([1,5,3,4],5))
console.log("--------------------------------------------------")

// find maximum and minimum element in an array

function findmaxmin(arr){
    arr.sort()
    let max = arr[arr.length-1]
    let min = arr[0]
    return [max,min]
}

console.log(findmaxmin([1,2,5,6]))
console.log("----------------------------------------------------")

function swap(arr){
    return [arr[0],arr[1]] = [arr[1],arr[0]]
}

function waveorder(arr, result = []){
    if(arr.length <= 0) return 0;
    let newarr = arr.splice(0,2)
    result.push(swap(newarr))
    waveorder(arr,result)
    return result.flat();
}

console.log(waveorder([1,2,3,4,5,6]))
console.log("-------------------------------------------------------")

//Bitonic point

function bitonicpoint(arr){
    let minindex = 0;
    let maxindex = 1;
    while(minindex <= maxindex){
        if(arr[minindex] < arr[maxindex]){
            minindex++;
            maxindex++;
        }
        else{
            return arr[minindex]
        }
    }
}

console.log(bitonicpoint([1, 45, 47, 50, 5]))
console.log("----------------------------------------------------------")

//Maximum of all subarrays of size k
function findmax(arr){
    arr.sort();
    return arr[arr.length-1]
}
function maxsubarray(arr,n,k){
    let result = [];
    for(let i=0;i<n-2;i++,k++){
        result.push(findmax(arr.slice(i,k)))
    }
    return result
}

console.log(maxsubarray([1, 2, 3, 1, 4, 5, 2, 3, 6],9,3))
console.log("-----------------------------------------------------------")


//Anagram

function isAnagram(str1,str2){
    if(str1.split('').sort().join('') === str2.split('').sort().join(''))
    return true;
    else
    return false

}
console.log(isAnagram('meena','aneemk'))
console.log("--------------------------------------------------------------")

// palindrome substring
//function to create a palindrome check
function checkpalindrome(str){
    if(str === str.split('').reverse().join('')){
        return true;
    }
    else{
        return false
    }
}

function checksubstrpalindrome(str,n){
    let cntr=0;
    //console.log(str.slice(0,1))
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            //console.log(str.slice(i,j+1))
            if(checkpalindrome(str.slice(i,j+1))){
                cntr++
            }
        }
    }
    return cntr
}

console.log(checksubstrpalindrome('abbaeae',7))
console.log("------------------------------------------------------------")

//check whether the Kth bit is set or not

// read the integer - Check for <=0 and null
//write a function that accepts integer and kth position
// convert the integer to binary
//iterrate the number and check the kth bit is set as 1, return true

function bitset(num,k){
    if(num <=0 || null){
        return "Not a valid integer"
    }
    else{
        let binnum = num.toString(2)
        let index = (binnum.length-1)-k;
        
        
        if(binnum[index] === '1'){
            return true;
        }
        else{
            return false;
        }
    }

}

console.log(bitset(4,2))
console.log("----------------------------------------------------")

//Move all zeroes to end

function swapwithzero(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr
}
function moveallzeroestoend(arr){
    let numindex = 0;
    let zeroindex;
    while(numindex < arr.length){
        if(arr[numindex] !== 0){
            numindex++;
        }
        else{
            zeroindex = numindex + 1;
            while(zeroindex < arr.length){
                if(arr[zeroindex] !== 0){
                    swapwithzero(arr,numindex,zeroindex)
                    console.log(arr)
                    break;
                }
                zeroindex++;
            }
            numindex++;
        }
    }
    return arr
}

console.log(moveallzeroestoend([0,0,1,2,0,3,4]))
console.log("-----------------------------------------------------------------")

//longest substring length

// function longestsubstrlength(str){
//     let maxlength = 0;
//     for(let i=0;i<str.length;i++){

//     }
// }


// longestsubstrlength("bbbb")

// N repeated element in 2n array

function nrepeatedelement(arr){
    let n = arr.length/2;
    let obj = arr.reduce((acc,num) => (acc[num] = (acc[num] || 0) + 1,acc),{})
    return Object.keys(obj).find(key => obj[key] === n)
    
}


console.log(nrepeatedelement([1,3,3,4,3,5,3,4]))
console.log("------------------------------------------------------------")

//Buildings facing sun

function facingsun(arr){
    if(arr.length <= 0){
        return 0
    }
    let cntr = 1;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < arr[i+1]){
            cntr++;
        }
    }
    return cntr;
}


console.log(facingsun([7,4,8,2,9]))
console.log("----------------------------------------------------------------")

// Mountain Array
// two pointers - one pointer at the beginning and one pointer at the end
function validMountainArray(arr){
    let initialIndex = 0;
    let lastIndex = arr.length-1;
    while(initialIndex < lastIndex){
        if(arr[initialIndex] < arr[initialIndex+1] && arr[lastIndex] < arr[lastIndex-1]){
            initialIndex++;
            lastIndex--;
        }
        else{
            return false
        }
        return true
    }
    
}

console.log(validMountainArray([1,2,6,5,3]))
console.log("--------------------------------------------------------------------")


//Binary Search

function binarysearchelem(arr,low,high,number){
    if (low > high) 
    {
    	return -1;
    }
 
    // Discovers the mid-point in the search space and compares it to the target
    let mid = (low + high)/2;   
 
    // Base condition (target value is found)
    if (number == arr[mid]) 
    {
    	return mid;
    }
 
    // Remove all elements from the right search space, including the middle element.
    else if (number < arr[mid]) 
    {
    	return binarysearchelem(arr, low, mid - 1, number);
    }
 
    // Remove all elements from the left search space, including the middle element.
    else 
    {
    	return binarysearchelem(arr, mid + 1, high, number);
    }
    

}

console.log(binarysearchelem([1,2,3,4,5,6,7],0,6,3))


//Merge 2 sorted array

function merge2array(nums1,m,nums2,n){
    for(let i=0;i<m-1;i++){
        nums1 = nums1[i]
    }
    for(let i=nums1.length;i<n-1;i++){
        nums1[i] = nums2[i]
    }
    
}


console.log(merge2array([1,2,4],[3,5,6]))