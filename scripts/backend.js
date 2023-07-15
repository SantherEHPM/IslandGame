/*class Datos{
    constructor(){
        this.data = []
        this.getApi()
    }

    getData(){
        return this.data
        /*setTimeout(()=>{
        if(this.data===undefined){
            this.getData()
        }
        else{
            data = this.data
            return this.data
        }
        },1000)
    }

    async getApi(){
        fetch('../page_config.json')
            .then((req)=>req.json())
            .then((res)=>{
                this.data=Object.assign({},res)
                return this.data
            })
            .catch((error)=>(console.error(error)))
            .finally(await console.log("ajo"));
    }
}*/

class Datos{
    static datos = {}; 
    /*onstructor(){
        
        this.getApi();
    }*/
    static getData(){
        this.getApi()
        return this.datos;
    }
    //Metodo
    static async getApi(){
        fetch("/page_config.json")
            .then(req => req.json())
            .then((res) =>{
                for(let i in res){
                    this.datos[i]=res[i];
                }
                return this.datos;
            })
    }
}

export {Datos}