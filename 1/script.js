let f1 = document.forms.f1;

f1.button.addEventListener('click', function(){
    let text = f1.input1.value;
    if(text != ''){
        f1.input2.placeholder = `${text}`;
    } else {
        f1.input2.placeholder;
    }
    f1.input1.value = '';
})

let f2 = document.forms.f2;


f2.input3.addEventListener('change', function(){
    let userText = f2.input3.value;
    f2.input3.value = '';
    this.placeholder = `${userText}`;
  })