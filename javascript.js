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
        case '+': displayLine.textContent = getAddition(number1, number2);
        break;
        case '-': displayLine.textContent =getSubtraction(number1,number2);
        break;
        case 'x':displayLine.textContent =getMultiplication(number1, number2);
        break;
        //need to copy paste this divison symbol.
        case '÷':displayLine.textContent= getDivision(number1,number2);
        break;

    }
}

//function and variables to create the display
const displayLine = document.createElement('p');
const displayDIV = document.querySelector('.display');


function setValues(setUserinput)
{

    

    if(operations=== '')
    {
        displayLine.textContent = setUserinput;
        displayDIV.appendChild(displayLine);
    }
    else 
    {
        let displayText = displayLine.textContent.concat(setUserinput);


        // console.log(displayText);

        displayLine.textContent= displayText;
 
    }


}


//function to add the operation to the string and save said operation to be used latter
// let getOps = '';
function setOperation()
{

    displayLine.textContent= displayLine.textContent +" " + operations + ' ';
 
   
}

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
// console.log(btnCall);

//For each btn in our numpad we add the text content into a string
btnNumPad.forEach(btnNum=> {
    
    btnNum.addEventListener('click',(e)=>{


        if(displayLine.textContent.length > 20)
        {
            displayLine.style.fontSize = '25px';
        }
    
        if(operations === '')
        {
            num1+= btnNum.textContent;
            setValues(num1);
        }
        else 
        {
            num2 += btnNum.textContent;
            setValues(btnNum.textContent);
        }

    

    // console.log(num);
    // console.log(typeof num);
    // console.log(parseInt(num));

});
});

function setEverythingclear(){
    num1 = '';
    num2= '';
    displayLine.textContent='';
    operations = '';
}
const btnDelete = document.querySelector('.btnRemove');

btnDelete.addEventListener('click',()=>{


setEverythingclear();


});


const btnEqual = document.querySelector('.btnEqual')

btnEqual.addEventListener('click',()=>{

    if(operations === '÷' && parseInt(num2) === 0 )
    {
        alert('CANT DIVIDE BY ZERO');
        

    }
    else{
        getOperate(operations, parseInt(num1), parseInt(num2));
    }



});

