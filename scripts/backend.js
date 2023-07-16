

class Datos{

    static getData(){
        let txtReader= new XMLHttpRequest()

        txtReader.open('GET','../page_config.json',false)
        txtReader.send(false)

        this.json = JSON.parse(txtReader.responseText)

        return this.json;
    }
}


export {Datos}