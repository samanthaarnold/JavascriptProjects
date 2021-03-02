var reverse = function(x) {
    var string ="";
    let s=x.toString();
    var flag = false;
    console.log(s.length);
    if(s.length == 1){
        console.log(x);
    } else if(s.length > 1) {
        if(s[0]=='-'){
            string+=s[0];
            s = s.slice(1);
        } 
        
        //reverse order
        var ch; let i=0;
        while(i<s.length) {
            ch = s.charAt(s.length-1);
            console.log(ch);
            console.log("before: "+ s);
            s = s.replace(s[i],ch);
            //s = ch.concat(s);
            //s = s.slice(0,-1);
            console.log("after: " + s);
            //arr.splice(i,0,ch);
            i++;
        }
        //string += arr.join('');
    }
    console.log(string);
};

var s = -123;

var test = new reverse(s);
