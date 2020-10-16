const rp=require("request-promise");

function convertir(mBase){
    var options={
        uri:"https://currencyapi.net/api/v1/ "+mBase,
        json:true
    }
    return rp(options);
}
module.exports=convertir;
