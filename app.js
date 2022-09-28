let toggleCases = Array.from(document.querySelectorAll('.togglecase'));
const tBody = document.querySelector('tbody')
const btnReset = document.querySelector('.btn-reset');
const resetSucces = document.querySelector('p')
let jours = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi']
let tableauUsers = ['Enzo','Marie','Leia','Luc']
const btnAdd = document.querySelector('.btn-add');



// Quand clique sur btn alors créer plusieurs balises et les ajoute. 

btnAdd.addEventListener('click',() => {

    let newLines = document.createElement('tr')
    let newTd = document.createElement('td')
    let input = document.createElement('input')
    tBody.appendChild(newLines)
    newLines.appendChild(newTd)
    newTd.appendChild(input)
    
    
    jours.forEach(j => {
        let newJour = document.createElement('td')
        j.innerHTML = toggleCases
        newLines.appendChild(newJour)
        newJour.innerHTML = "Télétravail"
        newJour.addEventListener('click',(e) => {
            e.target.classList.toggle('active')
          })
        newJour.classList.add('togglecase')

        

        
    })
    
})


// Pour chaque users on créer balise tr et à l'intérieur un td qui contient les noms du tableauUsers

tableauUsers.forEach(user => {

    let userTag = document.createElement('tr')
    let el =  document.createElement('td')
    el.innerHTML = user
    tBody.appendChild(userTag)
    userTag.appendChild(el)

// Pour chaque jour on créer des td , on ajoute du texte dans les td et on ajoute la classe "togglecase"
    jours.forEach(el => {

        let newEl = document.createElement('td')
        el.innerHTML = toggleCases
        userTag.appendChild(newEl)
        newEl.innerHTML = "Télétravail"
        newEl.classList.add('togglecase')
        
    })
})

// Redéclaration du tableau car on a ajouté de nouveaux éléments aux tableau
toggleCases = Array.from(document.querySelectorAll('.togglecase'));



// Ajout de la classe active sur chaque element qui ont la classe togglecase

toggleCases.forEach(togglecase =>{

    togglecase.addEventListener('click',(e) => {
        
        for(let i = 0; i < toggleCases.length; i++){

            if(toggleCases[i] === e.target ){
                toggleCases[i].classList.toggle('active')    
                               
            }
        }
    }
    )
   
})

// Bouton de suppression des éléments qui ont la classe active & ajout d'un paragraphe disant que les éléments ont bien été supp.
btnReset.addEventListener('click',() => {
    for(let i = 0; i < toggleCases.length; i++){

        if(toggleCases[i].classList.contains('active')){

            toggleCases[i].classList.remove('active')
            resetSucces.classList.add('activeParagraphe')
            setTimeout(()=> {
                resetSucces.classList.remove('activeParagraphe')
            },5000)

        }
    }
})


