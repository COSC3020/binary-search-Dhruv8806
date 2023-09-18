const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        arr.sort(function(a, b) { return a - b; });
        if(arr.length > 0) {
            return binarySearch(arr, arr[0]) === 0 || arr[0]== arr[binarySearch(arr,arr[0])]  ;
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);

//Sources used :
//https://flexiple.com/javascript/find-duplicates-javascript-array
//https://www.geeksforgeeks.org/how-to-handle-duplicates-in-binary-search-tree/
