'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('webpack2-stream-watch');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["server/public/**/*.*", "server/views/**/*.*"],
        browser: "google-chrome",
        port: 7000,
    });
});


gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: '.build/server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});