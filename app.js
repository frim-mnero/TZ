document.addEventListener("DOMContentLoaded", () => {
const btnEncoding=document.querySelector('.form__btnEncoding');
const btnCopy=document.querySelector('.form__btnCopy');

const inputArea=document.querySelector('.form__textarea');
const resultText=document.querySelector('.form__result');

inputArea.addEventListener("input", () => {
    // Удаляем все символы, кроме букв латинского алфавита в верхнем регистре
    inputArea.value = inputArea.value.replace(/[^A-Z]/g, "");
  });

  btnEncoding.addEventListener('click',(ev)=>{
    ev.preventDefault()
    
    const inputText=inputArea.value;

    const encodedString=mainEncode(inputText)

    resultText.textContent=encodedString;

  });

  btnCopy.addEventListener('click',(ev)=>{
    
    ev.preventDefault();
    const textResult=resultText.value;

    navigator.clipboard.writeText(textResult)
    .then(() => {
      alert('Скопировано')
    })
    .catch(error => {
     alert(`Текст не скопирован ${error}`)
    })
  });


  function mainEncode(curStr){

    let counter=1;
    let encodedStr="";
    
    if(curStr=="") return ""
    

    for(let i=0;i<curStr.length;i++){
        if(curStr[i]===curStr[i+1]){
            counter++;
        }
        else{
            encodedStr+=(counter>1?counter:"")+curStr[i];
            counter=1;
        }
    }
    return encodedStr;

}
});


