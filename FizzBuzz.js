// 1. First condition - if the number is divisible by 3, then print FIZZ
// 2. Number divisible by 5 - then print "BUZZ"
//3. if the numbe ris dic=visible by both 3 and 5 then print "FIZZBUZZ"

// 4. I will be getting a number where the iterations should be happened till that number.
// if the num is 10, then the for loop


// function fizzbuzz (num){ // getting the num as a parameter for a range 
//     // loop to iterate through the numbers
//     for(let cntr=0;cntr<=num;cntr++)
//     {
//         if(cntr%5==0 && cntr%3 ==0){
//             console.log("FIZZBUZZ")
//         }
//         else if(cntr%3 ==0)
//         {
//             console.log("FIZZ")
//         }
//         else if(cntr%5 ==0){
//             console.log("BUZZ")
//         }   
//         else{
//             console.log(cntr);
//         }
//     }
// }


// fizzbuzz(15);



// /**
//  * @param {string} val
//  * @return {Object}
//  */
// var expect = function (val) {
//     return {
//         notToBe: (value1) => {
//             if (val == value1) throw new Error("Equal");
//              else return true;
//         },
//         toBe: (value) => {
//             if (val !== value) throw new Error("Not Equal");
//             else return true;
//         }
        
//     }
// };

// try{
// expect(5).toBe(5); // true
// //expect(5).notToBe(5); // throws "Equal"
// expect(5).toBe(3);
// }
// catch(e)
// {
//     console.log(e);
// }

// //  expect(5).notToBe(5); // throws "Equal"



//Frequency counter


// function same(arr1,arr2)
// {
//     if(arr1.length != arr2.length){
//         return false;
//     }
//     let freqcounter1 = {};
//     let freqcounter2 = {};
//     for(let val of arr1){
//         freqcounter1[val] = (freqcounter1[val] || 0 ) + 1
//     }
//     for(let val of arr2){
//         freqcounter2[val] = (freqcounter2[val] || 0) + 1
//     }
//     console.log(freqcounter1)
//     console.log(freqcounter2)

//     for(let key in freqcounter1){
//         if(!(key ** 2 in freqcounter2)){
//             return false
//         }
//         else{
//             if(freqcounter1[key] !== freqcounter2[key**2]){
//                 return false;
//             }
//         }
//     }
//     return true

// }

// console.log(same([1,2,2,3],[1,4,4,9]))

 //Anagrams String

//  function anagram(str1,str2){
//     let freqcntr1 = {};
//     let freqcntr2 = {};
//     if(str1.length != str2.length){
//         return false;
//     }
//     for(let char of str1){
//         freqcntr1[char] = (freqcntr1[char] || 0) + 1
//     }
//     for(let char of str2){
//         freqcntr2[char] = (freqcntr2[char] || 0 ) +1
//     }

//     console.log(freqcntr1)
//     console.log(freqcntr2)
    
//     for(let key in freqcntr1){
//         if(!(key in freqcntr2)){
//             return false
//         }
//         if(freqcntr1[key] !== freqcntr2[key])
//         {
//             return false;
//         }
//     }
//     return true;
//  }

//  console.log(anagram("madam","madam"))


//Multiple pointers Pattern

//Return the first pair that equals the sum 0

// function zeropair(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum === 0){
//             return [arr[left],arr[right]]
//         }
//         else if(sum >0){
//             right--;
//         }
//         else{
//             left ++;
//         }
//     }

// }

// console.log(zeropair([-3,-2,-1,0,2,5,6]))


// function countUniqueValues(arr){
//     if(arr.length === 0){
//         return 0;
//     }
//     let left = 0;
//     let right = 1;
//     let cntr = 1;
//     while(right <= arr.length - 1){
//         if(arr[left] != arr[right]){
//             arr[left+1] = arr[right]
//             left++;
//             right++;
//             cntr++;
//         }
//         else{
//             right++;
//         }
        
//     }
//     return cntr
// }

// console.log(countUniqueValues([-3,3,3,3,5]))


// 

//Divide and Conquer pattern

// let arr = [1,2,3,4]
// console.log(arr.indexOf(4))


