let input = document.getElementById('input')
let result = document.getElementById('result')
let history = document.getElementById('history')
let btns = document.querySelectorAll('.btn')

let data = []

btns.forEach(btn => {
    if (btn.value !== '=') {
        btn.addEventListener('click', () => {
            input.value += btn.value
        })
    }
})

let equal = () => {
    if (input.value.trim() !== '') {
        try {
            let evaluated = eval(input.value)
            result.value = evaluated

            let obj = {
                inp: input.value,
                res: evaluated
            }

            data.push(obj)
            renderHistory()
        } catch (e) {
            result.value = 'Error'
        }
    }
}

let renderHistory = () => {
    if (data.length === 0) {
        history.innerHTML = '<h1 id="empty"> No history yet </h1>'
        return
    }

    history.innerHTML = ''
    data.forEach(his => {
        history.innerHTML += `
            <div class="historyItem">
                <h3>${his.inp}</h3>
                <h2> = ${his.res}</h2>
            </div>`
    })
}

let allclear = () => {
    input.value = ''
    result.value = ''
}

function backspace() {
    input.value = input.value.slice(0, -1)
}

function toggleHistory() {
    if (history.style.display === 'none') {
        history.style.display = 'flex'
    } else {
        history.style.display = 'none'
    }
}
