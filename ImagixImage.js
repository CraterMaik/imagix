/**
 * Options for a Image
 * @typedef {Object} ImagiOptions
 * @prop {number} [x=10] - Object position in X.
 * @prop {number} [y=10] - Object position in Y.
 * @prop {number} [resize=50] - Define the size of the image.
 */

class ImagixImage {
    /**
     * 
     * @param {string} src - src image.
     * @param {ImagiOptions} options - Options image.
     */
    constructor(src, options = {}){

        /**
         * src Image 
         * @type {string}
         */
        this.Isrc = src;

        /**
         * point X Image
         * @type {number}
         */
        this.IpointX = options.x || 10;

        /**
         * point Y Image
         * @type {number}
         */
        this.IpointY = options.y || 10;

        /**
         * size X Image
         * @type {number}
         */

				this.IresizeX = options.resizeX || 100;
        /**
         * size Y Image
         * @type {number}
         */
				this.IresizeY = options.resizeY || 100;
				

    }

}

module.exports = ImagixImage;