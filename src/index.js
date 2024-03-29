function setItem(key, data, seconds) {
    let exp = null;
    let expires = "";
    if (seconds) {
        exp = new Date();
        exp = new Date(exp.setTime(exp.getTime() + seconds * 1000)).toUTCString();
        expires = ";expires=" + exp;
    }
    let str = JSON.stringify([data])
    document.cookie = key + "=" + escape(str) + expires;
}
function getItem(key) {
    let cookie = document.cookie
    cookie = cookie.split(';').map(function (value) {
        return value.trim()
    }).reduce(function (obj, item) {
        let index = item.indexOf('=');
        obj[item.slice(0, index)] = item.slice(index + 1);
        return obj
    }, {});    
    if (key){
        if(cookie[key]){
            return JSON.parse(unescape(cookie[key]))[0] || '';
        }else{
            return cookie[key]
        }        
    } 
    for(var i in cookie){
        try{
            cookie[i] = JSON.parse(unescape(cookie[i]))
            cookie[i] = cookie[i].constructor == Array ? cookie[i][0] : cookie[i]
        }catch(e){
            console.log(e)
        }        
    }
    return cookie || ''
}
function removeItem(key){
    setItem(key,'',-1)
}
function clear(){
    var data = getItem()
    for(var i in data){
        removeItem(i)
    }
}
export default {
    setItem,
    getItem,
    removeItem,
    clear
}