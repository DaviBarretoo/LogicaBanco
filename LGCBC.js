

function Conta (agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente  Você possuiR$ ${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}`+
    `Saldo: R$ ${this.saldo.toFixed(2)}`
    )
}

//ESPECIALIZANDO SUPERCLASSE

function ContaCorrente( agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype) // linkando os protype
ContaCorrente.prototype.constructor = ContaCorrente; // definindo o construtor

ContaCorrente.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente  Você possuiR$ ${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const ContaCorrente1 = new ContaCorrente(11,22,0,100)

ContaCorrente1.depositar(10)
ContaCorrente1.sacar (100)


function ContaPoupaca( agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo);
    
}
ContaPoupaca.prototype = Object.create(Conta.prototype) 
ContaPoupaca.prototype.constructor = ContaPoupaca; 

const contaPoupaca1 = new ContaPoupaca(12,33,0)

contaPoupaca1.depositar(10)
contaPoupaca1.sacar (100)