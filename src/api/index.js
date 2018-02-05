import "whatwg-fetch";
import "es6-promise";

export function get(url){
    return fetch(url,{
        headers:{
            accept:"application/json"
        },
        method:"get"
    }).then(res=>{
        //res.json()返回的依旧是promise对象
        return res.json();
    })
}