describe('flow control', () => {
  it('you should be able to conditionally branch your code', () => {

    function myPromiseFunction() {
        //Change the resolved value to take a different path
        return Promise.resolve(true);
    }

    function conditionalChaining(value) {
        if (value) {
            return doSomething().then(doSomethingMore).then(doEvenSomethingMore);
        } else {
            return doSomeOtherThing().then(doSomethingMore).then(doEvenSomethingMore);
        }
    }

    function doSomething() {
        return Promise.resolve("Message doSomeThing function");
    }

    function doSomeOtherThing() {
        return Promise.resolve("Message doSomeOtherThing function");
    }

    function doSomethingMore(message) {
        return Promise.resolve("Message doSomethingMore function");
    }

    function doEvenSomethingMore(message) {
        return Promise.resolve();
    }

  });
});
