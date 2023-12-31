// Импорт gulp
import gulp from 'gulp';
// Импорт путей к папкам
import { path } from './gulp/config/path.js';
// Импорт плагинов
import { plugins } from './gulp/config/plugins.js';

// Глобальные переменные
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	gulp: gulp,
	path: path,
	plugins: plugins,
};

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otf2ttf, ttf2woff, fontsStyle } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
// Наблюдатель
function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// Задачи со шрифтами
const fonts = gulp.series(otf2ttf, ttf2woff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, images, js));

// Выполнение задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);

export { dev };
export { build };
export { deployZip };

gulp.task('default', dev);
