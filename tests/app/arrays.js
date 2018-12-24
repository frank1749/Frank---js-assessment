describe('arrays', () => {
  let a;

  beforeEach(() => {
    a = [1, 2, 3, 4];
  });



  it('you should be able to determine the location of an item in an array', () => {

    var myArrayVals = [1, 2, 3, 4];

    function locationArr(array, value) {
      return array.indexOf(value);
    };

    var resultVals = locationArr(myArrayVals, 4);

    //console.log(resultVals);

  });

  it('you should be able to sum the items of an array', () => {

    function addValue(a, b) {
        return a + b;
    }    
    var sum = [1, 2, 3].reduce(addValue, 0);

    //console.log(sum);

  });

  it('you should be able to remove all instances of a value from an array', () => {
    
    var dataArray = [3, 97, 32, 6, 97, 2, 9, 32, 1, 32, 97, 97, 6, -1, 5];

    function removeItem(array) {
        while(array.length > 0) {
          array.pop();
        }

        return array;
    }    

    var resultArray = removeItem(dataArray);

    //console.log(resultArray);

  });

  it('you should be able to remove all instances of a value from an array, returning the original array', () => {
      
      var valsArray = [5,6,7,8,9];

      function removeWithoutCopy (arr, itemData) {

        var i,
          arrLength = arr.length;
        
        for (i = 0; i < arrLength; i += 1) {
          if (arr[i] === itemData) {
            arr.splice(i, 1);
            i = i - 1;
          }
        }
        return arr;
      }

      var resultData = removeWithoutCopy(valsArray, 1)

      //console.log(resultData);

  });

  it('you should be able to add an item to the end of an array', () => {

    var dataArray=[5,6,7];
    
    function endArray(arr, itemToAdd) {
      arr.push(itemToAdd);
      return arr;
    };

    var resultEnd = endArray(dataArray, 9);

    //console.log(resultEnd);

  });

  it('you should be able to remove the last item of an array', () => {

    function removeLast (array){

      array.splice(-1,1);

      return array;

    }

    var arryData = [1, 2, 3, 4];
    var lastRemoved = removeLast(arryData);    

    //console.log(lastRemoved);

  });

  it('you should be able to add an item to the beginning of an array', () => {

      var dataArrayBegin=[5,6,7];

      function addItemArr(array){
        var theRemovedElement = array.unshift(17);
        return array;
      }

      var resultRemoved = addItemArr(dataArrayBegin);  

      //console.log(resultRemoved);

  });

  it('you should be able to remove the first item of an array', () => {

    var arryList = [1, 2, 3, 4];

    function removedItemArr(array){
      var theRemovedElement = array.shift();
      return array;
    }       

    var resultRemoved = removedItemArr(arryList);

    //console.log(resultRemoved);

  });

  it('you should be able to join together two arrays', () => {
    
    var a = [2,4,6];
    var b = [3,6,9];

    function joinArray (array1, array2){
      var resultArray = array1.concat(array2);
      return resultArray;
    }

    var ArrayJoinData = joinArray(a,b);

    //console.log(ArrayJoinData);

  });

  it('you should be able to add an item anywhere in an array', () => {
    
    var myArray = [3,6,9];

    function addItemPos (array, itemAdd, pos) {
      array.splice(pos, 0, itemAdd);
      return array;
    };

    var returnPosition = addItemPos(myArray, 15, 1);

    //console.log(returnPosition);

  });

  it('you should be able to count the occurences of an item in an array', () => {
    
    function occurencesArray(arr) {
        var a = [], prev;
        
        arr.sort();
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                a.push(arr[i]);
            }
            prev = arr[i];
        }
        
        return [a];
    }

    var array = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
    var dataResult = occurencesArray(array);

    //console.log(dataResult[0].length);

  });

  it('you should be able to find duplicates in an array', () => {

    function dupElements (array){

      var uniq = array
      .map((name) => {
        return {count: 1, name: name}
      })
      .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
      }, {})

      var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);

      return duplicates;

    }

    var names = ['Jose', 'Gina', 'Frank', 'Ana', 'Gina', 'Frank'];
    var resultDup = dupElements(names);

    //console.log(resultDup);

  });

  it('you should be able to square each number in an array', () => {

    function arraySquare (array) {

      array.forEach(function(element, index, array){
          array[index] = element* element;
      });

      return array

    }

    var numbersArray = [1,2,3,4,5,6,7,8];   

    //console.log(numbersArray);

  });

  it('you should be able to find all occurrences of an item in an array', () => {
    
    function occurencesArrayInf(arr) {
        var a = [], prev;
        
        arr.sort();
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                a.push(arr[i]);
            }
            prev = arr[i];
        }
        
        return [a];
    }

    var array = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
    var ocurDataArr = occurencesArrayInf(array);

    //console.log(ocurDataArr);

  });
});
