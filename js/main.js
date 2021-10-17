let outputText = document.getElementById('output-text');

/*write num in text input */
function display(number){
    if(outputText.value.length <=8){
        //console.log(outputText.value.length);
        outputText.value += number;
    }
    else{
      alert("Oops, don't write more than 9 numbers");
      outputText.value = "";
    }
}

/* 
The try => lets you test a block of code for errors("للبحث عن اخطاء برمجية").
The catch => lets you handle the error("لمعالجة  او ملاحظة عند وجود الخطأ").
The eval() => evaluates JavaScript code represented as a string("2+3"== 2+3)
("باستخدام Eval ، يمكنك إنشاء وظائف مباشرة بناءً على إدخال المستخدم.").
*/
function calulat(){
    try{
        outputText.value =eval(outputText.value);
    }
    catch{
        alert('Invalid');
        outputText.value = "";
    }
}

/* clear input function */
function cl(){
    outputText.value = "";
}

/* delete  function */
function delet(){
    outputText.value =  outputText.value.slice(0,-1);
}




/*====================== currency-conversion ======================*/
var result = document.getElementById('result');
var inputNum = document.getElementById('inputNum');
var toCurrency = document.getElementById('to-currency');
var fromCurrency = document.getElementById('from-currency');
var toCurrencyValue;
var fromCurrencyValue;

//take initial value
inputNum.addEventListener("keyup" , myResult);
toCurrency.addEventListener("change" , myResult);
fromCurrency.addEventListener("change" , myResult);

toCurrencyValue = toCurrency.value;
fromCurrencyValue = fromCurrency.value;
function myResult(){
    //result.value = inputNum.value ==> للتحقق;
   
    toCurrencyValue = toCurrency.value;
    fromCurrencyValue = fromCurrency.value;
    
     //Shekels into Shekels OR Dollars into Dollars OR Euros into Euros
     if(fromCurrencyValue==="ils" && toCurrencyValue==="ils" || fromCurrencyValue==="usd" && toCurrencyValue==="usd" || fromCurrencyValue==="eur" && toCurrencyValue==="eur" ){
        result.value = inputNum.value;
    }    
    
    //Shekels into Dollars
    else if(fromCurrencyValue==="ils" && toCurrencyValue==="usd"){
        //console.log ("yes"); ==> للتحقق
        result.value = Number(inputNum.value) * 0.31;
    }    
    
    // Dollars into Shekels
    else if(fromCurrencyValue==="usd" && toCurrencyValue==="ils"){
       result.value = Number(inputNum.value) * 3.22;
    }    

    //Shekels into Euros  
    else if(fromCurrencyValue==="ils" && toCurrencyValue==="eur"){
        result.value = Number(inputNum.value) * 0.27;
    }   
    
    //Euros into Shekels
    else if(fromCurrencyValue==="eur" && toCurrencyValue==="ils"){
        result.value = Number(inputNum.value) * 3.74;
    }   
    else{
        result.value = inputNum.value;
    }
}


