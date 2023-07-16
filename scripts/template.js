//Obtención de datos base
import { Datos } from "./backend.js"
const DATA = Datos.getData();

const header = document.createElement('header')
const mainNav = document.createElement('nav')
const contextNav = document.createElement('nav')
const footer = document.createElement('footer')
const main = document.querySelector('main')

let actualView = {}

console.log(DATA)

const setMeta = () =>{
    const head = document.querySelector('head')

    head.querySelector('title').textContent = DATA.game_name

    const meta = document.createElement('meta')

    for(let metadata of DATA.metadata){
        const metaClone = meta.cloneNode(true)
        for(let m in metadata ){
            console.log(m)
            metaClone.setAttribute(m,metadata[m])
        }
        head.appendChild(metaClone)
    }

    const link = document.createElement('link')

    for(let lin of DATA.links){
        const linkClone = link.cloneNode(true)
        for(let l in lin ){
            linkClone.setAttribute(l,lin[l])
        }
        head.appendChild(linkClone)
    }
    for(let v of DATA.views){
        if(window.location.pathname.includes(v.tag)){
            Object.assign(actualView,v)
            break
        }
    }
    
    const stylesheet = document.createElement('link')
    const script = document.createElement('script')

    stylesheet.setAttribute('href',`/styless/${actualView.route}${actualView.tag}/${actualView.tag}.css`)
    stylesheet.setAttribute('rel','stylesheet')

    script.setAttribute('src',`/scripts/${actualView.route}${actualView.tag}.css`)

    document.head.appendChild(stylesheet)
}

const setMainNav = () => {
    const a = document.createElement('a')

    console.log(window.location.pathname)

    for(let n of DATA.views){
        const aClone = a.cloneNode(true)
        aClone.textContent = n.title
        if(n.view_route==window.location.pathname){ 
            aClone.classList.toggle('active_view')
        }
        else {
            aClone.classList.toggle('available_view')
            aClone.setAttribute('href',`/${n.route}${n.tag}.html`)
        }
        
        mainNav.appendChild(aClone)
    }
    /*
    mainNav.addEventListener("contextmenu",(event)=>{
        event.preventDefault();
    }, false);

    mainNav.addEventListener("copy", function(event){
        // Change the copied text if you want
        event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
        
        // Prevent the default copy action
        event.preventDefault();
    }, false);*/

}

const setHeader = () =>{
    setMainNav()

    const img = document.createElement('img')
    img.setAttribute('src',DATA.game_logo)
    img.setAttribute('alt','game_logo')
    header.appendChild(img)
    header.appendChild(mainNav)
    main.before(header)
}

const setFooter = () =>{
    const license = document.createElement('span')
    license.textContent = 'Se me olvido que se escribe xd'
    footer.appendChild(license)
    main.after(footer)
}

const setMain = () => {
    try{
            document.body.querySelector('main').querySelector('section').classList.add('first-section')
            console.warn('ajo')
    }
    catch(e){console.error(e)
    }

    
}

const renderTemplate = () =>{
    setMeta()
    setHeader()
    setMain()
    setFooter()
}

renderTemplate()