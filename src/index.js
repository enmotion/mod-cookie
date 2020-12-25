function setItem(namespace, data, seconds) {
    let exp = null;
    let expires = "";
    if (seconds) {
        exp = new Date();
        exp = new Date(exp.setTime(exp.getTime() + seconds * 1000)).toUTCString();
        expires = ";expires=" + exp;
    }
    let str = JSON.stringify([data])
    document.cookie = namespace + "=" + escape(str) + expires;
}
function getItem(namespace) {
    let cookie = document.cookie
    cookie = cookie.split(';').map(function (value) {
        return value.trim()
    }).reduce(function (obj, item) {
        let index = item.indexOf('=');
        obj[item.slice(0, index)] = item.slice(index + 1);
        return obj
    }, {});    
    if (namespace){
        if(cookie[namespace]){
            return JSON.parse(unescape(cookie[namespace]))[0] || '';
        }else{
            return cookie[namespace]
        }        
    } 
    for(var i in cookie){
        try{
            cookie[i] = JSON.parse(unescape(cookie[i]))
            cookie[i] = cookie[i].constructor == Array ? cookie[i][0] : cookie[i]
        }catch{
            
        }        
    }
    return cookie || ''
}
function removeItem(namespace){
    setItem(namespace,'',-1)
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