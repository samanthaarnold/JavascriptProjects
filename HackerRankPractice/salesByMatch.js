function sockMerchant(n, ar) {
    var res = 0;
    ar.sort();
    for(let i=0; i<n;i++){
        if(ar[i] == ar[i+1]){
            i++;
                  res++;
           }
    }
    //console.log(res);
    return res;
}

// 10 10 10 10 20 20 20 30 50 

var num= 9;
var arg = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var test = new sockMerchant(num,arg);

