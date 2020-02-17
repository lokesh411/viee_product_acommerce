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
console.log(dataString)
$(document).ready(function () {
    $("#prodimg").attr({
        src:data.image,
        alt:data.image
    });
    $("#title").text(data.title);
    $("#price").text(data.price);
    $("#desc").text(data.description);

})

