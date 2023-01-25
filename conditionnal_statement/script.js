const sortNumbers = (num1,num2,num3) => {
    let firstPlace = 0;
    let secondPlace = 0;
    let thirdPlace = 0;
    if (num1>num2 && num1>num3 ) {
       firstPlace = num1;
       if(num2 > num3) {
        secondPlace = num2
        thirdPlace = num3
       }else {
         secondPlace = num3
         thirdPlace = num2
       }
       console.log(firstPlace,secondPlace,thirdPlace)
    }else if (num2 > num1 && num2 > num3) {
        firstPlace = num2
        if(num1 > num3){
            secondPlace = num1
            thirdPlace = num3
        }else{
            secondPlace = num3
            thirdPlace = num1
        }
        console.log(firstPlace,secondPlace,thirdPlace)
    }else if (num3 > m1 && num3 > m2) {
        firstPlace = num3
        if(num1 > num2) {
            secondPlace = num1
            thirdPlace = num3
        }else{
            secondPlace = num3
            thirdPlace = num1
        }
        console.log(firstPlace,secondPlace,thirdPlace)
    }else if (num1 === num2 || num2 === num3 || num1 === num3) {
        console.log('you have same equality between your number')
    }else {console.log('Not include string number')}
}

sortNumbers(5,87,7)


const sortNumbers = (num1,num2,num3) => {
    let sorting = true
    let firstPlace = 0;
    let secondPlace = 0;
    let thirdPlace = 0;
  switch(sorting) {
    case num1>num2 && num1>num3:
        firstPlace = num1;
    case num2 > num3:
        secondPlace = num2
        thirdPlace = num3
    case num3 > num2:
        secondPlace = num3
        thirdPlace = num2
        console.log(firstPlace,secondPlace,thirdPlace)
      break;
    case num2 > num1 && num2 > num3:
        firstPlace = num2
    case num1 > num3:
        secondPlace = num1
        thirdPlace = num3
    case num3 > num1:
        secondPlace = num3
        thirdPlace = num1
        console.log(firstPlace,secondPlace,thirdPlace)
      break
    case num3 > m1 && num3 > m2:
        firstPlace = num3;
    case num1 > num2: 
        secondPlace = num1
        thirdPlace = num2
    case num2 > num1 :
        secondPlace = num2
        thirdPlace = num1
        console.log(firstPlace,secondPlace,thirdPlace)
    break
    case num1 === num2 || num2 === num3 || num1 === num3:
        console.log('you have same equality between your number')
    default:
        console.log('Not include string number')
    break;
 }
}




const findLargestNum = (...numbers) => {
    let largestNum = numbers[0]
    for(let index =0; index < numbers.length; index++) {
      if (numbers[index] > largestNum){
        largestNum = numbers[index]
      }
    }
    console.log(largestNum)
}

let num1 = 5
let num2 = 3
let num3 = 7
let num4 = 9
let num5 = 1

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(num1)
}else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(num2)
}else if (num3 > num1 && num3 > num2 && num3 > num4 && num4 > num5) {
    console.log(num3)
}else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(num4)
}else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    console.log(num5)
}else{console.log('conditional statement')}

const largestNum = true
switch(largestNum) {
    case num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5:
        console.log(num1)
    break;
    case num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5:
        console.log(num2);
    break;
    case num3 > num1 && num3 > num2 && num3 > num4 && num4 > num5:
        console.log(num3);
    break;
    case num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5:
        console.log(num4);
    break;
    case num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4:
        console.log(num5);
    break;
    default:
        console.log('conditional statement')
    break
}
   

const findSignOfProductNum = (num1,num2,num3) => {
     const product  = num1 * num2 * num3
      if (product > 0) {
        console.log('positive product')
      }else {
        console.log('negative product')
      }
}

const findSignOfProductNum = (num1,num2,num3) => {
    const product  = num1 * num2 * num3
     let sign = true 
     switch (sign) {
        case product > 0:
            console.log('positive product')
        break;
        case product < 0:
            console.log('negative product')
        break;
        default: 
             console.log('conditional statement')
        break
     }
}

