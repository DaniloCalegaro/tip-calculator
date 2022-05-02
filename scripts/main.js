const inputBill = document.querySelector('#input-bill')
const valuesTip = document.querySelector('.list-tip')
const itemstTip = document.querySelectorAll('.list-tip li button')
const inputOutherTip = document.querySelector('#outher-tip-value')
const inputNumberPeople = document.querySelector('#input-number-people')
const buttonReset = document.querySelector('#button-reset')
const labelTipAmount = document.querySelector('#tip-amount')
const labelTotalBill = document.querySelector('#total-bill')

const spanNumberPeopleError = document.querySelector('.number-people-error')

let tipSelected = 0

function deselectTip() {
  itemstTip.forEach(itemTip => {
    //console.log(itemBill.textContent)
    itemTip.classList.remove('selected')
  })
}

function activateReset(status) {
  if (status) {
    buttonReset.classList.add('active')
  } else {
    buttonReset.classList.remove('active')
  }
}

function activateAlertNumberOfPeople(status) {
  if (status) {
    spanNumberPeopleError.classList.add('show')
    inputNumberPeople.classList.add('error')
  } else {
    spanNumberPeopleError.classList.remove('show')
    inputNumberPeople.classList.remove('error')
  }
}

const checkNumberOfPeopleZero = () => {
  let numberOfPeopleZero
  if (
    inputNumberPeople.value === '' ||
    parseInt(inputNumberPeople.value) <= 0
  ) {
    activateAlertNumberOfPeople(true)
    numberOfPeopleZero = true
  } else {
    activateAlertNumberOfPeople(false)
    numberOfPeopleZero = false
  }
  return numberOfPeopleZero
}

const calculatePerson = (bill, porcentageTip, numberOfPeople) => {
  let valueTipAmoutPerson = (bill * porcentageTip) / 100 / numberOfPeople
  let valueTotalPerson = (bill + (bill * porcentageTip) / 100) / numberOfPeople
  modifyLabelsTipAmountAndTotal(
    valueTipAmoutPerson.toFixed(2),
    valueTotalPerson.toFixed(2)
  )
  //console.log(bill + ' ' + porcentageTip + ' ' + numberOfPeople)
}

function modifyLabelsTipAmountAndTotal(tipAmount, total) {
  labelTipAmount.textContent = tipAmount
  labelTotalBill.textContent = total
}

//---- Events ---//

inputBill.addEventListener('input', function () {
  //console.log(inputBill.value)
  if (!checkNumberOfPeopleZero()) {
    calculatePerson(
      parseFloat(inputBill.value),
      tipSelected,
      parseFloat(inputNumberPeople.value)
    )
  }
  activateReset(true)
})

valuesTip.addEventListener('click', e => {
  deselectTip()
  //console.log(e.target)
  if (e.target.matches('button')) {
    tipSelected = parseFloat(e.target.textContent.replace('%', ''))
    e.target.classList.add('selected')

    if (!checkNumberOfPeopleZero()) {
      calculatePerson(
        parseFloat(inputBill.value),
        tipSelected,
        parseFloat(inputNumberPeople.value)
      )
    }
    activateReset(true)
  }
})

inputOutherTip.addEventListener('input', e => {
  checkNumberOfPeopleZero()
  tipSelected = parseFloat(e.target.value)

  if (!checkNumberOfPeopleZero()) {
    calculatePerson(
      parseFloat(inputBill.value),
      tipSelected,
      parseFloat(inputNumberPeople.value)
    )
  }

  activateReset(true)
})

inputNumberPeople.addEventListener('input', function () {
  checkNumberOfPeopleZero()

  if (!checkNumberOfPeopleZero()) {
    calculatePerson(
      parseFloat(inputBill.value),
      tipSelected,
      parseFloat(inputNumberPeople.value)
    )
  }

  activateReset(true)
})

buttonReset.addEventListener('click', function () {
  activateReset(false)
  inputBill.value = null
  inputOutherTip.value = null
  inputNumberPeople.value = null
  activateAlertNumberOfPeople(false)
  modifyLabelsTipAmountAndTotal('0.00', '0.00')
  deselectTip()
})