// function sameFrequency(num1,num2){
//     if(num1.toString().length != num2.toString().length){
//         return false;
//     }
//     let frqctr1 = {}
//     let frqctr2 = {}
//     let numstr1 = num1.toString();
//     let numstr2 = num2.toString();
//     for(let val of numstr1){
//         frqctr1[val] = (frqctr1[val] || 0) + 1
//     }
//     for(let val of numstr2){
//         frqctr2[val] = (frqctr2[val] || 0) + 1
//     }
//     for(let key in frqctr1){
//         if(!(key in frqctr2)){
//             return false
//         }
//         if(frqctr1[key] != frqctr2[key]){
//             return false
//         }
//     }
//     return true
// }

// console.log(sameFrequency(123,122))


// function areThereDuplicates(...args) {
//     // good luck. (supply any arguments you deem necessary.)
//     args.sort()
//     let left = 0;
//     let right = 1;
//     while(right <= args.length - 1){
//         if(args[left] == args[right]){
//             return true
//         }
//         else{
//             left++
//             right++
//         }
//     }
//     return false

// }

// console.log(areThereDuplicates(1,2,3))


// function averagePair(arr,target){
//     if(arr.length <= 0){
//         return false
//     }
//     // add whatever parameters you deem necessary - good luck!
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
       
//         if(arr[left]+arr[right] / 2 === target){
//             return true
//         }
//         else if((arr[left]+arr[right] / 2) > target){
//             right--
//         }
//         else{
//             left++
//         }
//     }
//     return false

// }

// console.log(averagePair([],4))


// function isSubsequence(str1,str2) {
//     let i=0;
//     let j = 0;
//     if(!str1) return true;
//     while(j<str2.length){
//         if(str2[j] === str1[i]) {
//             i++
//         }
//         if(i === str1.length){
//             return true
//         }
//         j++
//     }
//     return false
        
// }


// console.log(isSubsequence('ABC', 'ABRDC'))


// function maxSubarraySum(arr,num){
//     if(arr.length < num){
//         return null
//     }

//     let maxsum = 0;
//     for(let i=0;i<num;i++){
//         maxsum += arr[i];
//     }
//     let tempsum = maxsum

//     for(let i=num;i<arr.length;i++){
//         tempsum = tempsum - arr[i-num] + arr[i];
//         maxsum = Math.max(maxsum,tempsum);
//     }
//     return maxsum
// }

// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))

// function minSubarrayLen(arr,num){
//     if(arr.length < num){
//         return null
//     }

//     let maxsum = 0;
//     for(let i=0;i<num;i++){
//         maxsum += arr[i];
//     }
//     let tempsum = maxsum

//     for(let i=num;i<arr.length;i++){
//         tempsum = tempsum - arr[i-num] + arr[i];
//         maxsum = Math.max(maxsum,tempsum);
//     }
//     return maxsum
// }

// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))


// function productOfArray(arr){
//     let product = arr[0];
//     if(arr.length === 1) return product;
//     return product *= productOfArray(arr.slice(1))
// }

// console.log(productOfArray([1,2,3]))


