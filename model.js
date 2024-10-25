
const model = {
    app: {
        user: {},
        page: 'UserPage',
        inView: '',
        errorMessage: '',
        html: document.getElementById('app'),
    },
    input:{
        userName: null,
        password: null,
        transfer: 0,
        
        payBills: {
            kid: null,
            accountNumber: null,
            amount: null,
        },
    },
    data: {
       
        accountView: '',
        users: [
            {
                name: 'Kim',
                userName: 'a',
                password: 'a',
                accountNumber: 1,
                MainBalance: 7000,
                SavingsAccount: 30000,
                Billingaccount: 15000,
            },

            {
                name: 'Vigdis',
                userName: 'b',
                password: 'b',
                accountNumber: 2,
                MainBalance: 7000,
                SavingsAccount: 30000,
                Billingaccount: 15000,
            },

            {
                name: 'Lars',
                userName: 'c',
                password: 'c',
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

