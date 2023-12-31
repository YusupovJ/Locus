export const server = (done) => {
	app.plugins.browserSync.init({
		notify: false,
		port: 3000,
		server: {
			baseDir: `${app.path.build.html}`,
		},
	});
};
