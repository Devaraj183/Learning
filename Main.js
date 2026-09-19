// Find the Second Largest Number
function secondLargest(nums){
    let max1=nums[0];
    let max2=nums[0];
    for(let i=1;i<nums.length;i++) {
        if(nums[i]>max1 && nums[i]>max2) {
            max2=max1;
            max1=nums[i];
        }
        else if(nums[i]>max2 && nums[i]<max1) {
            max2=nums[i];
        }
    }
    return max2;
}
let arr = [2,6,4,3,6,4,2,3,7,9];
console.log(secondLargest(arr));

//Find Duplicate Values
function duplicate(nums){
    let fre = new Map();
    for(let i of nums) {
        if(fre.has(i)) {
            fre.set(i,fre.get(i)+1);
        }
        else {
            fre.set(i,1);
        }
    }
    let dup = [];
    for(let i of fre.keys()) {
        if(fre.get(i)>1) dup.push(i);
    }
    return dup;
}
console.log(duplicate(arr));

//Character Frequency
function charfre(nums) {
    let fre = new Map();
    for(let i of nums) {
        fre.set(i,(fre.get(i) || 0)+1);
    }
    for(let i of fre.keys()) {
        console.log("Key : ",i,"->",fre.get(i));
    }
}
charfre(arr);

let employee = new Map([["A", 60000],["B", 70000],["C", 25000],["D", 30000],["E", 45000],["F", 50000],["G", 75000]
]);

//Employee Filter – Salary > ₹50,000
function employee_filter(nums) {
    let arr = [...nums.keys()].filter((n)=>{
        return nums.get(n)>=50000;
    });
    return arr;
}
console.log(employee_filter(employee));

// Calculate Total Salary using reduce()
let salarySum  = [...employee.values()].reduce((total,num)=>{
    return num+total;
},0);
console.log(salarySum);

//Product Sorting – Low → High / High → Low
let emp = [...employee.entries()].sort((a,b)=>{
    return b[1]-a[1];
});
console.log(emp);