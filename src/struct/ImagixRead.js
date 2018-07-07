var Jimp = require("jimp");
var Buffer = require("./ImagixBuffer");

class ImagixRead {
    /**
     * @param {string} src - src image. route of an image, or a link.
     * @param {Symbol[]} loadFonts - Array of fonts to use.
     * @param {Symbol[]} loadImages - Array of images to use.
     */
   constructor(src, loadFonts = [], loadImages = []) {
       if (!src) throw new RangeError('add src image, route of an image, or a link');
       if (!loadFonts.length) throw new RangeError('There must be at least one font.');
       /**
         * src main image.
         * @type {string}
         */
       this.src = src;
        
        /**
         * The fonts to use.
         * @type {Symbol[]}
         */
       this.fonts = loadFonts;

        /**
         * The images to use.
         * @type {Symbol[]}
         */
       this.images = loadImages;

       
   }
   getBuffer(buffer) {
    var i = 0;
    var font_length = this.fonts.length;
    var img_length = this.images.length;
    const listFont = this.fonts;

    if (img_length < 1) {
        Jimp.read(this.src, (err, image) => {
            if (err) return console.log(err);

            this.fonts.forEach(function (fn) {
                Jimp.loadFont(fn.fnt).then(font => {
                    image.print(font, fn.pointX, fn.pointY, fn.text, 300);
                    i++;
                    Buffer(image, i, font_length, buffer);

                });

            })

        });

    } else{
        Jimp.read(this.src, (err, image) => {
            if (err) return console.log(err);
            this.images.forEach(function(imgs){
               
                Jimp.read(imgs.Isrc, (err, images) =>{
                    if (err) return console.log(err);
                    images.resize(imgs.Iresize, imgs.Iresize);
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


module.exports = ImagixRead;


