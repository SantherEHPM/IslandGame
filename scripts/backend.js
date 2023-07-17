

class Datos{
    static getData(){
        let txtReader= new XMLHttpRequest()

        txtReader.open('GET','../page_config.json',false)
        txtReader.send(false)

        this.json = JSON.parse(txtReader.responseText)

        return this.json;
    }

    static getViewData(view){
        let txtReader= new XMLHttpRequest()

        txtReader.open('GET','../page_config.json',false)
        txtReader.send(false)

        this.json = JSON.parse(txtReader.responseText)
        
        for(let v of this.json.views){
            if(v.tag===view)return v;
        }
    }
}


export {Datos}