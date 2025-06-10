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
function getSolution(operation, number1, number2){
    //user saves operation and numbers after pressing enter or another Operation.


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

//function and variables to create the display
const displayLine = document.createElement('p');
const displayDIV = document.querySelector('.display');


function setDisplay(setUserinput)
{
//serUserInput is whatever number is currently being entered between Num1 or Num2 depends on other conditions
    displayLine.textContent = setUserinput;
    displayDIV.appendChild(displayLine);


}
function dblCheck()
{
    // console.log(typeof(num1) + ' This is the value of num1 before solving')




    if(operations === '÷' && parseInt(num2) === 0 && !num2.includes('.'))
    {
        alert('CANT DIVIDE BY ZERO');
        

    }
    else if(num2==='')
    {
        alert('enter second number');
    }
    else if(num1.includes('.') || num2.includes('.'))
        {
            num1 = getSolution(operations, parseFloat(num1), parseFloat(num2)).toString();

            displayLine.textContent= num1;


            // console.log(`THIS IS THE NUMBER 1 after operation ${num1}`);


            //newNumber is used to check that the user is entering a different number or
            //still using the same number after solution.
            newNumber = true;
            num2 = '';
        }
    else{
            num1 = getSolution(operations, parseInt(num1), parseInt(num2)).toString();

            displayLine.textContent= num1;


            // console.log(`THIS IS NUMBER 1 after operation ${num1}`);


          //newNumber is used to check that the user is entering a different number or
            //still using the same number after solution.
            newNumber = true;
            num2 = '';
        }
        
        
       console.log(typeof(num1) + ' THis is the value of num1 after solving')


    }
        
    //Issue with SOLUTION function that causes old OPS to remain,
    //might be problem somewhere else.


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
let decimalOPsTracker = 0;

btnOps.forEach(btnOperation=>{
    btnOperation.addEventListener('click',()=>{

      

    


        if(operations!='')
        {
            if(num2==='')
            {

                //if no number is entered in Num2
                //replace operation with the new entered valued.
                operations=btnOperation.textContent;
                decimalOPsTracker++;
            }
            else{

                //if number 2 is not empty solve
                dblCheck();
                decimalOPsTracker++;
                operations= btnOperation.textContent;
                // operations= btnOperation.textContent;
            }
            
        }
        else{
        operations= btnOperation.textContent;
        decimalOPsTracker++;

        
        // setOperation();
        // console.log(operation);

        

        }
        




    })
});

const btnNumPad = document.querySelectorAll('.btn');
let num1 = '';
let num2 = '';

//Using to keep track of the number after pressing equal

//newNumber is used to check that the user is entering a different number or
//still using the same number after solution.
let newNumber = false;

//For each btn in our numpad we add the text content into a string
btnNumPad.forEach(btnNum=> {
    
    btnNum.addEventListener('click',(e)=>{

        if(operations==='' && newNumber === true)
        {
            newNumber=false;
            //If the user hasnt entered a new operation after solving
            //and instead entered a number that number is now suppose to be
            //the new number 1.
            num1='';
            
        }

        if(displayLine.textContent.length > 20)
        {
            displayLine.style.fontSize = '36px';
        }
    
        if(operations === '' && newNumber ===false )
        {
            num1+= btnNum.textContent;

            setDisplay(num1);
            
            
            // console.log(`This is the first number ${num1}`)
        }
        else if(operations != '')
        {
            num2 += btnNum.textContent;


            
            setDisplay(num2);
            
            
            // console.log(`This is the second number ${num2}`)
        }

    

    // console.log(num);
    // console.log(typeof num);
    // console.log(parseInt(num));

});
});




const btnEqual = document.querySelector('.btnEqual')

btnEqual.addEventListener('click',()=>{

   
    
   dblCheck();
   operations='';



});

const btnDecimal = document.querySelector('.btnDecimal')

btnDecimal.addEventListener('click',()=>{

   
    //decimalOPsTracker is to make sure that the user can enter a starting
    //decimal for the second number and it wont be placed at the end of the first number
    
    if(decimalOPsTracker===0)
    {
       

        if(!num1.includes('.'))
        {
         num1 = num1+'.';
        setDisplay(num1);
        }
    }
    else if(decimalOPsTracker!=0)
    {
         if(!num2.includes('.'))
        {
            num2 = num2+'.';
         setDisplay(num2);
        }
        decimalOPsTracker=0;
    }


})

