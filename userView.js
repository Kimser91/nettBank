function userView() {
    // veldig midlertidig 
    model.app.id = 0;
    // veldig midlertidig


    p.inView = /*html*/
        `
    <div class="accountView">
    <div>Account Page</div>
    <div>${p.users[0].name}</div>

    <div>Main: ${p.users[0].MainBalance}</div>
    <div>Savings: ${p.users[0].SavingsAccount}</div>
    <div>Billing: ${p.users[0].Billingaccount}</div>
    <button onclick="payBillsView()">Pay bills</button>
    <button>Transfer Cash</button>
    <button>Check for new bills</button>
    <div>${p.accountView}</div>
    </div>
    
    `
    updateView()
}

function payBillsView() {
    p.accountView = /*html*/
        `
 <div>From: Billing Account</div>

<div> <input id="" type="number" placeholder="To:" onchange="changeAccountNumber(this.value)"></div>
<div> <input id="" type="number" placeholder="KID:" onchange="changeKIDNumber(this.value)"></div>
<div> <input id="" type="number" placeholder="Amount:" onchange="changeAmount(this.value)"></div>
<button onclick="payBill()">Pay</button> <button onclick="cancel()">Cancel</button>
<div>${model.data.users[1].MainBalance}</div>
<div>${model.data.users[1].name}</div>
 `
 userView()
}

function cancel() 
{   p.accountView = '';
    i.amount = null;
    i.kid = null;
    i.accountNumber = null;
     userView()}