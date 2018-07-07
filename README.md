# Imagix

> Imagix is ​​a framework for jimp to manipulate images in a simpler and cleaner way.



## Installation

```
$ npm install --save imagix
```


## Example usage
```js
// references the classes to use
const { ImagixRead, ImagixFont, ImagixImage } = require('imagix');


// create a new font to print, use the ImagixFont class
var text1 = new ImagixFont('text to print', 20, 100,
                // text a print, point in X, point in Y       
    {
    //Options for a font
        size: 32, // size of the font
        color: 'WHITE' // color of the font 

    });

// create a new image to print, use the ImagixImage class
var img1 = new ImagixImage('avatar.png', {
    //Options for a image
        x: 15,   // point in X
        y: 45,   // point in Y
        resize: 130  //define the size of the image.
    });


/* 
The ImagixRead class takes the fonts and images in arrays 
and returns the getBuffer method. 

*/

const image = new ImagixRead('image-bg.png', [text1], [img1]);
// image to manipulation image-bg.png
// if you have more than one font "[text1, text2, text3]" or images "[img1, img2]"


//print image manipulation
image.getBuffer(buff => {
        console.log(buff);
        
    });


```

## OPTIONS A FONT
```js
//Available options

size:
 "8"    //Open Sans, 8px
 "16"   //Open Sans, 16px
 "32"   //Open Sans, 32px
 "64"   //Open Sans, 64px
 "128"  //Open Sans, 128px

color: 
"BLACK" //Open Sans, Black
"WHITE" //Open Sans, White

```

## SUMMARIZED EXAMPLE
```js
const { ImagixRead, ImagixFont, ImagixImage } = require('imagix');

var nick = new ImagixFont('Nickname', 20, 100     
    {
        size: 32, 
        color: 'WHITE'
    });

var info = new ImagixFont('name@gmail.com', 20, 300
    {
        size: 16, 
        color: 'BLACK'
    });

var avatar = new ImagixImage('www.example.com/asset/avatar.png', {
        x: 15,
        y: 45,
        resize: 250
    });

const image = new ImagixRead('bg-profile-1.png', [nick, info], [avatar]);

image.getBuffer(buff => {
    console.log(buff);

});


```
