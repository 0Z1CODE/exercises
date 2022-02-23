//binary search

let arr = [-3, 0, 1, 3, 4],
  k = 5;

{
  function twoSum (nums, k) {
    for (let idx = 0; idx <= nums.length; idx++) {
      
      let numToFind = k - nums[idx];
      let leftArea = idx + 1,
        rightArea = nums.length - 1;
      while (leftArea < rightArea) {
        let middle = leftArea + ((rightArea - leftArea) / 2);
        if (nums[middle] === numToFind) {
          return [nums[idx], nums[middle]];
        }
        if (numToFind < nums[middle]) {
          rightArea = middle--;
        } else {
          leftArea = middle++;
        }
      }
    }
    return [];
  };
  console.log(twoSum(arr, k));
}


// 2 pointer 

{
  function twoSum (nums, k) {
    let leftElement = 0, rightElement = nums.length - 1;
    while (leftElement < rightElement) {
      let pointerSum = nums[leftElement] + nums[rightElement];
      if(pointerSum == k ) {
        return [nums[leftElement], nums[rightElement]]
      } 
      if(pointerSum < k) {
        leftElement++
      } else {
        rightElement--
      }
    }
    return []
  }
  
  
  console.log(twoSum(arr, k));
  
}