// function linearSearch(arr,value){
//     // add whatever parameters you deem necessary - good luck!
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i] === value){
//             return i
//         }
        
//     }
//     return -1
// }

// console.log(linearSearch([10, 15, 20, 25, 30], 15))


// function binarySearch(arr,value){
//    let left = 0
//    let right = arr.length - 1;   
//    let middle = Math.floor((right+left) /2);
//    while(arr[middle] != value && left <= right){
//     if(arr[middle] < value){
//         left = middle+1;
//     }
//     else{
//         right = middle -1;
//     }
//     middle = Math.floor((right+left) /2);
//    }
//    if(arr[middle] == value){
//     return middle
//    }
//    else {
//     return -1;
//    }
// }

// console.log(binarySearch([1,2,3,4,5],6))


// function naiveSearch(str1,str2){
//     let cntr = 0;
//     for(let i=0;i<=str1.length;i++){
//         for(let j=0;j<=str2.length;j++){
//             console.log(str1[i]+"I::"+i)
//             console.log(str2[j]+"J::"+j)
//             console.log("Comparing Letters ",str1[i]," ",str2[j])
//             if(str1[i] != str2[j]) break
//             else{
//                 i++;
//                 if(j===str2.length-1){
//                 cntr++;
//                 i--;
//                 break;
//             }
//             }
            
//         }
//     }
//     return cntr;
// }

// console.log(naiveSearch("lorie loled","lo"))

//BUBBLE SORT


// function bubblesort(arr){
//     for(let i=arr.length ;i>0;i--){
//         for(let j=0;j<i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp;
//             }
//         }
//     }
    
//     return arr
// }

// console.log(bubblesort([3,2,5,1]))



//SELECTION SORT

// function selecionsort(arr){
//     let firstelem;
//     let minelem;
//     for(let i=0;i<arr.length;i++){
//         minelem = i;
//         for(let j=i+1;j<arr.length;j++){
//             if( arr[j] < arr[minelem]){
//                 minelem = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minelem];
//         arr[minelem] = temp;
//     }
//     return arr;
// }

// console.log(selecionsort([12,10,3,33]))


//INSERTION SORT

// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let currval = arr[i]
//         for(var j=i-1;j>=0 && arr[j] > currval;j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] =  currval;
//     }
//     return arr
// }

// console.log(insertionsort([1,4,2,3]))

//MERGE SORT

// function merge(arr1,arr2){
//     let result = [];
//     let i=0;
//     let j=0;
//     while(i< arr1.length && j< arr2.length){
//         if(arr2[j] > arr1[i]){
//             result.push(arr1[i])
//             i++;
//         }
//         else{
//             result.push(arr2[j])
//             j++
//         }
//     }
//     while(i<arr1.length){
//         result.push(arr1[i])
//         i++;
//     }
//     while(j<arr2.length){
//         result.push(arr2[j])
//         j++;
//     }
//     console.log(result)
//     return result;
// }

// //console.log(merge([100,200,300],[4,6,7,8]))


// function mergeSort(arr){
//     if(arr.length<=1) return arr;
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left,right)
// }

// mergeSort([1,5,2,4,8,60,12])


//QUICK SORT

// function swap(arr,swpindex,index){
//     let temp = arr[swpindex]
//     arr[swpindex] = arr[index]
//     arr[index] = temp

// }

// function pivot(arr,start=0,end=arr.length+1){
//     let pivot = arr[start]
//     let swapIdx = start;
//     for(let i=start+1;i<arr.length;i++){
//         if(pivot > arr[i]){
//             swapIdx++
//             swap(arr,swapIdx,i)
//         }
//     }
//     swap(arr,start,swapIdx)
//     return swapIdx;
// }

// //console.log(pivot([2,4,1,5,7,3]))


// function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//     let pivotindex = pivot(arr,left,right)
//     quickSort(arr,left,pivotindex-1)
//     quickSort(arr,pivotindex+1,right)
//     }
//     return arr;
// }


//console.log(quickSort([2,5,81,4]))

//RADIX Sort

// function getDigit(num,i){
//     return Math.floor(Math.abs(num) / Math.pow(10,i)) %10
// }

// function digitCount(num){
//     if(num === 0) return 1
//     return Math.floor(Math.log10(Math.abs(num))) +1
// }

// function mostDigits(arr){
//     let maxDigits = 0;
//     for(let i=0;i<arr.length;i++){
//         maxDigits = Math.max(maxDigits,digitCount(arr[i]))
//     }
//     return maxDigits
// }


// function radixsort(nums){
//     let maxdigitcnt = mostDigits(nums)
//     for(let k=0;k<maxdigitcnt;k++){
//         let digitbuckets = Array.from({length:10},() => [])
//         for(let i=0;i<nums.length;i++){
//             let digit = getDigit(nums[i],k)
//             digitbuckets[digit].push(nums[i])
//         }
//         nums = [].concat(...digitbuckets)
//     }
//     return nums

// }


// console.log(radixsort([12,456,2345,123,678]))


//BINARY SEARCH TREE

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null;
//         this.right = null;
//     }
// }


// class BST{
//     constructor(value){
//         this.root = new Node(value)
//         this.count = 1;
//     }

