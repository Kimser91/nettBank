pageSwitch();

function updateView() {
    model.app.html.innerHTML = /*HTML*/
        `
    <div class="container">
        <div class="topBox"><div class="logo" onclick="mainView()">The Bank</div> ${loginBannerButton()} </div>
     
        <div class="mainBox">
            ${model.app.inView}
        </div>
        
        <div class="leftBox"></div>
        <div class="rightBox"></div>
       
        <div class="bottomBox">about us button, and other information buttons, + cosmetics</div>
</div>
    `;
}

function loginBannerButton()
{
    let html = ''
    if(model.app.user != '' || model.app.user != null)
        {
            html = `<button onclick="loginView()">Logg Inn</button>`
        }
    else {html = `<button onclick="model.app.user = '', model.app.page = 'mainView', pageSwitch()">Logg Ut</button>`}
    return html;
}

function mainView() 
{
    model.app.inView = `<div class="leftMainBox"> News from the bank:<br> ${printBankingNews()}</div>
            <div class="rightMainBox">Financial News:<br> ${printFinancialNews()}</div>`
           updateView() 
}

function printBankingNews() 
{
    let list = '';
    for(let i = 0; i < model.data.newsFromBank.length; i++)
        {
            list += 
            `
            <li> ${model.data.newsFromBank[i]}
            `
        }

    return list
}

function printFinancialNews() 
{
    let list = '';
    for(let i = 0; i < model.data.financialNews.length; i++)
        {
            list += 
            `
            <li> ${model.data.financialNews[i]}
            `
        }

    return list
}

function pageSwitch()
{
    switch(model.app.page) 
    {
        case('logInView'):
            loginView();
            break;
        case('userView'):
            userView()
            break;
        case('mainView'):
            mainView()
            break;
    }
}





