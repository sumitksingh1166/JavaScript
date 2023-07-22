console.log('Hello Javascript');
num = 35;
console.log(num)
message = "Nice";
console.log(message);
console.log(typeof num);
console.log(typeof message);

age = 30;
if(age >= 18){
    console.log('Eligible for DL');
    a = 'nice'
    b = 'this should be local'
}
else{
    console.log('Not eligible for DL')
}
console.log(a); 
console.log(b);

//another
for(let i= 0; i<10; i++){
    console.log(i);
};

let num = 7;
let prime = true;
for(let i =2; i<7; i++){
    if(num%i === 0){
        console.log('not prime');
        prime = false;
        break;
    }
};

if(prime) console.log('prime');
 //reverse a number

// let num = 238653;
// let rev = 0;

// while(num>0){
//     console.log('rev', rev);
//     console.log('num', num)
//     let r = num%10;
//     rev = rev*10 + r;
//     num = parseInt(num/10);
// }
// console.log(rev)
// console.log(num)

// Print all number divisible by 7 and 11 from 100 to 300
for(let i= 100; i<=300; i++){
    if(i%7 ===0 && i%11 ===0){
        console.log(i)

    }
};

//Fibonacci series below 100