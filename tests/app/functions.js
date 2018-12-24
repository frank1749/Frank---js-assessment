describe('functions', () => {
  let sayItCalled = false;
  const sayIt = (greeting, name, punctuation) => {
    sayItCalled = true;
    return `${greeting}, ${name}${punctuation || '!'}`;
  };

  beforeEach(() => {
    sayItCalled = false;
  });

  it('you should be able to use an array as arguments when calling a function', () => {
    
    var dataFunction = function() {
      //console.log(arguments);
    };

    var arrayVals = [1,2,3];

    dataFunction.apply(null, arrayVals);

  });

  it('you should be able to return a function from a function', () => {

    function sumValue(a){
      var b = a + a;
      return b;
    }

    function multiSumValue(){
      c = sumValue(2) * 2;
      return c;
    }

    var result = multiSumValue();

    //console.log(result);

  });
});
