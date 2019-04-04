const { ImagixRead, ImagixFont, ImagixImage} = require('../src/index');


let bgprofile = './img/red.png';

let textName = new ImagixFont('JavaScript Icon', 10, 50, {
    size: 32,
    color: 'WHITE'
});

let icon = new ImagixImage('./img/js-icon.png', {
    x: 10,
    y: 100,
		resizeX: 200,
		resizeY: 190
});

const profile = new ImagixRead(bgprofile, [textName], [icon]);

profile.getWrite('./img/newProfile.png');
