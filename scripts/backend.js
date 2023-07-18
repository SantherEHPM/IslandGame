

class Datos{
    json

    static getData(){
        let txtReader= new XMLHttpRequest()

        txtReader.open('GET','../page_config.json',false)
        txtReader.send(false)

        this.json = JSON.parse(txtReader.responseText)

        return this.json;
    }

    static getViewData(view){
        this.getData()
        
        for(let v of this.json.views){
            if(v.tag===view)return v;
        }
    }

    static getCharacterData(character){
        this.getData()
        
        for(let c of this.json.characters){
            if(c.name===character)return c;
        }
    }
    
    static getCharactersData(){
        this.getData()
        
        return this.json.characters;
    }
}


export {Datos}