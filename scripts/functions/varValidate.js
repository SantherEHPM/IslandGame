const variableExist = (variable,exist,nonExist=(()=>console.error('Variable non-exist'))) => {
    if(!(variable===undefined || variable===null || variable === ""))exist(variable)
    else nonExist()
}

const setElementAttribute = (element,content,attribute) =>{
    variableExist(content,()=>{
        if(attribute!=undefined) element.setAttribute(attribute,content)
        else element.innerHTML = content
    },()=>{
        element.remove()
    })
}

export { variableExist,setElementAttribute }