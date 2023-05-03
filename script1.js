// const myMap = new Map([
//     // this is in dollar convert to indian rupees
//     ['soap', 1],
//     ['laptop', 50],
//     ['computer', 20],
//     ['soap', 2],
// ]);

// for (let key of myMap.keys()) {
//     console.log(`Price of ${key} is ${myMap.get(key)} $ convert into indian rupees is Rs ${myMap.get(key) * 80} `);
// }

const selectEl = document.querySelector('[data-select]')
const formEl = document.querySelector('[data-form]')
const inputNameEl = document.querySelector('[data-input-name]')
const inputPriceEl = document.querySelector('[data-input-price]')
const showDataEl = document.querySelector('[data-showData]')
const addButton = document.querySelector('[data-button]')


let index = 1
let symbolRupees = 'Rs'

function showData(e) {
    let ItemName = inputNameEl.value
    let priceItem = inputPriceEl.value

    if(selectEl.value == "Dollar"){
        priceItem = priceItem * 80
    }

    let newShowDataEl = document.createElement('div')
    newShowDataEl.classList.add('showData')
    newShowDataEl.innerHTML = `
                        <h2 class="NoOf">${index}</h2>
                        <h2 class="item">${ItemName}</h2>
                        <h2 class="price">${priceItem} <span> ${symbolRupees}</span> </h2>`

    formEl.appendChild(newShowDataEl)
    index++;
    inputNameEl.value = ''
    inputPriceEl.value = ''
}


addButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputNameEl.value !== '' && inputPriceEl.value !== '') {
        showData()
    }
})



