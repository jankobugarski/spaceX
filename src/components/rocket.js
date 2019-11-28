import { getCompanyLaunches } from '../utilits/space-x-servis';

class Rockets {
    constructor(data) {

        this.data = data;
        this.name = data.mission_name;
        this.godinaMisije = data.launch_year;
        this.nazivRakete = data.rocket.rocket_name;
        this.slika = data.links.mission_patch;

        this.sekcija = document.createElement('section')
        this.ime = document.createElement('p')
        this.godina = document.createElement('p')
        this.raketa = document.createElement('p')
        this.img = document.createElement('img')
        this.img.src = this.slika


        this.ime.innerText = this.name;
        this.godina.innerText = this.godinaMisije;
        this.raketa.innerText = this.nazivRakete;
        this.sekcija.appendChild(this.ime)
        this.sekcija.appendChild(this.godina)
        this.sekcija.appendChild(this.raketa)
        this.sekcija.appendChild(this.img)

    }


    getNode() {
        return this.sekcija
    }


}




export { Rockets }