const { ImagixRead, ImagixFont, ImagixImage} = require('../src/index');


let bgprofile = './img/red.png';

let TextName = new ImagixFont('Hello World', 10, 50, {
    size: 32,
    color: 'WHITE'

});

let icon = new ImagixImage('./img/js-icon.png', {
    x: 50,
    y: 10,
    resize: 10
});

const profile = new ImagixRead(bgprofile, [TextName], [icon]);

profile.getBuffer(image => {
    console.log(image);
    
});
