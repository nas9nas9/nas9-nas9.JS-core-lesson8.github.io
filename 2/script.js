let sign_up = document.forms[0];
let sign_out = document.forms[1];
let check = sign_up.iAgree;
let form = document.querySelector('.box_sign_up');
let account = document.querySelector('.account');



sign_up.signup.addEventListener('click', function(){
    document.querySelector('.person_first').innerHTML = sign_up[0].value;
    document.querySelector('.person_second').innerHTML = sign_up[1].value;
    document.querySelector('.person_email').innerHTML = sign_up[2].value;
    document.querySelector('.person_position').innerHTML = sign_up[5].value;
    form.classList.toggle('hide');
    account.classList.remove('hide');

})


check.addEventListener('change', function(){
    if(check.checked){
        document.querySelector('.big_button').disabled = false;
    } else {
        document.querySelector('.big_button').disabled = true;
        alert('agree with Terms of service');
    }
})

    
sign_out.small_button.addEventListener('click', function(){
    sign_up.reset();
    document.querySelector('.big_button').disabled = true;
    account.classList.toggle('hide');
    form.classList.remove('hide');
})


sign_up.addEventListener('click', function(){
    if (event.target.id === 'woman'){
        document.querySelector('.avatar').style.backgroundImage = `url('./woman.png')`;
    } 
    if (event.target.id === 'man'){
        document.querySelector('.avatar').style.backgroundImage = `url('./man.png')`;
    } 
});