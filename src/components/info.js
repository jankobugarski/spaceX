class Info{

    constructor(data){
        this.data=data;
        this.name=data.name;
        this.founded=data.founded;
        this.founder=data.founder

        this.naslov=document.createElement('header')
        this.naziv=document.createElement('h1')
        this.osnovano=document.createElement('h1')
        this.osnivac=document.createElement('h1')
        this.naziv.innerText=this.name;
        this.osnovano.innerText=this.founded;
        this.osnivac.innerText=this.founder;

        this.naslov.appendChild(this.naziv)
        this.naslov.appendChild(this.osnovano)
        this.naslov.appendChild(this.osnivac)
        
    }
    getNode(){
        return this.naslov
    }
}

export {Info}