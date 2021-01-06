/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 *  */
/**
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/

var countCharacters = function(words, chars) {
    const initalList = {}
    const charsLen = chars.length;
    const wordsLen = words.length;
    let res = 0;
    for(let i = 0; i<charsLen; i++){
        if(chars[i] in initalList){
            initalList[chars[i]]++
        }else{
            initalList[chars[i]] = 1
        }
    }    
    
    for(let i = 0 ; i<wordsLen; i++){
        const list = {...initalList }
        const curr = words[i]
        let check = true;
        for(let a = 0; a <curr.length && check === true; a++){
            if(curr[a] in list){
                if(list[curr[a]] >0){
                    list[curr[a]]--;
                }else{
                    check = false
                }
            }else{
                check = false
            }
        }
        if(check){
            res+= curr.length
        } 
    }
    
    return res
};