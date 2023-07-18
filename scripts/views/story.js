import { Datos } from '../backend.js'
import { setElementAttribute } from '../functions/varValidate.js'

let view = Datos.getViewData('story')
let characters = Datos.getCharactersData()

document.body.querySelector('#front-img').setAttribute('src',view.front_img) 

const charactersFragment = document.createDocumentFragment()
const charactersTemplate = document.querySelector('#character_template').content

const createCard = (name,story,img) => {
    const characterClone = charactersTemplate.cloneNode(true)

    console.log(characterClone.querySelector('.character_info'))

    setElementAttribute(characterClone.querySelector('img'),img,'src')
    setElementAttribute(characterClone.querySelector('.character_info').querySelector('h2'),name)
    setElementAttribute(characterClone.querySelector('.character_info').querySelector('p'),story)

    return characterClone
}

let ctrl=1

for(let ch of characters){
    charactersFragment.appendChild(createCard(ch.name,ch.story,ch.main_img))
}

document.body.querySelector('#characters').appendChild(charactersFragment)


