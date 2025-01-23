function sum_to_n_b(n : number) : number{
    return n*(n+1)/2
}

const sumCache : {[key: number]: number} =  {};
function sum_to_n_a(n: number) {
    if (!(n in sumCache)) {
        sumCache[n] = (n * (n + 1)) / 2;
    }
    return sumCache[n];
}

function sum_to_n_c(n: number) : number {
    return (n*(n+1)) >> 1;
}

console.log(sum_to_n_a(5))
console.log(sum_to_n_b(5))
console.log(sum_to_n_c(5))