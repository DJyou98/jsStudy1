function Gcd(a, b) {
    if (a < b) {
        [a, b] = [b, a]
    }
    console.log(a, b)
    return (a % b) === 0 ? b : Gcd(b, a % b);
}

 function multipleGcd(list){
    list.sort(function (a, b) {
        return b - a;
        // 내림차순
    })
    console.log(list)
       var result=Gcd(list[0],list[1])
       for(i=2;i<list.length;i++){
             result= Gcd(result, list[i]) 
       }
       return result
}