let Jimp = require("jimp");
module.exports = function (img, num, cant, buffer) {
  
    if (num === cant) {
        img.getBuffer(Jimp.MIME_PNG, (err, buff) => {
            if (err) {
                return console.log(err);
            } else{
                buffer(buff);
                
            }
            
        });
    } 
}
