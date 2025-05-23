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

//function and variables to create the display
const displayLine = document.createElement('p');
const displayDIV = document.querySelector('.display');


function setValues(setUserinput)
{

    displayLine.textContent = setUserinput;

    displayDIV.appendChild(displayLine);


}


//function to add the operation to the string and save said operation to be used latter
let getOps = '';
function setOperation(desiredOperation)
{

    getOps=desiredOperation;
    displayLine.textContent= displayLine.textContent +" " + desiredOperation;
 
   
}

const btnOps = document.querySelectorAll('.btnOps');
let operations = '';

btnOps.forEach(btnOperation=>{
    btnOperation.addEventListener('click',()=>{

        operations= btnOperation.textContent;
        setOperation(operations);
        // console.log(operation);
    })
});

const btnNumPad = document.querySelectorAll('.btn');
let num1 = '';
let num2 = '';
// console.log(btnCall);

//For each btn in our numpad we add the text content into a string
btnNumPad.forEach(btnNum=> {
    
    btnNum.addEventListener('click',(e)=>{

    
        if(operations === '')
        {
            num1+= btnNum.textContent;
            setValues(num1);
        }
        else 
        {
            num2 += btnNum.textContent;
            setValues(num2);
        }

    

    // console.log(num);
    // console.log(typeof num);
    // console.log(parseInt(num));

});
});

