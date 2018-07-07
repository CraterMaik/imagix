var Jimp = require("jimp");

module.exports = function (size, color, _fnt) {

    if (size == 8 && color === 'BLACK') {
        _fnt(Jimp.FONT_SANS_8_BLACK)

    } else if (size == 8 && color === 'WHITE') {
        _fnt(Jimp.FONT_SANS_8_WHITE)

    } else if (size == 16 && color == 'BLACK') {
        _fnt(Jimp.FONT_SANS_16_BLACK)

    } else if (size == 16 && color === 'WHITE') {
        _fnt(Jimp.FONT_SANS_16_WHITE)

    } else if (size == 32 && color === 'BLACK') {
        _fnt(Jimp.FONT_SANS_32_BLACK)

    } else if (size == 32 && color === 'WHITE') {
        _fnt(Jimp.FONT_SANS_32_WHITE)

    } else if (size == 64 && color === 'BLACK') {
        _fnt(Jimp.FONT_SANS_64_BLACK)

    } else if (size == 64 && color === 'WHITE') {
        _fnt(Jimp.FONT_SANS_64_WHITE)

    } else if (size == 128 && color === 'BLACK') {
        _fnt(Jimp.FONT_SANS_128_BLACK)

    } else if (size == 128 && color === 'WHITE') {
        _fnt(Jimp.FONT_SANS_128_WHITE)

    } else {
        throw new RangeError('Invalid font!');

    }

}
