//3. Ví dụ về == và ===

    // ví dụ 1:
    console.log(9 == "9"); // true
    console.log(9 === "9"); // false

    // ví dụ 2:
    console.log(undefined == null); // true
    console.log(undefined === null); // false

    // ví dụ 3:

    var a = [];
    var b = [];
    var c = a;
    
    console.log(a == b); // false
    console.log(a === b); // false
    console.log(a == c); // true
    console.log(a === c); // true

//4.1: Ví dụ về map()

    let arr = [];
    for (var i=0; i<5; i++, arr.push(i));

    let test = arr.map(num => {
        return num * 2;
    });

    console.log(arr);
    console.log(test);

//4.2 ví dụ về filter()

    const arr2 = [1,2,3,4]
    const arr3 = arr2.filter((val,index,number)=>{
        return val % 2 === 0;
    });
    console.log(arr2);
    console.log(arr3);

//4.3 Ví dụ về ruduce()

    const arr4 = [2,10,11,5,16];
    var sum = arr4.reduce((prev,currentV,currentIndex,arr)=>{
        return prev + currentV;
    })
    const avg =sum/arr4.length;
    console.log(avg);

//4.4 ví dụ về find()

    const ages = [3,10,15,20];
    const findAges = ages.find((age)=>{
        return age > 14;
    })
    console.log(findAges);

//4.5 ví dụ về some()

    const findAges1 = ages.some((age)=>{
        return age > 14;
    })
    console.log(findAges1);

//5. add a new element to an array[] (at the end)
    
    let arr5 = [1, 2, 6, 8];
    arr5.push(4);
    console.log(arr5);

// 6. add a new element to an array[] (at the beginning)

    arr5.unshift(9);
    console.log(arr5);

//7.1 remove a new element to an array[] (at the end)
    
    arr5.pop();
    console.log(arr5);

//7.2 remove a new element to an array[] (at the beginning) 
    
    arr5.shift();
    console.log(arr5);

//8. Write a JavaScript program to compute the sum of the two given integers. 
//      If the two values are same, then returns triple their sum.

    var a = Math.floor( Math.random() * 100 ) + 1;
    var b = 19 ;
    if(a != b){
        c =  a + b ;
    }else {
        c = 3 * a + 3 * b;
    }
    console.log(c);

//9. Write a JavaScript program to compute the absolute difference between a specified number and 19.
//  Returns triple their absolute difference if the specified number is greater than 19.

    if (a < b) {
        d = b - a ;
    }else if (a > b){
        d = (a - b)*3;
    }else{
        d = a - b ;
    }
    console.log(d);

// 10. A masked number is a string that consists of digits and one asterisk (*) that 
// should be replaced by exactly one digit. Given a masked number find all the possible options 
// to replace the asterisk with a digit to produce an integer divisible by 3.

    function divisible3 (a){
        var output=[]
        for(i=0;i<10;i++){
            var b = a.replace('*',i)
            if(b%3===0){
                output.push(b)
            }
        }
        return output;
    }

    console.log(divisible3('1243*'));

// 11. 4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced 
// by exactly one digit. Given a masked number find all the possible options to replace the asterisk with 
// a digit to produce an integer divisible by 6.

    function divisible6 (a){
        var output=[]
        for(i=0;i<10;i++){
            var b = a.replace('*',i)
            if(b%6===0){
                output.push(b)
            }
        }
        return output;
    }

    console.log(divisible6('1243*'));