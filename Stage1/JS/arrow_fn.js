let modify = (array) => {
    return array.map(x => ((isPrime(x) == true) ? x+1 : x*2));
}
function isPrime(num){
    if (num==1 || num==2 | num==3){
        return true;
    }
    // console.log(num);
    for (i=2;i<num;i++){
        // console.log(i)
        if (num%i === 0){
            return false;
        }
    }
    return num > 1;
}

module.exports = modify;

console.log(modify([27]));