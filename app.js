let toggleCases = Array.from(document.querySelectorAll('.togglecase'));
const tBody = document.querySelector('tbody')
const btnReset = document.querySelector('.btn-reset');
const resetSucces = document.querySelector('p')
let jours = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi']
let tableauUsers = ['Enzo','Marie','Leia','Luc']
const btnAdd = document.querySelector('.btn-add');
let newJour;
let newLines;

tableauUsers.forEach(user => {

    ajouterUneLigne(user)
    ajouterCase()

})
   

function ajouterCase(){
    jours.forEach(() => {
        newJour = document.createElement('td')
        newLines.appendChild(newJour)
        newJour.innerHTML = "Télétravail"
        newJour.classList.add('togglecase')
        newJour.addEventListener('click',(e) => {
            e.target.classList.toggle('active')
        })
    })
    
}

function ajouterUneLigne(userName){
    newLines = document.createElement('tr')
    let newTd = document.createElement('td');
    
    if (!userName) {
        let input = document.createElement('input')
        input.setAttribute('placeholder','Entrez votre nom')
        newTd.appendChild(input)
        tableauUsers.push(input)
    } else {
        newTd.innerHTML = userName
    }


    newLines.appendChild(newTd)
    tBody.appendChild(newLines)

}


function resetToggleCase(){

    const toggleCases = Array.from(document.querySelectorAll('.togglecase'))
    for(let i = 0; i < toggleCases.length; i++){
        
        if(toggleCases[i].classList.contains('active')){

            toggleCases[i].classList.remove('active')
            resetSucces.classList.add('activeParagraphe')
            setTimeout(() => {
                resetSucces.classList.remove('activeParagraphe')
            },5000)
        }

    } 
    
}

btnAdd.addEventListener('click',() => {
   
    ajouterUneLigne();
    ajouterCase();
    
})   
          
btnReset.addEventListener('click',() => {
    resetToggleCase()
})






