var fs = require('fs');

class Renderer{
    constructor(font){
        var fontData = fs.readFileSync(font, 'utf8').split("\n");
        var header = fontData.splice(0, 1)[0].split(" ");
        var regexPattern = new RegExp("^.*[@#$]$");

        this.fontHeight = parseInt(header[1]);
        this.fontArray = [];
        
        var chr = "";
        for (var i = 0; i < fontData.length; i++) {
            if (regexPattern.test(fontData[i])) {
                // Remove last two characters
                console.log(fontData[i].slice(0, -1));
                chr += fontData[i].slice(0, -1)+"\n";
            }
            if (i%this.fontHeight == 0) {
                this.fontArray.push(chr);
                chr = "";
            }
        }
        // for (var i = 0; i < this.fontArray.length; i++) {
        //     console.log(this.fontArray[i], "-------------------");
        // }
    }
}
engine = new Renderer('../font/poison.flf');
