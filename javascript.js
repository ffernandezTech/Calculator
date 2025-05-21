function getAddition(arr1, arr2)
{
    return arr1+arr2;
}
function getSubtraction(arr1, arr2)
{
    return arr1-arr2;
}
function getMultiplication(arr1,arr2){
    return arr1*arr2;
}
function getDivision(arr1,arr2){
    return arr1/arr2;
}
function getOperate(operation, arr1, arr2){
    //user saves operation and numbers after pressing enter.


    //simple switch case that takes our parameter and  compares to our case
    //and then calls the right function

    //using more standard symbols for each operate.
    switch(operation){
        case '+': getAddition(arr1, arr2);
        break;
        case '-': getSubtraction(arr1,arr2);
        break;
        case 'x': getMultiplication(arr1, arr2);
        break;
        //need to copy paste this divison symbol.
        case '÷': getDivision(arr1,arr2);
        break;

    }
}


const btnCall = document.querySelectorAll('.btn');
let num = '';
let numDisplay1;
// console.log(btnCall);

btnCall.forEach(btnPress=> {
    
    btnPress.addEventListener('click',(e)=>{

    
    
    num+=btnPress.textContent;

       
    

    console.log(num);
    console.log(typeof num);

    console.log(parseInt(num));

});
});