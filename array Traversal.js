const nums = [2345,46,23,37,5,8]

for(let i=0; i<nums.length; i++){
    console.log(nums[i]**2);

}
console.log('-------------');
for(let i of nums){
    console.log(i**2);
}