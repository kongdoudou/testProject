function fn(a,b,c){
    var l = arguments.length;
    var num = 0;
    for (var i = 0; i < l; i++) {
        num += arguments[i];
        
    }
    alert(num);
}
fn(1,2,3,4);