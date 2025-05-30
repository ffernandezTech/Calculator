function getAddition(number1, number2)
{
    return number1+number2;
}
function getSubtraction(number1, number2)
{
    return number1-number2;
}
function getMultiplication(number1,number2){
    return number1*number2;
}
function getDivision(number1,number2){
    return number1/number2;
}
function getOperate(operation, number1, number2){
    //user saves operation and numbers after pressing enter.


    //simple switch case that takes our parameter and  compares to our case
    //and then calls the right function

    //using more standard symbols for each operate.
    switch(operation){
        case '+': return displayLine.textContent = getAddition(number1, number2);
        break;
        case '-': return displayLine.textContent =getSubtraction(number1,number2);
        break;
        case 'x': return displayLine.textContent =getMultiplication(number1, number2);
        break;
        //need to copy paste this divison symbol.
        case '÷': return displayLine.textContent= getDivision(number1,number2);
        break;

    }
}

//valuesCounter is used to in our arrays to save the right values
let valuesCounter = 0;
//function and variables to create the display
const displayLine = document.createElement('p');
const displayDIV = document.querySelector('.display');


function setValues(setUserinput)
{

    

    // if(operations=== '')
    // {
    //     displayLine.textContent = setUserinput;
    //     displayDIV.appendChild(displayLine);
    // }
    // else 
    // {
    //     let displayText = displayLine.textContent.concat(setUserinput);


    //     // console.log(displayText);

    //     displayLine.textContent= displayText;
 
    // }

    displayLine.textContent = setUserinput;
    displayDIV.appendChild(displayLine);


}


//function to add the operation to the string and save said operation to be used latter
// let getOps = '';

//Removing this operation because no longer going to display it.
//Display will only have the digits user entered for each number
//and it will clear and start displaying the second number after OP
// function setOperation()
// {

//     displayLine.textContent= displayLine.textContent +" " + operations + ' ';
 
   
// }

function setEverythingclear(){
    num1 = '';
    num2= '';
    displayLine.textContent='';
    operations = '';
    displayLine.style.fontSize = '40px';
}
const btnDelete = document.querySelector('.btnRemove');

btnDelete.addEventListener('click',()=>{


setEverythingclear();


});




const btnOps = document.querySelectorAll('.btnOps');
let operations = '';

btnOps.forEach(btnOperation=>{
    btnOperation.addEventListener('click',()=>{

      

    

        operations= btnOperation.textContent;
        
        setOperation();
        // console.log(operation);

        





    })
});

const btnNumPad = document.querySelectorAll('.btn');
let num1 = '';
let num2 = '';

let numArray = [];
//Using to keep track of the number after pressing equal
let count = 0;
// console.log(btnCall);

//For each btn in our numpad we add the text content into a string
btnNumPad.forEach(btnNum=> {
    
    btnNum.addEventListener('click',(e)=>{

        if(operations==='' && count==1)
        {
            count=0;
            num1='';
            
        }

        if(displayLine.textContent.length > 20)
        {
            displayLine.style.fontSize = '36px';
        }
    
        if(operations === '' && count ===0 )
        {
            num1+= btnNum.textContent;
            setValues(num1);
        }
        else if(operations != '')
        {
            num2 += btnNum.textContent;
            setValues(num2);
        }

    

    // console.log(num);
    // console.log(typeof num);
    // console.log(parseInt(num));

});
});



const btnEqual = document.querySelector('.btnEqual')

btnEqual.addEventListener('click',()=>{

   
    if(operations === '÷' && parseInt(num2) === 0 )
    {
        alert('CANT DIVIDE BY ZERO');
        

    }
    else if(num2==='')
    {
        alert('enter second number');
    }
    else{
        console.log(`first number ${num1} with this operation ${operations} and finally this final number ${num2}`)
        num1 = getOperate(operations, parseInt(num1), parseInt(num2));
        console.log(`THIS IS THE NUMBER 1 after operation ${num1}`);
        count = 1;
        operations = '';
        num2 = '';
       
    }

    



});

