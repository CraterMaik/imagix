var TypeFonts = require("./ImagixTypefont")
/**
 * Options for a loadFont
 * @typedef {Object} FontOptions
 * @prop {number} [size=32] - Define the size of the font.
 * @prop {string} [color='BLACK'] - Define the color of the font.
 */


class ImagixFont {
    /**
     * @param {string} text - A unique text for the printFont.
     * @param {number} x - Position in X for the printFont.
     * @param {number} y - Position in Y for the printFont.
     * @param {FontOptions} options - Options for the loadFont.
     */
    constructor(text, x, y, options = {}){
        /**
         * unique text for the Font.
         * @type {string}
         */
        this.text = text;

        /** 
         * Position in X for the Font.
         * @type {number}
         */
        this.pointX = x || 10;

        /** 
         * Position in Y for the Font.
         * @type {number}
         */
        this.pointY = y || 10;

        /** 
         * Size of the font.
         * @type {number}
         */
        this.size = options.size || 16;

        /**
         * Color of the font.
         * @type {string}
         */
        this.color = options.color || 'BLACK';
        

        var fnt;
        TypeFonts(this.size, this.color, (tf) =>{
            fnt = tf;
        })

        /**
         * @type {string}
         */
        this.fnt = fnt;
    }
   
}

module.exports = ImagixFont;

