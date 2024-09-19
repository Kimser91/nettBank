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
<div> <input type="number" placeholder="To::"></div>
<div> <input type="number" placeholder="KID:"></div>
<div> <input type="number" onchange="payBill(this.value)" placeholder="Amount:"></div>
<button>Pay</button> <button onclick="cancel()">Cancel</button>
 `
 userView()
}

function cancel() 
{ p.accountView = ''; userView()}