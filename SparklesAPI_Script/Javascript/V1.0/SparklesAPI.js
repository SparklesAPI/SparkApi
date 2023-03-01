/*

require(path/SparklesAPI.js)

SparklesAPI.

*/
const sparklesapi = {};
var data = {};
var getDATA = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};
sparklesapi.init = async () => {
    getDATA('https://sparklesapi.github.io/API/DATA.json', function (status, response) {
        if (status === 200) {
            data = response;
        } else {
            console.log('An unexpected error has occurred when getting data from Sparkles API');
        }
    });
}
sparklesapi.test = () => {
    return true;
}
module.exports = sparklesapi;