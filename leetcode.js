//Merge 2 sorted array

function merge2array(nums1,m,nums2,n){
   let i = m-1;//2
   let j = n-1;//2
   let k = m+n -1; //5
   while(j>=0){
    if(i >= 0 && nums1[i] > nums2[j]){
        nums1[k--] = nums1[i--]
    }
    else{
        nums1[k--] = nums2[j--]
    }
    //console.log(nums1)
   }
   return nums1
}


console.log(merge2array([1,2,3,0,0,0],3,[2,5,6],3))
console.log("-------------------------------------------------------------")

//Longest common prefix

function longestcommonprefix(str){
    let longestprefix="";
    let minimumlength = str[0].length
    for(let i=1;i<str.length;i++){
        minimumlength = Math.min(minimumlength,str[i].length)
    }
    for(let i=0;i<minimumlength;i++){
        let current = str[0].at(i);
        for(let j=1;j<str.length;j++){
            if(current != str[j].at(i)){
                return longestprefix
            }
            
        }
        longestprefix += current;
    }
    return longestprefix
}

console.log(longestcommonprefix(["flow","flowers","flosh"]))