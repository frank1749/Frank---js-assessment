describe('async behavior', () => {
  it('you should understand how to use promises to handle asynchronicity', (done) => {

      async function myFunc() {
        return true;
      }

      myFunc().then(setTimeout(done, 300));

  });

  it('you should be able to retrieve data from the server and return a sorted array of names', (done) => {
    const url = '/data/testdata.json';

    var dataResJson = $.getJSON(url, function( data ) {
      var items = [];

      $.each( data, function( key, val ) {
        items.push( val );
      });

      var namesList = {
            names : []
      };

      var key = 0;
      for (const prop in items) {

          namesList.names[key] = items[prop][key].names;

          key++;
      }
      
      //console.log(items[0]);

      return items[0];     

    });

    dataResJson.then(setTimeout(done, 300));

  });
});
