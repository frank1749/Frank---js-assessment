describe('logical operators', () => {
  it('you should be able to work with logical or', () => {
   
    var hour = 13;
    var itsTime = true;

    if (hour < 10 || hour > 18 || itsTime) {
      //console.log(hour); // It's time
    }

  });

  it('you should be able to work with logical and', () => {
    
    var hour = 18;
    var itsTime = true;

    if (hour < 20 && hour == 18 && itsTime) {
      //console.log(hour); // It's time
    }

  });
});
