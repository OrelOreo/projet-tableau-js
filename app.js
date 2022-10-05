let toggleCases = Array.from(document.querySelectorAll('.togglecase'));
const tBody = document.querySelector('tbody')
const btnReset = document.querySelector('.btn-reset');
const resetSucces = document.querySelector('p')
let jours = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi']
let tableauUsers = ['Enzo','Marie','Leia','Luc']
const btnAdd = document.querySelector('.btn-add');
let newJour;
let newLines;
let toutesLesLignes = [];

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

function getId(){
    return Date.now()
}

function ajouterUneLigne(userName){

    newLines = document.createElement('tr');
    newLines.setAttribute('data-key', getId())
    let newTd = document.createElement('td');
    toutesLesLignes.push(newLines);
    
    if (!userName) {
        // let tdBtnSupr = document.createElement('td')
        const btn = document.createElement('button');
        const img = document.createElement('img');
        img.setAttribute('src','ressources/fermer.svg');
        btn.appendChild(img);
        // tdBtnSupr.appendChild(btn);
        // newLines.appendChild(tdBtnSupr);
        btn.addEventListener('click',supprimerLigne)
        newLines.appendChild(btn);
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

function supprimerLigne(e){
    toutesLesLignes.forEach(el => {
        
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            newLines.remove();
            toutesLesLignes = toutesLesLignes.filter(line => line.dataset.key !== el.dataset.key)
        }
    })
}

console.log(toutesLesLignes);
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






