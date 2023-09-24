function f(x:number):number {
    
    if (x > 100) {
        console.log(x);
        return x - 10;
    } else {
        console.log(x);
        return( f( f(x+11) ) );
    }
}
console.log(f(91));