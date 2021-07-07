function getAccountDetails() {
    let name=nme.value;
    let account_number=acc_no.value;
    let balance=bal.value;
    let mobile=mob.value;
    let password=pwd.value;

    let account={name,account_number,balance,mobile,password}
    console.log(account);
    if(account_number in localStorage){
        error.innerHTML="Account number already exist"
    }
    else{
        localStorage.setItem(account.account_number,JSON.stringify(account))
        alert("Account added success")
        location.href="./login.html"
    }
}