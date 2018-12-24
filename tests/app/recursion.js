describe('recursion', () => {
  const fileData = {
    dirName: 'app',
    files: ['index.html'],
    subDirs: [
      {
        dirName: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
        ],
        subDirs: [
          {
            dirName: 'vendor',
            files: [
              'jquery.js',
              'underscore.js',
            ],
            subDirs: [],
          },
        ],
      },
      {
        dirName: 'css',
        files: [
          'reset.css',
          'main.css',
        ],
        subDirs: [],
      },
    ],
  };

  it('you should be able to return a list of files from the data', () => {

    var files_result = {
      nameFiles : []
    };

    var key = 0;

    for (const prop in fileData.subDirs) {

        files_result.nameFiles[key] = fileData.subDirs[prop]['files'];

        key++;
    }

    //console.log(files_result.nameFiles);

  });

  it('you should be able to return a list of files in a subdir', () => {
    
    var files_result = {
      nameFiles : []
    };

    var key = 0;

    for (const prop in fileData.subDirs) {

        files_result.nameFiles[key] = fileData.subDirs[prop]['subDirs'];

        key++;
    }

    //console.log(files_result.nameFiles[0][0].files);

  });

  it('you should be able to return the nth number in a fibonacci sequence', () => {
    
      function fibonacciCalc(num) {
        if (num <= 1) return 1;

        return fibonacciCalc(num - 1) + fibonacciCalc(num - 2);
      }

      var res = fibonacciCalc(11);

      //console.log(res);

  });
});
