import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
	notify: notify,
	plumber: plumber,
	browserSync: browserSync,
	newer: newer,
	if: ifPlugin,
};
