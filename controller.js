function payBill() 
{
    let i = model.input.payBills;
    if(i.amount != null && i.accountNumber != null && i.kid != null){
        p.users[model.app.id].Billingaccount = p.users[model.app.id].Billingaccount - model.input.payBills.amount;
        console.log(model.input.amount)
        transferToAnotherUser()
        i.amount = null;
        i.kid = null;
        i.accountNumber = null;
       
        userView();
    }
    else {alert('fill in all points in form')}

}

function changeAccountNumber(accountNumber)
{
    
    model.input.payBills.accountNumber = accountNumber
    
}

function changeKIDNumber(KID)
{
    model.input.payBills.kid = KID
}

function changeAmount(amount)
{
    model.input.payBills.amount = amount
    console.log(model.input.amount)
}

function transferToAnotherUser()
{
    if (model.input.payBills.accountNumber == 2)
        {
            console.log(model.data.users[1].MainBalance)
            model.data.users[1].MainBalance = model.data.users[1].MainBalance + model.input.payBills.amount;
            console.log(model.data.users[1].MainBalance)
        } 
}