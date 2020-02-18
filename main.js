const getQueryParams = (params, url) => {

    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
};


let dataString = getQueryParams('data', window.location);
let str = decodeURIComponent(dataString)
let data = JSON.parse(str)
console.log(data.description)
$(document).ready(function () {
    $("#prodimg").attr({
        src:data.image,
        alt:data.image
    });
    $("#title").html(data.title.replace(/\+/g, ' '));
    $("#price").html(data.price.replace(/\+/g, ' '));
    $("#desc").html(data.description.replace(/\+/g, ' '));
    document.getElementById('title').style.fontWeight = '600'

})
