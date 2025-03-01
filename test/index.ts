const majorityElement = (nums: number[]): number => {
  let candidate = nums[0], count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};

const a = majorityElement([3, 2, 3]);
if (a !== 3) {
  console.log('test 1 failed');
} else {
  console.log('test 1 success');
}

const b = majorityElement([2, 2, 1, 1, 1, 2, 2]);
if (b !== 2) {
  console.log('test 2 failed');
} else {
  console.log('test 2 success');
}