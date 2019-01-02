

let active;
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    var name_error = document.getElementById('name_error');
    var email_error = document.getElementById('email_error');
    var password_error = document.getElementById('password_error');
    var uid=document.getElementById('uid');
    var lid=document.getElementById('lid');
    var eid=document.getElementById('eid');
    var pid=document.getElementById('pid');
    var cpid=document.getElementById('cpid');
function funcSubmit() {
    
    
    if(validate()){
        let user= new Object();
        user.firstname=uid.value;
        user.lastname=lid.value;
        user.email=eid.value;
        user.password=pid.value;
        itemsArray.push(user);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        return true;
    }
    else{
        return false;
    }
}
function logsub(){
    let tempm = document.getElementById('tempm');
    let email_main = document.getElementById('email_main');
    let password_main = document.getElementById('password_main');
    for(let i=0;i<itemsArray.length;i++){
        if(!email_main.value.localeCompare(itemsArray[i].email) && !password_main.value.localeCompare(itemsArray[i].password)){
            localStorage.setItem('current',itemsArray[i].firstname + " " + itemsArray[i].lastname);
            return true;
        }
    }
    tempm.innerHTML="unsuccessful";
    return false;
}

function validate(){
    let flnreg= /^[a-zA-Z]+$/ ;
    let ereg=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let psreg=/^(?=.*\d).{4,8}$/;
    let phreg=/^\d{10}$/;
    if(!flnreg.test(uid.value) || !flnreg.test(lid.value))
        name_error.innerHTML="invalid user name";
    else
        name_error.innerHTML="";
    if(!ereg.test(eid.value))
        email_error.innerHTML="invalid email";
    else
        email_error.innerHTML="";
    if(!psreg.test(pid.value) || !psreg.test(cpid.value))
        password_error.innerHTML="invalid password";
    else
        password_error.innerHTML="";
    if( flnreg.test(uid.value) && flnreg.test(lid.value) && ereg.test(eid.value) && psreg.test(pid.value)){
        
        if(!pid.value.localeCompare(cpid.value)){
            return true;
        }
        else{
            password_error="passwords not matched";
        }
    }

    return false;
}


