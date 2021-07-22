
const erroMessage = document.querySelector(".error")
const exchangeAmount = document.querySelectorAll('.exchange')

let billAmount, givenCash
const cashArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

const errorMessage = (message) => {
    erroMessage.innerHTML = message
}

const handelBillAmount = () => {
    billAmount = document.querySelector('.bill-amount').value
}

const handelGivenCash = () => {
    givenCash = document.querySelector('.given-cash').value
}

const clearTable = () => {
    for (let i = 0; i < exchangeAmount.length; i++) {
        exchangeAmount[i].innerHTML = ""
    }
}

const fillTableNotes = () => {
    let amountToBeTaken = givenCash - billAmount
    cashArray.map((currCash, index) => {
        if (currCash <= amountToBeTaken) {
            let noteCount = Math.trunc(amountToBeTaken / currCash)
            amountToBeTaken = amountToBeTaken - noteCount * currCash;
            exchangeAmount[index].innerHTML = `${noteCount}`
        }
    })
}

const handelSubmit = () => {
    if (!billAmount) {
        alert("Please enter bill amount!!")
    } else if (!givenCash) {
        alert("Please enter given cash!!")
    }

    clearTable();

    if (givenCash < billAmount) {
        errorMessage(`Given cash is less than bill amount, please check given cash.`)
    } else {
        if (givenCash === billAmount) {
            console.log("You had given exact cash of bill amount.")
        } else {
            fillTableNotes()
        }
    }
}
