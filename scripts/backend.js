class Datos{
    constructor(){
        this.data=[]
        this.getApi()
    }

    getData(){
        return this.data
    }

    getApi(){
        fetch('../page_config.json')
            .then((req)=>{
                return req.json()
            })
            .then((res)=>{
                this.data = {...res}
                return(res)
            })
    }
}

export {Datos}