// Módulos externos
import inquirer from 'inquirer';
import chalk from 'chalk';

// Módulos internos
import fs from 'fs';

operation()

function operation() {

    inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    },
]).then((answer) => {
    const action = answer['action']

    if(action === 'Criar Conta'){
        createAccount()
    } else if(action === 'Consultar Saldo') {
        deposit()
    } else if(action === 'Depositar') {

    } else if(action === 'sacar') {

    } else if(action === 'Sair') {
        console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
        process.exit()
    }

})
.catch((err) => console.log(err))

}

//Create an account
function createAccount() {

    console.log(chalk.bgGreen('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções de sua conta a seguir'))

    buildAccount()

}

function buildAccount() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta: '
        },
    ]).then((answer) => {
        const accountName = answer['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Este nome de usuário ja existe, tente outro nome.'),)

            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, `('balance': 0)`, function(err){console.log(err)},)

        console.log(chalk.green('parabéns, a sua conta foi criada'))

        operation()
    })
    .catch((err) => console.log(err))
}

// add an amount to user account

function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        },
    ])
    .then((answer) => {

        const accountName = answer['accountName']

        //verify if account exists
        if(!checkAccount(accountName)) {
            return deposit()
        }
    })
    .catch(err => console.log(err))

}

function checkAccount(accountName) { // Adicione accountName como argumento
    if(!fs.existsSync(`accounts/${accountName}.json`)) { // Use accountName em vez de accountsName
        console.log(chalk.bgRed.black('Esta conta não existe, tente novamente!'))
        return false
    }

    return true
}