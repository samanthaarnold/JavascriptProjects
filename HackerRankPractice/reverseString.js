var reverseString = function(s) {
    let size = s.length;
    console.log(size);
    var ch;
    let i=0;
    while(i<size) {
        ch =s.pop();
        s.splice(i,0,ch);
        i++;
    }
    console.log(s);
};

var s = ["h","e","l","l","o"];

var test = new reverseString(s);