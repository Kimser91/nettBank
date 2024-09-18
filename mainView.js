updateView();

function updateView() {
    html.innerHTML = /*HTML*/
        `
    <div class="container">
        <div class="topBox"><div class="logo" onclick="mainView()">Logo here!</div></div>
     
        <div class="mainBox">
            <div class="leftMainBox"> News from the bank:<br> ${printBankingNews()}</div>
            <div class="rightMainBox">Financial News:<br> ${printFinancialNews()}</div>
        </div>
        
        <div class="leftBox"></div>
        <div class="rightBox"></div>
       
        <div class="bottomBox">about us button, and other information buttons, + cosmetics</div>
</div>
    `;
}

function printBankingNews() 
{
    let list
    for(let i = 0; i < p.newsFromBank.length; i++)
        {
            list += 
            `
            <li> ${p.newsFromBank[i]}
            `
        }

    return list
}

function printFinancialNews() {}