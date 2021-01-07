// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Implement the MovingAverage class:

// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.

// Example 1:

// Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]

// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

// Constraints:

// 1 <= size <= 1000
// -105 <= val <= 105
// At most 104 calls will be made to next

type MovingAverage struct {
	nums []int
	sum  int
	size int
}

/** Initialize your data structure here. */
func Constructor(size int) MovingAverage {
	return MovingAverage{
		nums: make([]int, 0),
		sum:  0,
		size: size,
	}
}

func (this *MovingAverage) Next(val int) float64 {
	this.nums = append(this.nums, val)
	this.sum += val
	if len(this.nums) > this.size {
		this.sum -= this.nums[0]
		this.nums = this.nums[1:]
	}

	return float64(this.sum) / float64(len(this.nums))
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * obj := Constructor(size);
 * param_1 := obj.Next(val);
 */