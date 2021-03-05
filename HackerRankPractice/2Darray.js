function hourglassSum(arr) {
    //h will stop at end of the array
    let h=0; let l=0; let rows=0; let col=0;
    let i=0; let j=0; var arrarySum = [];
    let sumHourGlass=0;
    while(h<4){
        while(l<4){
            while(rows<3){
                while(col<3){
                    if(arr[rows+h][col+l]>=-9 && arr[rows+h][col+l]<=9) {
                        //sumHourGlass += arr[rows+h][col+l];
                        //console.log(arr[rows+h][col+l]);
                    }
                    col++; j=col;
                }
                col=0;
                rows++;
                i=rows;
            }
            console.log("row= "+(rows+h)+" col= "+(3+l) );
            rows=0;
            //subtract two points from sum, put into array
            //console.log("first: "+arr[i-2-h][h] + "second: "+arr[i-2-h][j-1]);
            //sumHourGlass -= (arr[i-2-h][h]+arr[i-2-h][j-1]);
            
            //arrarySum.push(sumHourGlass);
            //console.log("push");
            sumHourGlass += 1;
            l++;
        }
        l=0;
        h++;
    }
    console.log(sumHourGlass);

}

let arr = [ [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0], 
            [1, 1, 1, 0, 0, 0], 
            [0, 0, 2, 4, 4, 0], 
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0 ] ];

hourglassSum(arr);