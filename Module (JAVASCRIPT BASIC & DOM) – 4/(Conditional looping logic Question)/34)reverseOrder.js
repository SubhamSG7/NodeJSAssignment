function reverseOrder(num){
    let revnum="";
    for(i=0;i<num;i++){
        revnum+=num%10;
        num=parseInt(num/10);
    }
    console.log(revnum);
}

let num=64728;
reverseOrder(num);