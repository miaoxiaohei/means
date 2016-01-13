var gulp = require('gulp');
var packager = require('electron-packager')
var electronVersion = '0.36.3';
gulp.task('packagAll', function() {
  // 打包
  var opts = {
  	dir:'./src',
  	name:'means',
  	all:true,
  	version:electronVersion,
    overwrite:true,
  };
  console.log(opts);
  packager(opts, function done (err, appPath) {
   });
});

gulp.task('packagOSX-64', function() {
  // 打包
  var opts = {
    dir:'./src',
    name:'means',
    platform:'darwin',
    arch:'x64',
    version:electronVersion,
    overwrite:true,
    icon:"./assess/assets-osx/icon.icns",
    out:'./dist',
  };
  console.log(opts);
  packager(opts, function done (err, appPath) {
   });
});

gulp.task('packagWin32-64', function() {
  // 打包
  var opts = {
    dir:'./src',
    name:'means',
    platform:'win32',
    arch:'x64',
    version:electronVersion,
    overwrite:true,

  };
  console.log(opts);
  packager(opts, function done (err, appPath) {
   });
});