//     size(){
//         return this.count
//     }

//     insert(value){
//         this.count++
//         let newNode = new Node(value)
//         const searchTree = node => {
//             if(value < node.value){
//                 //if no left child, append the newnode on left side
//                 if(!node.left){
//                     node.left = newNode
//                 }
//                 //if left child is there, again call the searchTree
//                 else{
//                     searchTree(node.left)
//                 }
//             }
//             else if(value > node.value){
//                 if(!node.right){
//                     node.right = newNode
//                 }
//                 else{
//                     searchTree(node.right)
//                 }
//             }
//         }
//         searchTree(this.root)
//     }

//     min(){
//         let currentNode = this.root
//         while(currentNode.left){
//             currentNode = currentNode.left
//         }
//         return currentNode.value
//     }

//     max(){
//         let currentNode = this.root
//         while(currentNode.right){
//             currentNode = currentNode.right
//         }
//         return currentNode.value
//     }

//     contains(value){

//         let currentNode = this.root
//         while(currentNode){
//             if(value == currentNode.value){
//                 return true
//             }
//             if(value < currentNode.value){
//                 currentNode = currentNode.left
//             }
//             else{
//                 currentNode = currentNode.right
//             }
//         }
//         return false

//     }

//     //depth first search - branch by branch
//     //In - order - ascending
//     dfsInorder(){
//         let result = []

//         const traverse = node => {
//             if(node.left){
//                 traverse(node.left)
//             }
//             result.push(node.value)
//             if(node.right){
//                 traverse(node.right)
//             }
//         }
//         traverse(this.root)
//         return result
//     }

//     //root,left,right
//     dfspreOrder(){

//         let result = []
//         const traverse = node => {
//             result.push(node.value)
//             if(node.left){
//                 traverse(node.left)
//             }
            
//             if(node.right){
//                 traverse(node.right)
//             }
//         }
//         traverse(this.root)
//         return result

//     }
//     //left,right,root
//     dfspostOrder(){
//         let result = []
//         const traverse = node => {
            
//             if(node.left){
//                 traverse(node.left)
//             }
            
//             if(node.right){
//                 traverse(node.right)
//             }
//             result.push(node.value)
//         }
//         traverse(this.root)
//         return result
//     }
//     //Breadth first search - Level by level
//     bfs(){
//         let result = []
//         let queue = []
        
//         queue.push(this.root)
//         while(queue.length){
//             let currentNode = queue.shift()

//             result.push(currentNode.value)

//             if(currentNode.left) queue.push(currentNode.left)
//             if(currentNode.right) queue.push(currentNode.right)
//         }

//         return result;
//     }
// }

// const bst = new BST(15)
// bst.insert(3)
// bst.insert(36)
// bst.insert(2)
// bst.insert(12)
// bst.insert(28)
// bst.insert(39)


// console.log(bst.size());
// console.log(bst)
// console.log(bst.contains(25))

// console.log(bst.dfsInorder())
// console.log(bst.dfspreOrder())
// console.log(bst.dfspostOrder())

// console.log(bst.bfs())



// var merge = function(nums1, m, nums2, n) {
//     // let nums = []
//     //  for(let i=0;i<m;i++){
//     //     if(nums1[i] != 0)
//     //     nums = nums.concat(nums1[i])
//     // }
//     nums1 = nums1.slice(0,m).concat(nums2.slice(0,n)).sort()
//     return nums1
    
// };

// console.log(merge([1,2,3,0,0],3,[2,4,5],3))


// var merge1 = function(nums1, m, nums2, n){
//     let i = m-1; 
//     let j = n-1; 
//     let k = m+n-1
  
//    while(j >= 0){
//     if(i >= 0 && nums1[i] > nums2[j]){
//       nums1[k--] = nums1[i--]
//     }else {
//       nums1[k--] = nums2[j--]
//     }
//   }
//   return nums1
// }

//console.log(merge1([1,2,3,0,0],3,[2,4,5],3))



