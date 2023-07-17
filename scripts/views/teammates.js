'use strict'

import { variableExist,setElementAttribute } from "../functions/varValidate.js";
import { Datos } from "../backend.js"
const DATA = Datos.getData();

const createTeammateCard = (img,name,workload,introduction) => {
    const cardTemplate = document.body.querySelector('#teammate_card').content
    const cardClone = cardTemplate.cloneNode(true)
    setElementAttribute(cardClone.querySelector('img'),img,'src')
    setElementAttribute(cardClone.querySelector('img'),name,'alt')
    setElementAttribute(cardClone.querySelector('#name'),name)
    setElementAttribute(cardClone.querySelector('#workload'),workload)
    setElementAttribute(cardClone.querySelector('#introduction'),introduction)
    console.info(cardClone)

    return cardClone
}

const teamFragment = document.createDocumentFragment()
console.log(DATA.teammates)

for(let t of Object.values(DATA.teammates)){
    teamFragment.appendChild(createTeammateCard(t.img_route,t.name,t.workload,t.introduction))
}

const teamSection = document.body.querySelector('#team')

teamSection.appendChild(teamFragment)