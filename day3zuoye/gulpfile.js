var gulp=require("gulp");
var minify=require('gulp-clean-css');//压缩css文件
// var connect=require("gulp-connect");//启动服务
// var watch=require("gulp-watch");//检测文件
var imagemin = require('gulp-imagemin');//压缩images
var htmlmin = require('gulp-htmlmin');//压缩html
var rename=require("gulp-rename");
//压缩图片
gulp.task('minifyImg',function(){
	gulp.src('images/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('./images'));
});
gulp.task("default",["minifyImg"])

//压缩css文件
	// gulp.task('clean',function(){
	// 	gulp.src('css/*.css')
	// 		.pipe(minify())
	// 		.pipe(gulp.dest('./css'));
	// });
	// gulp.task("default",["clean"])

//压缩html

// gulp.task('TestHtmlmin',function(){

// 	var options = {
//         removeComments: true,//清除HTML注释
//         collapseWhitespace: true,//压缩HTML
//         collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//         removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//         removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//         removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//         minifyJS: true,//压缩页面JS
//         minifyCSS: true//压缩页面CSS
// 	}

// 	gulp.src('index.html')
// 		.pipe(htmlmin(options))
// 		.pipe(rename("index2.html"))
// 		.pipe(gulp.dest('./'));
// });
//  gulp.task("default",["TestHtmlmin"])

