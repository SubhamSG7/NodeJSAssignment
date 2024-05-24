function fabonacci(n){
    if(n>0){
        let a=0;
        let b=1;
        let nextnum=0;
        for(i=0;i<n;i++){
            console.log(a);
            nextnum=a+b;
            a=b;
            b=nextnum;
        }
        
    }
}
const num = 5;
fabonacci(num)