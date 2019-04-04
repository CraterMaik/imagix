const Jimp = require("jimp");
const Buffer = require("./ImagixBuffer");
const Write = require("./ImagixWrite");
const Inks = require('./ImagixInks');

class ImagixRead {
    /**
     * @param {string} src - src image. route of an image, or a link.
     * @param {[]} loadFonts - Array of fonts to use.
     * @param {[]} loadImages - Array of images to use.
     */
   constructor(src, loadFonts = [], loadImages = []) {
       if (!src) throw new RangeError('add src image, route of an image, or a link');
       
       /**
         * src main image.
         * @type {string}
         */
       this.src = src;
        
        /**
         * The fonts to use.
         * @type {Array[]}
         */
       this.fonts = loadFonts;

        /**
         * The images to use.
         * @type {Array[]}
         */
       this.images = loadImages;

       
   }

   getWrite(src) {
   	let i = 0;
   	let font_length = this.fonts.length;
   	let img_length = this.images.length;
   	const listFont = this.fonts;

		if (img_length < 1) {
			if (!font_length) throw new RangeError('There must be at least one font or image.');
			Jimp.read(this.src, (err, image) => {
				if (err) return console.log(err);

				this.fonts.forEach(function (fn) {
					Jimp.loadFont(fn.fnt).then(font => {
						image.print(font, fn.pointX, fn.pointY, fn.text, 300);
						i++;
						Write(image, i, font_length, src);

					});
				});
			});

		} else {
			if (font_length < 1) {
				if (!img_length) throw new RangeError('There must be at least one or font.');
				Jimp.read(this.src, (err, image) => {
					if (err) return console.log(err);
					this.images.forEach(function (imgs) {
						Jimp.read(imgs.Isrc, (err, images) => {
							if (err) return console.log(err);

							images.resize(imgs.IresizeX, imgs.IresizeY);
							image.composite(images, imgs.IpointX, imgs.IpointY);
							i++;
							Write(image, i, img_length, src)
						})
					})
				})

			} else {
				Jimp.read(this.src, (err, image) => {
					if (err) return console.log(err);

					this.images.forEach(function (imgs) {
						Jimp.read(imgs.Isrc, (err, images) => {
							if (err) return console.log(err);

							images.resize(imgs.IresizeX, imgs.IresizeY);
							image.composite(images, imgs.IpointX, imgs.IpointY);

							listFont.forEach(function (fn) {
								Jimp.loadFont(fn.fnt).then(font => {
									image.print(font, fn.pointX, fn.pointY, fn.text, 300);
									i++;
									Write(image, i, font_length, src)
								});
							});
						});
					});
				});
			};
		};
   };

   getBuffer(buffer) {
   	let i = 0;
   	let font_length = this.fonts.length;
   	let img_length = this.images.length;
   	const listFont = this.fonts;

		if (img_length < 1) {
			if (!font_length) throw new RangeError('There must be at least one font or image.');
			Jimp.read(this.src, (err, image) => {
				if (err) return console.log(err);

				this.fonts.forEach(function (fn) {
					Jimp.loadFont(fn.fnt).then(font => {
						image.print(font, fn.pointX, fn.pointY, fn.text, 300);
						i++;
						Buffer(image, i, font_length, buffer);

					});
				});
			});
			
		} else {
			if (font_length < 1) {
				if (!img_length) throw new RangeError('There must be at least one or font.');
				Jimp.read(this.src, (err, image) => {
					if (err) return console.log(err);
					
					this.images.forEach(function (imgs) {
						Jimp.read(imgs.Isrc, (err, images) => {
							if (err) return console.log(err);
							
							images.resize(imgs.IresizeX, imgs.IresizeY);
							image.composite(images, imgs.IpointX, imgs.IpointY);
							i++;
							Buffer(image, i, img_length, buffer)
							
						});
					});
				});
			} else {
				Jimp.read(this.src, (err, image) => {
					if (err) return console.log(err);
					
					this.images.forEach(function (imgs) {
						Jimp.read(imgs.Isrc, (err, images) => {
							if (err) return console.log(err);
							
							images.resize(imgs.IresizeX, imgs.IresizeY);
							image.composite(images, imgs.IpointX, imgs.IpointY);
							
							listFont.forEach(function (fn) {

								Jimp.loadFont(fn.fnt).then(font => {
									image.print(font, fn.pointX, fn.pointY, fn.text, 300);
									i++;
									Buffer(image, i, font_length, buffer);

								});
							});
						});
					});
				});
			};
		};

   };

   getInks(buffer) {
   	let i = 0;
   	let font_length = this.fonts.length;
   	let img_length = this.images.length;
   	const listFont = this.fonts;

		if (img_length < 1) {
			Jimp.read(this.src, (err, image) => {
				if (err) return console.log(err);
				
				if (listFont) {
					Inks(image, i, font_length, buffer);
				}

				this.fonts.forEach(function (fn) {
					Jimp.loadFont(fn.fnt).then(font => {
						image.print(font, fn.pointX, fn.pointY, fn.text, 300);
						i++;
						Inks(image, i, font_length, buffer);

					});
				});
			});

		} else {
			if (font_length < 1) {
				if (!img_length) throw new RangeError('There must be at least one or font.');
				Jimp.read(this.src, (err, image) => {
					if (err) return console.log(err);

					this.images.forEach(function (imgs) {
						Jimp.read(imgs.Isrc, (err, images) => {
							if (err) return console.log(err);

							images.resize(imgs.IresizeX, imgs.IresizeY);
							image.composite(images, imgs.IpointX, imgs.IpointY);
							i++;
							Inks(image, i, img_length, buffer);

						})
					})
				})
			} else {
				Jimp.read(this.src, (err, image) => {
					if (err) return console.log(err);

					this.images.forEach(function (imgs) {
						Jimp.read(imgs.Isrc, (err, images) => {
							if (err) return console.log(err);

							images.resize(imgs.IresizeX, imgs.IresizeY);
							image.composite(images, imgs.IpointX, imgs.IpointY);

							listFont.forEach(function (fn) {
								Jimp.loadFont(fn.fnt).then(font => {
									image.print(font, fn.pointX, fn.pointY, fn.text, 300);
									i++;
									Inks(image, i, font_length, buffer);

								});
							});
						});
					});
				});
			};
		};
   };

};

module.exports = ImagixRead;