// let nums = []
//     for(let i=0;i<m;i++){
//         if(nums1[i] != 0)
//         nums = nums.concat(nums1[i])
//     }
//     nums1 = nums;
//     for(let j=0;j<n;j++){
//         if(nums2[j] != 0){
//             nums1 = nums1.concat(nums2[j])
//         }
//     }
//     return nums1.sort()



// var removeElement = function(nums, val) {

//     //nums.sort();
//     console.log(nums)
//     if(nums.includes(val)){
//         let index = nums.indexOf(val)
//         console.log(index)
//         nums.splice(index,1)
//         removeElement(nums,val)
//     }
//     else{
//         return nums.length
//     }
//     console.log(nums.length)
    
//     //else
//         //return nums.length
    

// };


// removeElement([3,2,2,3],3)

// var removeDuplicates = function(nums) {
//     let new_arr = []
//     for(let i=0;i<nums.length;i++){
//         if(!new_arr.includes(nums[i])){
//             new_arr = new_arr.concat(nums[i])
//         }
//     }

//     console.log(new_arr)
    
// };

// removeDuplicates([1,1,2])


//SINGLY LINKED LIST


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null;
//     }
// }


// class SinglyLL{
//     constructor(){
//         this.head = null
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val){
//         let node = new Node(val);
//         if(!this.head){
//             console.log("No head")
//             this.head = node;
//             this.tail = this.head;
            
//         }
//         else{
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.length++;
//         return this;
        
//     }

//     pop(){
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//             this.length--;
//         }
//         if(this.tail && this.length > 1){
//             let pre = this.head
//             let temp = this.head.next
//             while(temp.next != null){
//                 pre = pre.next;
//                 temp = temp.next;
//             }
//             pre.next = null
//             this.tail = pre;
//             this.length--;
            
//             return this;
//         }
//         else{
//             return "No nodes"
//         }
//     }

//     traverse(){
//         let currnode = this.head
//         while(currnode){
//             console.log(currnode.value)
//             currnode = currnode.next;
//         }
//     }

//     shift(){
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//             this.length--;
//         }
//         if(this.head){
//             let currentnode = this.head;
//             this.head = currentnode.next;
//             this.length--
//             return this
//         }
//         else{
//             return undefined
//         }
//     }

//     unshift(val){
//         let newnode = new Node(val)
//         if(!this.head){
//             this.head = newnode;
//             this.head.next = null;
//             this.length++;
//         }
//         else{
//             let currhead = this.head
//             this.head = newnode;
//             this.head.next = currhead;
//             this.length++;
//             return this
//         }
//     }

//     getNode(index){
//         if(index < 0 || index >= this.length){
//             return null
//         }
//         else{
//             if(index === 0 && this.head){
//                 return this.head
//             }
//             else{
//                 let cntr = 0;
            
//                 let foundnode = this.head;
//                 while(foundnode.next!=null){
//                     foundnode = foundnode.next;
//                     cntr++;
//                     if(cntr == index){
//                         return foundnode
//                     }
//                 }
//             }
//         }
//     }

//     set(index,val){
//         let node = this.getNode(index);
//         if(node){
//             node.value = val;
//             return true;
//         }
//         else{
//             return false
//         }
//     }

//     insertAt(index,val){
//         if(index < 0 || index >= this.length){
//             return null
//         }
//         if(index == this.length) this.push(val);
//         if(index === 0) this.unshift(val)
//         let newNode = new Node(val);
//         let foundNode = this.getNode(index-1)
//         newNode.next = foundNode.next
//         foundNode.next = newNode;
//         this.length++
//         return this;
//     }

//     removeAt(index){
//         if(index < 0 || index >= this.length){
//             return null
//         }
//         if(index == this.length) this.pop();
//         if(index === 0) this.shift();
//         let foundNode = this.getNode(index-1);
//         foundNode.next = foundNode.next.next;
//         this.length--;
//         return this;
//     }

//     reverse(){
//         var node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         let prev = null;
//         let next;

//         for(let i=0;i<this.length;i++){
//             next = node.next
//             node.next = prev
//             prev = node;
//             node = next;
//         }

//         return this
//     }
// }

    


// var list = new SinglyLL();
// list.push(34);
// list.push(45)
// list.push(78)
// list.push(90)
// //list.traverse()
// list.insertAt(2,88)
// list.pop();
// list.traverse()
// console.log(list.reverse())



//MAX BINARY HEAP

// class MaxBinaryHeap{
//     constructor(){
//         this.values = [41,23,34,6,7]
//     }
//     insert(value){
//         this.values.push(value)
//         this.bubbleUp();
//     }

//     extractMax(){
//         let max = this.values[0]
//         let lastelem = this.values.pop();
//         if(this.values.length > 0){
//         this.values[0] = lastelem;
//         //Bubble down
//         this.bubbleDown();
//         }
        



//         return max;
//     }


//     bubbleDown(){

//         let idx = 0;
//         let length = this.values.length
//         let element = this.values[0]
//         while(true){
//             let lchildIdx = 2 * idx + 1
//             let rchildIdx = 2 * idx + 2
//             let leftChild , rightChild;
//             let swap = null;

//             if(lchildIdx < length){
//                 let leftChild = this.values[lchildIdx]
//                 if(leftChild > element){
//                     swap = lchildIdx;
//                 }
//             }
//             if(rchildIdx < length){
//                 let rightChild = this.values[rchildIdx]
//                 if((swap === null && rightChild > element) || (swap != null && rightChild > leftChild)){
//                     swap = rchildIdx;
//                 }
//             }


//             if(swap === null) break;
//             this.values[idx] = this.values[swap]
//             this.values[swap] = element
//             idx = swap;
//         }

//     }


//     bubbleUp(){
//         let index = this.values.length - 1;
        
//         while(index > 0){
//             let parentIndex = Math.floor(index-1/2);
//             if(this.values[parentIndex] < this.values[index]){
//                 let temp = this.values[parentIndex];
//                 this.values[parentIndex] = this.values[index];
//                 this.values[index] = temp;
//                 index = parentIndex;
                
//             }
//             else{
//                 break;
//             }
//         }

//     }
// }

// let bh = new MaxBinaryHeap()
// bh.insert(55)
// console.log(bh.values)
// bh.extractMax();
// console.log(bh.values)



//PRIORITY QUEUE

// class PriorityQueue{
//         constructor(){
//             this.values = []
//         }
//         enqueue(value,priority){
//             let newNode = new Node(value,priority)
//             this.values.push(newNode)
//             this.bubbleUp();
//         }
    
//         dequeue(){
//             let min = this.values[0]
//             let lastelem = this.values.pop();
//             if(this.values.length > 0){
//             this.values[0] = lastelem;
//             //Bubble down
//             this.bubbleDown();
//             }
            
    
    
    
//             return min;
//         }
    
    
//         bubbleDown(){
    
//             let idx = 0;
//             let length = this.values.length
//             let element = this.values[0]
//             while(true){
//                 let lchildIdx = 2 * idx + 1
//                 let rchildIdx = 2 * idx + 2
//                 let leftChild , rightChild;
//                 let swap = null;
    
//                 if(lchildIdx < length){
//                     leftChild = this.values[lchildIdx]
//                     if(leftChild.priority < element.priority){
//                         swap = lchildIdx;
//                     }
//                 }
//                 if(rchildIdx < length){
//                     rightChild = this.values[rchildIdx]
//                     if((swap === null && rightChild.priority < element.priority) || (swap != null && rightChild.priority < leftChild.priority)){
//                         swap = rchildIdx;
//                     }
//                 }
    
    
//                 if(swap === null) break;
//                 this.values[idx] = this.values[swap]
//                 this.values[swap] = element
//                 idx = swap;
//             }
    
//         }
    
    
//         bubbleUp(){
//             let index = this.values.length - 1;
            
//             while(index > 0){
//                 let parentIndex = Math.floor(index-1/2);
//                 if(this.values[parentIndex].priority >= this.values[index].priority){
//                     let temp = this.values[parentIndex];
//                     this.values[parentIndex] = this.values[index];
//                     this.values[index] = temp;
//                     index = parentIndex;
                    
//                 }
//                 else{
//                     break;
//                 }
//             }
    
//         }
//     }


// class Node{
//     constructor(value,priority){
//         this.values =  value;
//         this.priority = priority;
//     }
// }


// let pq = new PriorityQueue()
// pq.enqueue("Cold",4);
// pq.enqueue("Wound",1)
// pq.enqueue("high fever",2)
// pq.enqueue("broken arm",3)
// console.log(pq.dequeue())
// console.log(pq.dequeue())



// function maxprofit(prices){
    
//     let profit = 0
//     for(let i=1;i<=prices.length;i++){
//         if(prices[i] > prices[i-1]){
//             profit = profit + (prices[i]-prices[i-1])
//         }
//     }
//     return profit;
   
// }


// console.log(maxprofit([1,2,3,4,5]))

//Rotate array

// function rotateArray(arr,num){
//     let new_arr = []
//     new_array = arr.splice(arr.length-num);
//     new_array = new_array.concat(arr)
//     console.log(new_array)
// }
// rotateArray([1,2,3,4,5,6,7],3)


// var a =10;
// function doneit(){
//     console.log("THIS IS ",a)
//     let a= 50;
// }
// doneit()


// for(var i=0;i<5;i++){
//     setTimeout(() => console.log(i))
// }


// let obj = {
//     a:10,
//     vir: function(){
//         x()
//         console.log(this.a)
//         function x(){
//             console.log(this.a);
//         }
//     }
// }

// obj.vir();


//console.log(4 .toString()) Numerica values dot operator assumes it as a function

// function display1(){
//     console.log("I am a normal function")
// }

// async function display2(){
//     let promise = new Promise(function(myresolve){
//         myresolve("I am an async function")
//     })
//     console.log("I have waited for the promise", promise)
// }

// async function display3(){
//     console.log("I am a async function without a promise")
// }

// display2();
// display1();
// display3();


// var name="xyz";
// function print(){
//     let name="uvs";
//     console.log(name)
//     console.log(this)
// }

// //var name = 'ryt';
// print()
//console.log(name)








// const solution = (numbers) => {
//     // Type your solution here
//      if(numbers.length <= 0) 
//          return 0
//      else
//         return Math.max(...numbers)   
    
    
// };

// console.log(solution([1,2,7,3]))



// function splitarray(arr,size) {
//     return Array.from({length:Math.ceil(arr.length/size)},(_,i) => arr.slice(i*size,i*size+size))
// }

// console.log(splitarray([1,2,3,4,5,6,7],3))


// function strCovertHyphen(str){
    
//   console.log(str.replace(/[_-](.)/g,(_,c) => c.toUpperCase()))
//     //console.log(str.replace('_',str.toUpperCase(str.indexOf('_')+1)))
// }


// strCovertHyphen("Mee_nak-shi")


// function swap(a,b){
//     return [a,b] = [b,a]
// }

// console.log(swap(2,3))


// function countdown(num){
//    return Array.from({length:num},(_,i) => num-i)
// }

// console.log(countdown(10))

// function convertstrtoint(str){
//     return +str === +str ? +str : 0;
// }


// console.log(convertstrtoint("123"))


// function convertdectobinary(num){
//     return num.toString(2)
// }


// console.log(convertdectobinary(10))


// function factorial(n){
//     return n === 0 ? 1 : Array.from({length:n},(_,i) => i+1).reduce((acc,num) => acc * num , 1)
// }


// console.log(factorial(4))


// function randomnum(min,max){
//     return Math.floor(Math.random() * (max-min+1) + min )
// }


// console.log(randomnum(2,4))

// function countoccur(arr){
//     return arr.reduce((acc,num) => (acc[num] = (acc[num] || 0) + 1,acc),{})
// }


// console.log(countoccur([1,3,4,3,2,4]))


// function firstLettertoUpper(str){
//     return str.replace(/\b\w/g,char => char.toUpperCase());
// }


// console.log(firstLettertoUpper("he is a software programmer"))


// function reverseStr(str){
//     return str.split('').reverse().join('');
// }


// console.log(reverseStr("programmer"))

// function longestword(str){
//     console.log(str.split(' ').reduce((longest,word) => word.length > longest.length ? word : longest, ''))
// }

// console.log(longestword("heyy is a rtt"))



