
const erroMessage = document.querySelector(".error")
const exchangeAmount = document.querySelectorAll('.exchange')
const givenCashInput = document.querySelector('.given-cash');
const givenCashLabel = document.querySelector('.given-cash-label');
const returnExchangeSection = document.querySelector(".return-exchange")


let billAmount, givenCash
const cashArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

// utility functions
const hideError = () => {
    erroMessage.innerHTML = ""
}

const errorMessage = (message) => {
    erroMessage.innerHTML = message
}

const clearTable = () => {
    for (let i = 0; i < exchangeAmount.length; i++) {
        exchangeAmount[i].innerHTML = ""
    }
}

const handelBillAmount = () => {
    billAmount = document.querySelector('.bill-amount').value
}

const handelGivenCash = () => {
    givenCash = document.querySelector('.given-cash').value
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

// Main logic

const handelSubmit = () => {

    if (givenCashInput.style.display === "") {
        givenCashInput.style.display = "block"
    } else {
        if (!billAmount) {
            alert("Please enter bill amount!!")
        } else if (!givenCash) {
            alert("Please enter given cash!!")
        }

        if (givenCash < billAmount) {
            errorMessage(`Given cash is less than bill amount, please check given cash.`)
            returnExchangeSection.style.display = ""
        } else {
            hideError()
            clearTable()
            if (givenCash === billAmount) {
                errorMessage("You had given exact cash of bill amount.")
                returnExchangeSection.style.display = ""
            } else {
                returnExchangeSection.style.display = "block"
                fillTableNotes()
            }
        }
    }
}
