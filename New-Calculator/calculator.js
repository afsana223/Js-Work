function calculate(num){
    const inputBtn =  document.getElementById("input").value;

    const inputTotal =inputBtn + num;
    const inputValue = document.getElementById("input").value = inputTotal;
    


    return inputValue;
  }

const equalBtn = document.getElementById("equal-btn");
equalBtn.addEventListener('click', function(){
    const equalNumber = document.getElementById("input").value;
    const total = eval(equalNumber);
    document.getElementById("input").value = total;
})






  const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener('click', function(){
    document.getElementById("input").value = '';
})




  
function back(){
  let result = document.getElementById("input");
  result.value = result.value.slice(0,-1);  
}