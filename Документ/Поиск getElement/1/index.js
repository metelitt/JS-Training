// 1. Таблица с `id="age-table"`.
let table = document.getElementById('age-table')

// 2. Все label в этой таблице
table.getElementsByTagName('label')
// или
document.querySelectorAll('#age-table label')

// 3. Первый td в этой таблице
table.rows[0].cells[0]
// или
table.getElementsByTagName('td')[0]
// или
table.querySelector('td')
let form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]')
form.getElementsByTagName('input')[0]
form.querySelector('input')
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]