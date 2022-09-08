const music = new Audio('taverna_music.mp4');

music.play();
function roller() {
    music.pause();
    const music1 = new Audio('diceroll.mp4');

    music1.play();
    music.play()
    const dice = document.getElementById('faces').value
    const numberDices = document.getElementById('quant').value
    const modoRoll = document.querySelector(
        'input[name=modoroll]:checked'
    ).value
    const pericia = document.getElementById('bonus').value
    document.getElementById('resultBox').innerHTML = ''
    document.getElementsByClassName('img')[0].innerHTML = ``
    if (numberDices >= 1) {
        console.log(dice, numberDices, modoRoll)
        let result = []
        if (modoRoll === 'n') {
            for (let i = 1; i <= numberDices; i++) {
                if (i !== 1) {
                    document.getElementById('resultBox').innerHTML += ', '
                }
                let r = Math.floor(Math.random() * dice) + 1

                document.getElementsByClassName(
                    'img'
                )[0].innerHTML += `<img src="./dados/d${dice}${r}.jpg" alt="" style="width: ${300 / numberDices
                }px; min-width: 100px">`
                document.getElementById('resultBox').innerHTML += r
                r += Number(pericia)
                result.push(r)

            }
        }

        if (modoRoll === 'v') {
            for (let i = 1; i <= numberDices; i++) {
                if (i !== 1) {
                    document.getElementById('resultBox').innerHTML += ', '
                }
                let r1 = Math.floor(Math.random() * dice) + 1
                let r2 = Math.floor(Math.random() * dice) + 1
                document.getElementById('resultBox').innerHTML += r1 + ' - '
                document.getElementById('resultBox').innerHTML += r2
                if (r1 > r2) {
                    result.push(r1 + Number(pericia))
                    document.getElementsByClassName(
                        'img'
                    )[0].innerHTML += `<img src="./dados/d${dice}${r1}.jpg" alt="" style="width: ${300 / numberDices
                    }px; min-width: 100px">`
                } else {
                    result.push(r2 + Number(pericia))
                    document.getElementsByClassName(
                        'img'
                    )[0].innerHTML += `<img src="./dados/d${dice}${r2}.jpg" alt="" style="width: ${300 / numberDices
                    }px; min-width: 100px">`
                }
            }
        }
        if (modoRoll === 'd') {
            for (let i = 1; i <= numberDices; i++) {
                if (i !== 1) {
                    document.getElementById('resultBox').innerHTML += ', '
                }
                let r1 = Math.floor(Math.random() * dice) + 1
                let r2 = Math.floor(Math.random() * dice) + 1
                document.getElementById('resultBox').innerHTML += r1 + ' - '
                document.getElementById('resultBox').innerHTML += r2
                if (r1 < r2) {
                    result.push(r1 + Number(pericia))
                    document.getElementsByClassName(
                        'img'
                    )[0].innerHTML += `<img src="./dados/d${dice}${r1}.jpg" alt="" style="width: ${300 / numberDices
                    }px; min-width: 100px">`
                } else {
                    result.push(r2 + Number(pericia))
                    document.getElementsByClassName(
                        'img'
                    )[0].innerHTML += `<img src="./dados/d${dice}${r2}.jpg" alt="" style="width: ${300 / numberDices
                    }px; min-width: 100px">`
                }
            }
        }
        let total = 0

        for (let i = 0; i < result.length; i++) {
            total += result[i]
        }
        console.log(result)
        document.getElementById('totalBox').innerHTML = total
    } else {
        alert('Você deve rolar no mínimo um dado!')
    }
}
