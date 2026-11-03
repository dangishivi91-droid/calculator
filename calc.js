let input = document.getElementById('input')
let result = document.getElementById('result')
let history = document.getElementById('history')
let btns = document.querySelectorAll('.btn')

let data = []


btns.forEach
    (btn => btn.value != "=" && btn.addEventListener('click', () => {
        input.value += btn.value
    }))

let equal = () => {
    if
        (input.value != '') {
        (result.value = eval(input.value))

        let obj = {
            inp: input.value,
            res: result.value
        }


        data.push(obj)
        console.log(data);

        
        history,innerHTML = ''

        data.forEach(his => {

            history.innerHTML +=`
                <div class="historyItem">
                    <h3>${his.inp}</h3>
                    <h2> = ${his.res}</h2>
                </div>`

        })


    }


}

let allclear = () => {
    input.value = ''
    result.value = ''
}
function backspace() {
    input.value = input.value.slice(0, -1)
}