// Minimo comun divisor
function mcd(n1:number, n2:number, div:number = 1) {
    console.log(`n1: ${n1} n2: ${n2} div: ${div}`);

    if (n1 == 1 && n2 == 1) {
        return div;
    }
    
    if (n1 % div == 0 && n2 % div == 0) {

        return div * mcd(n1/2, n2/2, div+=1);

    } else if (n1 % div != 0 && n2 % div == 0) {

        return div * mcd(n1,n2/2, div+=1);
    } else if (n1 % div == 0 && n2 % div != 0) {
        
        return div * mcd(n1/2,n2, div+=1);
        
    } else {
        
        return div * mcd(n1,n2, div+=1);
    }
}

mcd(8,8);