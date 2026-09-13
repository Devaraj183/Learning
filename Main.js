//Check whether a number is even or odd
function oddOrEven(num) {
    if(num&1==1) return "Odd Number";
    else return "Even Number";
}
console.log(oddOrEven(1));

//Find the largest of 3 numbers.
function LargestNumber(num1,num2,num3){
    if(num1>num2) max=num1;
    else max=num2;
    if(num3>max) max=num3;
    return "Largest Number is "+max;
}
console.log(LargestNumber(2,5,8));

//Reverse a string
function reverse(s) {
    ans="";
    for(let i=s.length-1;i>=0;i--) {
        ans+=s.charAt(i);
    }
    return ans;
}
console.log(reverse("deva"));

//Find factorial of a number
function fact(num) {
    if(num==1) return 1;
    return num*fact(num-1);
}
console.log(fact(5));

//Check whether a number is prime
function prime(num) {
    if(num<=1) return "Not a Prime number";
    for(let i=2;i<=Math.sqrt(num);i++) {
        if(num%i==0) return "Not a Prime number";
    }
    return "Prime Number";
}
console.log(prime(7));

//Find the largest and smallest number in an array
function MinAndMax(num) {
    let min=num[0] , max = num[0];
    for(let i=1;i<num.length;i++) {
        if(max<num[i]) max=num[i];
        if(min>num[i]) min=num[i];
    }
    return `Smallest Number is ${min} And Largest Number is ${max}`;
}
let arr = [3,6,1,2,7];
console.log(MinAndMax(arr));

//Remove duplicate values from an array
function removeDuplicates(num) {
    let arr = [];
    for(let i of num) {
        if(arr.indexOf(i)==-1) arr.push(i);
    }
    return arr;
}
let nums = [2,2,2,3,5,6,4,3,2,1,5];
console.log(removeDuplicates(nums));

//Count vowels in a string
function countVowels(s){
    let cn = 0;
    let vow = "aeiouAEIUO";
    for(let i=0;i<s.length;i++) {
        if(vow.includes(s[i])) cn++;
    }
    return "Number of Vowels : "+cn;
}
console.log(countVowels("ksdbkbiaaa"));

//Find the sum of all numbers in an array
function sum(num) {
    let s  = 0;
    for(let i of num) {
        s+=i;
    }
    return "Sum : "+s;
}
console.log(sum(arr));