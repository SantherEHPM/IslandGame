import { Datos } from '../backend.js'

let data = Datos.getViewData('story')

document.body.querySelector('#front-img').setAttribute('src',data.front_img)