
//qureyselector define 
let form=document.querySelector('input[type="submit"]')
form.addEventListener('click',Login)


//function define 
function Login(e){
    let email=document.querySelector('#email').value
    let pass=document.querySelector('#Pass_word_filed').value
    let post_code=document.querySelector('#PostCode').value
    let reGeu_Expre=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let reGeu_Expre_pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let reGeu_Expre_code= /^\d{4}$/
    if (email===''|| pass===''|| post_code==='' ){
        alert("Please fill up the required field ")
    }else{
        if(reGeu_Expre.test(email) && reGeu_Expre_pass.test(pass) && reGeu_Expre_code.test(post_code)){
            document.querySelector('#email').value=''
            document.querySelector('#Pass_word_filed').value=''
            document.querySelector('#PostCode').value=''
            console.log('Succesfully Logined ')
        }else{
            console.log("invalied")
        }
        
    }
    
    
    
    //console.log(email)
    e.preventDefault()

}
 
