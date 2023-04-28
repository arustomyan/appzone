export const copy = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files));
};

export const copyfavicon = () => {
  return app.gulp
    .src(app.path.src.favicon)
    .pipe(app.gulp.dest(app.path.build.favicon));
};

export const copyBX = () => {
  return app.gulp.src(app.path.src.BX).pipe(app.gulp.dest(app.path.build.BX));
};

export const copyJS_sliders = () => {
  return app.gulp
    .src(app.path.src.jsSlider)
    .pipe(app.gulp.dest(app.path.build.js));
};
