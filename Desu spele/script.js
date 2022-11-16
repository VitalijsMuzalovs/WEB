window.addEventListener('DOMContentLoad',() =>{
    const laucini = Array.from(document.querySelectorAll('.tile'))
    const attelotSpeletaju = document.querySelector('.JS-display')
    const poga = document.querySelector('#JS-reset')
    const pazinojums = document.querySelector('.JS-pazinojums')

    let laukums = ['','','','','','','','','']
    let aktivaisSpeletajs = 'X'
    let speleAktiva = true

    const uzvarX = 'uzvarX'
    const uzvarY = 'uzvarY'
    const neizskirts = 'neizskirts'

    /* 
    0 | 1 | 2
    3 | 4 | 5
    6 | 7 | 8
    */

    const uzvarasNosacijumi = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function rezultataParbaude(){
        let irUzvaretajs = false
        for(let i=0; i<=7; i++){
            const nosacijumi = uzvarasNosacijumi[i]
            const a = laukums[nosacijumi[0]]
            const b = laukums[nosacijumi[1]]
            const c = laukums[nosacijumi[2]]
            
            if(a === '' || b === '' || c === ''){
                continue
            }
            
            if(a === b && b === c){
                irUzvaretajs=true
                break
            }
        }

        if(irUzvaretajs){
            pazinot(
                aktivaisSpeletajs==='X' ? uzvarX : uzvarY
            )
            speleAktiva = false
            return
        }

        if(!laukums.includes('')){
            pazinot(neizskirts)
        }
    }

    const pazinot = (uzvaretajs) =>{
        switch(rezultats){
            case uzvarY:
                pazinojums.innerHTML="Spēlētājs <span class='playerO'>O</span> uzvarēja!"
                break
            case uzvarX:
                pazinojums.innerHTML="Spēlētājs <span class='playerX'>X</span> uzvarēja!"
                break
            case neizskirts:
                pazinojums.innerHTML="Neizšķirts!"
        }

        pazinojums.classList.remove('hide')

    }

    const parbaude = (laucins) =>{
        if(laucins.innerText === 'X' || laucins.innerText === 'O'){
            return false
        }

        return true
    }

    const atjaunotLaukumu = (index) => {
        laukums[index] = aktivaisSpeletajs
    }

    const mainitSpeletaju = () => {
        attelotSpeletaju.classList.remove(`player${aktivaisSpeletajs}`) //playerX ||playerY

        if(aktivaisSpeletajs === 'X'){
            aktivaisSpeletajs = 'O'
        }else{
            aktivaisSpeletajs='X'
        }

        attelotSpeletaju.innerText = aktivaisSpeletajs
        attelotSpeletaju.classList.add(`player${aktivaisSpeletajs}`)
    }

    const lietotajaDarbiba = (laucins,index) => {
        if(parbaude(laucins) && speleAktiva){
            laucins.innerText = aktivaisSpeletajs
            laucins.classList.add(`player${aktivaisSpeletajs}`)
            atjaunotLaukumu(index)
            rezultataParbaude()
            mainitSpeletaju()
        }
    }

    const parladetLaukumu = () => {
        laukums = ['','','','','','','','','']
        speleAktiva = true
        pazinojums.classList.add('hide')

        if(aktivaisSpeletajs === 'O'){
            mainitSpeletaju()
        }

        laucini.forEach(laucins => {
            laucins.innerText=''
            laucins.classList.remove('playerX')
            laucins.classList.remove('playerY')
        })
    }

    laucini.forEach((laucins,index)=>{
        laucins.addEventListener('click',() => lietotajaDarbiba(laucins,index))
    })

    poga.addEventListener('click', parladetLaukumu)

})