let html = document.getElementById('app');


const model = {
    app: {
        userName: '',
        password: '',
        id: '',
        page: 'UserPage',
    },
    input:{
        
        transfer: 0,
        
        payBills: {
            kid: null,
            accountNumber: null,
            amount: null,
        },
    },
    data: {
        inView: '',
        accountView: '',
        users: [
            {
                name: 'Kim',
                userName: '',
                password: '',
                accountNumber: 1,
                MainBalance: 7000,
                SavingsAccount: 30000,
                Billingaccount: 15000,
            },

            {
                name: 'Vigdis',
                userName: '',
                password: '',
                accountNumber: 2,
                MainBalance: 7000,
                SavingsAccount: 30000,
                Billingaccount: 15000,
            },

            {
                name: 'Lars',
                userName: '',
                password: '',
                accountNumber: 3,
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
        newsFromBank: ['Now interests are only 3.5% Get your new loans today!', 'New form of loan 10% no '],
        financialNews: ['Financial world are on the brink of colaps, save your money!'],
        

    },
}

let p = model.data;