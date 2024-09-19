let html = document.getElementById('app');


const model = {
    app: {
        userName: '',
        password: '',
        id: '',
        page: 'UserPage',
    },
    input:{
        transfer: '',
        kid: '',
        accountNumber: '',
    },
    data: {
        inView: '',
        accountView: '',
        users: [
            {
                name: 'Kim',
                userName: '',
                password: '',
                MainBalance: 7000,
                SavingsAccount: 30000,
                Billingaccount: 15000,
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
        newsFromBank: ['Now interests are only 3.5% Get your new loans today!'],
        financialNews: ['Financial world are on the brink of colaps, save your money!'],
        

    },
}

let p = model.data;