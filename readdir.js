//Make it Modular
module.exports = function(inputPath, extension, callback) {

    var fs = require('fs')
    var path = require('path')
    var outputArray = new Array
    fs.readdir(inputPath, function (err, list) {
        if (err)
            return callback(err)
        list.forEach(function(file) {
            if(path.extname(file)==='.'+extension)
                outputArray.push(file)
        })
        callback(null, outputArray)

    })
}
