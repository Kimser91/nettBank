mainView();

function updateView() {
    html.innerHTML = /*HTML*/
        `
    <div class="container">
        <div class="topBox"><div class="logo" onclick="mainView()">The Bank</div> <div class="loginButton" onclick="userView()">Login</div></div>
     
        <div class="mainBox">
            ${p.inView}
        </div>
        
        <div class="leftBox"></div>
        <div class="rightBox"></div>
       
        <div class="bottomBox">about us button, and other information buttons, + cosmetics</div>
</div>
    `;
}

function mainView() 
{
    p.inView = `<div class="leftMainBox"> News from the bank:<br> ${printBankingNews()}</div>
            <div class="rightMainBox">Financial News:<br> ${printFinancialNews()}</div>`
           updateView() 
}

function printBankingNews() 
{
    let list = '';
    for(let i = 0; i < p.newsFromBank.length; i++)
        {
            list += 
            `
            <li> ${p.newsFromBank[i]}
            `
        }

    return list
}

function printFinancialNews() 
{
    let list = '';
    for(let i = 0; i < p.financialNews.length; i++)
        {
            list += 
            `
            <li> ${p.financialNews[i]}
            `
        }

    return list
}