function binarySearch(list, element) { 
    let lowindex = 0;  
    //let midindex = 0;
    let highindex = list.length - 1;

    while (lowindex <= highindex) { 
    let midindex = Math.floor((lowindex + highindex) / 2); //Calculate the middle index of it's range
      if (list[midindex] === element) { //checks if middle index is equal to element
        return midindex;
      }
      if (list[midindex] < element) {  // If middle index is less then element, it updates low index
        lowindex = midindex + 1;
      } 
      else {
        highindex = midindex - 1;  // If middle index is greater, than it updates high index
      }
    }
    return -1;
  }

  //Tested using the example
  //console.log(binarySearch([1,2,3,4,5,6,7],6));

/*
Sources Used: 
Got Help from TA regarding the logic and he guided me a bit.
Took some suggestions and discussed with Ziyu Wang, one of the classmate.
Got an idea from https://www.geeksforgeeks.org/binary-search-in-javascript/
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array
https://en.wikipedia.org/wiki/Binary_search_algorithm
*/
