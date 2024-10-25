function userView() {
    // veldig midlertidig 
    model.app.id = 0;
    // veldig midlertidig
  let p = model.app


    p.inView = /*html*/
        `
    <div class="accountView">
    <div>Account Page</div>
    <div>${p.user.name}</div>

    <div>Main: ${p.user.MainBalance}</div>
    <div>Savings: ${p.user.SavingsAccount}</div>
    <div>Billing: ${p.user.Billingaccount}</div>
    <button onclick="payBillsView()">Pay bills</button>
    <button>Transfer Cash</button>
    <button>Check for new bills</button>
    <div>${model.data.accountView}</div>
    </div>
    
    `
    updateView()
}

function payBillsView() {
    let p = model.data
    p.accountView = /*html*/
        `
 <div>From: Billing Account</div>

<div> <input id="" type="number" placeholder="To:" onchange="model.input.payBills.accountNumber = this.value"></div>
<div> <input id="" type="number" placeholder="KID:" onchange="model.input.payBills.kid = this.value"></div>
<div> <input id="" type="number" placeholder="Amount:" onchange="model.input.payBills.amount = this.value"></div>
<button onclick="payBill()">Pay</button> <button onclick="cancel()">Cancel</button>
<div>${model.data.users[1].MainBalance}</div>
<div>${model.data.users[1].name}</div>
 `
 userView()
}

function cancel() 
{   
    let p = model.data
    let i = model.input
    p.accountView = '';
    i.amount = null;
    i.kid = null;
    i.accountNumber = null;
     userView()}