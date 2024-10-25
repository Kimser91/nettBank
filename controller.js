function payBill() 
{
    let p = model.data
    let i = model.input.payBills;
    if(i.amount != null && i.accountNumber != null && i.kid != null){
        p.users[model.app.id].Billingaccount = p.users[model.app.id].Billingaccount - model.input.payBills.amount;
        console.log(model.input.amount)
        transferToAnotherUser()
        i.amount = null;
        i.kid = null;
        i.accountNumber = null;
       

    }
    else {alert('fill in all points in form')}

}



function transferToAnotherUser()
{
    if (model.input.payBills.accountNumber == 2)
        {
            console.log(model.data.users[1].MainBalance)
            model.data.users[1].MainBalance = parseInt(model.data.users[1].MainBalance) + parseInt(model.input.payBills.amount);
            console.log(model.data.users[1].MainBalance)
            payBillsView();
        } 
}



function checkUsers(){
    let a = ''
    if(model.input.userName !=null && model.input.password != null)
        {
            for(let i = 0; i < model.data.users.length; i++)
                {console.log('user info:', model.data.users[i].password, model.data.users[i].userName)
                    console.log('input', model.input.password, model.input.userName)
                    if(model.data.users[i].password === model.input.password  && model.data.users[i].userName === model.input.userName)
                        {
                            a = 'b' 
                            model.app.user = model.data.users[i]
                            model.app.page = 'userPage'
                            userView()
                            return;
                        }
                        else{model.app.errorMessage = 'Feil brukernavn eller passord!', loginView();}
                    console.log(model.app.user)
                        
                }
        }
        
        
}

