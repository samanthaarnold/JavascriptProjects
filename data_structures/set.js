/* Sets */

// functions: has, values, add, remove, size, union, intersection, difference, subset

function mySet() {
    // the var collection will hold the set
    var collection = [];

    // checks to see if an element is in the array and returns true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    // returns all the values in the set
    this.values = function() {
        return collection;
    };

    // adds element to set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    // removes element from set
    this.remove = function(element) {
        if( this.has(element) ) {
            index = collection.indexOf(element);
            collection.slice(index,1);
            return true;
        }
        return false;
    };

    // returns size of the collection
    this.size = function() {
        return collection.length;
    };

    //returns the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = this.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    // returns the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if( otherSet.has(e) ) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    // returns the difference of two sets as a new set
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if( !otherSet.has(e) ){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // test to see if the set is a subset of a different set
    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {  //testing if all elements of firstSet are in otherSet
            return otherSet.has(value);
        });
    };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());