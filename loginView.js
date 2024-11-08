

function loginView()
{
    model.app.inView = /*html*/ 
    `
    <div class="accountView">
        <label for="userName">Brukernavn</label>
        <input id="userName" type="text" onchange="model.input.userName = this.value">
        <label for="password">Passord</label>
        <input id="password" type="password" onchange="model.input.password = this.value">
        <button onclick="checkUsers()">Logg Inn</button>
        <div>${model.app.errorMessage}</div>
    </div>
    `
    
    updateView()
}
