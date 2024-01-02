import ReadLine from "readline-sync"

const input = (text) => {
    return ReadLine.question(text)
}

console.log("\nAplicação de Juros:\n")

let amountOwed = Number(input("\nInforme o valor devido: R$"))
let daysAfterExpiration = Number(input("\nInforme quantos dias se passaram desde o vencimento do boleto: "))

const debts = {
    amountOwed: amountOwed,
    daysAfterExpiration: daysAfterExpiration,
    fees: null,
    total: null
}

if (debts.amountOwed > 0 && debts.daysAfterExpiration > 0) {
    debts.fees = interestToBeUsed()
    debts.total = (debts.amountOwed * debts.fees) + debts.amountOwed

    console.log("\nValor original da dívida: R$" + debts.amountOwed)
    console.log("Dias atrasados: " + debts.daysAfterExpiration)
    console.log("Taxa de Juros: " + (debts.fees * 100) + "%")
    console.log("Valor total com juros: R$" + debts.total)

} else if (debts.amountOwed === 0) {
    console.log("O valor da dívida deve ser maior que zero!")
} else {
    console.log("Você está em dia!")
}

function interestToBeUsed() {
    return debts.daysAfterExpiration > 15 ? 0.1 : 0.05
}