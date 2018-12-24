describe('strings', () => {
  it('you should be able to reduce duplicate characters to a desired minimum', () => {

    var dataString = 'aaxxxaabbbb';

    function reduceString (myString, amount) {
        var finalString = '', cL = '', counter;
        myString.split('').forEach(function(i){
            if (i !== cL) counter = 0;
            counter++;
            cL = i;
            if (counter <= amount ) finalString = finalString + i;
        });
        return finalString;
    }

    var resultString = reduceString(dataString, 1);

    //console.log(resultString);

  });

  it('you should be able to reverse a string', () => {   

    function myRevString(myString) {
        return myString.split("").reverse().join("");
    }

    var dataString = myRevString("hello");

    //console.log(dataString);

  });
});
