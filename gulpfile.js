var gulp = require('gulp');
var packager = require('electron-packager');
var appdmg = require('gulp-appdmg');
var shelljs = require('shelljs');
var electronVersion = '0.36.3';
var packagBuildOutDir = './build';
var packagDistOutDir = './dist';

gulp.task('build:osx-64', function() {
  // 打包
  var opts = {
    dir:'./src',
    name:'means',
    platform:'darwin',
    arch:'x64',
    version:electronVersion,
    overwrite:true,
    icon:"./assets/osx/icon.icns",
    out:packagBuildOutDir,
  };
  console.log(opts);
  packager(opts, function done (err, appPath) {
          console.log(appPath);

   });
});

gulp.task('build:win32-64', function() {
  // 打包
  var opts = {
    dir:'./src',
    name:'means',
    platform:'win32',
    arch:'x64',
    version:electronVersion,
    // icon:"./assets/windows/icon.ico",
    overwrite:true,
    out:packagBuildOutDir,
  };
  console.log(opts);
  packager(opts, function done (err, appPath) {
      console.log(appPath);

   });
});

gulp.task('dist:osx-64', function() {
  // 打包
  return  gulp.src([])
    .pipe(appdmg({
      source: './assets/osx/dmg.json',
      target: packagDistOutDir+'/means.dmg'
    }));
});

gulp.task('dist:win32-64', function() {
  // 打包
     shelljs.exec('makensis ./assets/windows/installer.nsi');

});
