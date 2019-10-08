 const Gcd= function Gcd(a,b){
        if(a<b){
          [a,b]=[b,a]
        }
        console.log(a,b)
       return (a% b) === 0 ? b: Gcd(b, a % b);
}
exports.Gcd = Gcd

