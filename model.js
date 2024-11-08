
const model = {
    app: {
        user: {},
        page: 'mainView',
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
                    id: 1,
                    name: "Olav Hansen",
                    userName: "olav.hansen1",
                    password: "Sikker123",
                    accountNumber: 100001,
                    MainBalance: 24500.75,
                    SavingsAccount: 18000.50,
                    Billingaccount: 5300.25
                },
                {
                    id: 2,
                    name: "Maria Johansen",
                    userName: "maria.johansen2",
                    password: "Passord456",
                    accountNumber: 100002,
                    MainBalance: 5000.00,
                    SavingsAccount: 12000.00,
                    Billingaccount: 1500.00
                },
                {
                    id: 3,
                    name: "Knut Olsen",
                    userName: "knut.olsen3",
                    password: "KnutPass789",
                    accountNumber: 100003,
                    MainBalance: 300.00,
                    SavingsAccount: 5000.00,
                    Billingaccount: 500.00
                },
                {
                    id: 4,
                    name: "Elisabeth Pettersen",
                    userName: "elisabeth.p4",
                    password: "Elisabeth2024",
                    accountNumber: 100004,
                    MainBalance: 12000.25,
                    SavingsAccount: 15000.00,
                    Billingaccount: 3500.75
                },
                {
                    id: 5,
                    name: "Henrik Eriksen",
                    userName: "henrik.eriksen5",
                    password: "ErikHenrik1",
                    accountNumber: 100005,
                    MainBalance: 8000.00,
                    SavingsAccount: 22000.10,
                    Billingaccount: 2800.50
                },
                {
                    id: 6,
                    name: "Nina Sørensen",
                    userName: "nina.sorensen6",
                    password: "NinaSecure7",
                    accountNumber: 100006,
                    MainBalance: 13500.50,
                    SavingsAccount: 9500.25,
                    Billingaccount: 4000.75
                },
                {
                    id: 7,
                    name: "Johan Mikkelsen",
                    userName: "johan.mikkelsen7",
                    password: "Johan789",
                    accountNumber: 100007,
                    MainBalance: 7100.00,
                    SavingsAccount: 10500.50,
                    Billingaccount: 1500.00
                },
                {
                    id: 8,
                    name: "Silje Nilsen",
                    userName: "silje.nilsen8",
                    password: "SiljeSecure123",
                    accountNumber: 100008,
                    MainBalance: 22000.00,
                    SavingsAccount: 5000.75,
                    Billingaccount: 8500.30
                },
                {
                    id: 9,
                    name: "Anders Larsen",
                    userName: "anders.larsen9",
                    password: "AndersPass123",
                    accountNumber: 100009,
                    MainBalance: 5400.00,
                    SavingsAccount: 15000.50,
                    Billingaccount: 600.00
                },
                {
                    id: 10,
                    name: "Kristin Berg",
                    userName: "kristin.berg10",
                    password: "Kristin2024",
                    accountNumber: 100010,
                    MainBalance: 9800.00,
                    SavingsAccount: 18000.00,
                    Billingaccount: 3200.00
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

