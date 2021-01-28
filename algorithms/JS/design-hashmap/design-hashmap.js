/*
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
*/
/**
 * Initialize your data structure here.
 */
const MyHashMap = function() {
    this.storage = [];  
  };
  
  MyHashMap.prototype.hash = function(key) {
    return key;
  }
  
  MyHashMap.prototype.put = function(key, value) {
    const address = this.hash(key);
    this.storage[address] = value;
    return;
  };
  
  MyHashMap.prototype.get = function(key) {
    const address = this.hash(key);
    if (this.storage[address] >= 0) {
      return this.storage[address];
    }  
    return -1;
  };
  
  MyHashMap.prototype.remove = function(key) {
    const address = this.hash(key);
    delete this.storage[address];
    return;
  };
  
  /** 
   * Your MyHashMap object will be instantiated and called as such:
   * var obj = new MyHashMap()
   * obj.put(key,value)
   * var param_2 = obj.get(key)
   * obj.remove(key)
   */