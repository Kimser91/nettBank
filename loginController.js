function checkUsers()
{
    let inp = model.input
    let app = model.app
    if(inp.userName != null && inp.password != null || inp.userName != '' && inp.password != '' ){
    for(let i = 0; i < model.data.users.length; i++) 
        {
            if(model.data.users[i].userName === model.input.userName && model.data.users[i].password === model.input.password)
                {
                    app.user = model.data.users[i]
                    app.page = 'userView'
                    updateView()
                }
        }
    }
    else{app.errorMessage = `Enter Username and Password`; updateView();}
}
