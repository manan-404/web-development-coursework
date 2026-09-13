function sum(a){
    var tSum = 0;
    for(var i=0; i<a.length; i++){
        tSum = tSum + a[i];
    }
    return tSum;
}

const a = [1,2,3,4,5];
console.log("The sum of array is: ", sum(a));
console.log("The total sum of array elements is: ", sum2(a));

function sum2(array){
    var totalSum = 0;
    for(var num of array){
        totalSum += num;
    }
    return totalSum;
}