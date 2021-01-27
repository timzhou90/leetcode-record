/*
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
 

Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.
 */

var calculate = function(s) {
    let stack = [], n = 0, sign = '+' // stack存数字, sign存上一个符号
    for (let i = 0; i <= s.length; i++) {
        if (s[i] === ' ') continue
        if (s[i] <= '9' && s[i] >= '0') {
            n = n * 10 + parseInt(s[i])
            continue
        } 
        switch(sign) {
            case '+': stack.push(n); break
            case '-': stack.push(-n); break
            case '*': stack.push(stack.pop()*n); break
            case '/': stack.push(~~(stack.pop()/n)); break
        }
        sign = s[i]
        n = 0
    }
    return stack.reduce((acc, curr) => acc + curr, 0)
};