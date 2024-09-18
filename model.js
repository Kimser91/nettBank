let html = document.getElementById('app');


const model = {
    app: {
        userName: '',
        password: '',
        page: 'UserPage',
    },
    input:{
        transfer: '',
        kid: '',
        accountNumber: '',
    },
    data: {
       
        users: [
            {
                name: '',
                userName: '',
                password: '',
                MainBalance: '',
                SavingsAccount: '',
                Billingaccount: '',
            }
        ],

        admins: [
            {
                name: '',
                userName: '',
                password: '',
                adminLevel: '',
                page: 'adminPage'
            }
        ],

        clock: '00:00',
        newsFromBank: [],
        financialNews: [],
        

    },
}

let p = model.data;