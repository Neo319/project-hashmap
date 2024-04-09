
// error-checking: use whenever accessing a bucket through an index
// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }


class HashMap {
    constructor () {
        this.buckets = [];
    }

    hash(key) { //takes a given key and returns the corresponding hash
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 16
        }
        
        return hashCode;
    } 

    set (key, value) { //assigns a given value to a given key, overwriting if key already exists.
        const index = this.hash(key) // code used to access bucket


        if (!this.buckets[index]) { // if this index does not exist, create a bucket for this key
            console.log("making new bucket index = " + index)

            //new node has its key as the index or hashcode of the given key,
            //its value as the given value to be stored, 
            //and its 'next' pointer as null to start with.
            this.buckets[index] = new Node(index, value, null)

        } else { //this bucket already exists
            console.log("bucket found of index = " + index)
            this.buckets[index].next = new Node (index, value, null)
        }
        // later: add growth to buckets array when needed? 
    }


}

class Node {
    constructor (key, data, next) {
        this.key = key;
        this.data = data;
        this.next = next;
    }
}

const myHashMap = new HashMap;


console.log(myHashMap.hash("Benjamin"));
console.log(myHashMap.hash("Gill"))
console.log(myHashMap.hash("Tre"))
console.log(myHashMap.hash("Seath"))
console.log(myHashMap.hash("Ero"))

myHashMap.set("Gill", "I am a Panda!")
myHashMap.set("Benjamin", "I am a cheetah!")
myHashMap.set("Tre", "I am an otter!")
myHashMap.set("Seath", "I am a dragon RAWR")
myHashMap.set("Ero", "I am a hamster!")
