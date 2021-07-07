function login() {
    let user_name=uname.value;
    let password=pwd.value;
    let login_account={user_name,password}
    console.log(login_account);

    let user=JSON.parse(localStorage.getItem(user_name))
    console.log(user);
    if(user_name in localStorage){
        if(user.password== password){
            alert("Login Success")
        }
        else{
            error.innerHTML="*please enter a valid password"
        }
    }
    else{
        error.innerHTML="*invalid username"
    }
    
}
