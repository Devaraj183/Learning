class Student {

    constructor(name,marks) {
        this.name = name;
        this.marks=marks;

        this.TotalMarks="Total Marks : "+this.Total();
        this.Percentage = "Percentage : "+(this.Total()/500)*100;
        this.pass=this.PassAndFail();
        this.fail=5-this.pass;
    }

    Total() {
        let sum =0;
        for(let i of this.marks) {
            sum+=i;
        }
        return sum;
    }

    Grade () {
        if(this.Total()>=480) return 'A'
        else if (this.Total()>=460) return 'B';
        else if (this.Total()>=400) return 'C';
        else if (this.Total()>=360) return 'D';
        else return 'E';
    }

    PassAndFail() {
        let p = 0;
        for(let i of this.marks) {
            if(i>34) p++;
        }
        return p;
    }
    
}

let arr = [87,67,56,45,98];
let s1 = new Student("A",arr);
console.log(s1.TotalMarks);
console.log(s1.Percentage);
console.log("No of Pass Subjects : "+s1.pass);
console.log("No of Fail Subjects : "+s1.fail);
console.log("Grade : "+s1.Grade());