function payBill(amount) 
{
 p.users[model.app.id].Billingaccount = p.users[model.app.id].Billingaccount - amount;
 userView();
}