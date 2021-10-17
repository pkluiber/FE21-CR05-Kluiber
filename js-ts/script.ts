// Start Sigh

interface sighes {
  sighsehenw: string;
  sighimg: string;
  sighlinks: string;
  
}

class sigh implements sighes {
  sighsehenw: string;
  sighimg: string;
  sighlinks: string;

  constructor (sighsehenw: string,   sighimg: string, sighlinks: string) {
    this.sighsehenw = sighsehenw; 
    this.sighimg = sighimg; 
    this.sighlinks = sighlinks;
  }




  printInfo () {
    return `<div class="col-sm-6"><div class="card">
    <img src="${this.sighimg}" class="card-img-top" alt="image">
    <div class="card-body">
      <p class="card-text">Sight: ${this.sighsehenw}</p>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Link: ${this.sighlinks}</li>

        </ul>
    </div>
  </div>
  </div>`
  }
}
let sigh1 = new sigh ("The Hainburg Castle", "image/castle.jpg", "https://www.tripadvisor.at/Attraction_Review-g1071606-d10059567-Reviews-The_Hainburg_Castle-Hainburg_an_der_Donau_Lower_Austria.html");

let sigh2 = new sigh ("Braunsberg", "image/braunsberg.jpg", "https://www.tripadvisor.at/Attraction_Review-g1071606-d12423299-Reviews-Braunsberg-Hainburg_an_der_Donau_Lower_Austria.html");

let hain : Array<sigh> = [sigh1, sigh2];
for (let sigh of hain) {
    (document.getElementById("cardone") as HTMLElement).innerHTML += sigh.printInfo();
}
// End Sigh


// Start Restaurant
interface restaurants {
  location: string;
  img: string;
  restlink: string;
  
}

class restaurant implements restaurants {
  location: string;
  img: string;
  restlink: string;

  constructor (location: string, img: string, restlink: string) {
    this.location = location; 
    this.img = img; 
    this.restlink = restlink;
  }

  printInfo () {
    return `<div class="col-sm-6"><div class="card">
    <img src="${this.img}" class="card-img-top" alt="image">
    <div class="card-body">
      <p class="card-text">location: ${this.location}</p>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Link: ${this.restlink}</li>

        </ul>
    </div>
  </div>
  </div>`
  }
}



let rest1 = new restaurant ("LIVIOS Cafe Bar Gartencenter", "image/livios.jpg", "https://livios.at/");

let rest2 = new restaurant ("Karnunt Restaurant", "image/karnut.jpg", "https://www.karnunt.at/");

let rest : Array<restaurant> = [rest1, rest2];
for (let restaurant of rest) {
    (document.getElementById("cardtwo") as HTMLElement).innerHTML += restaurant.printInfo();
}
// End Restaurant 






// Start Event
interface events {
  name: string;
  link: number;
  date: number;
  location: string;
  price: number;
  img: string;
  
}

class even implements events {
  name: string;
  eventlink: string;
  eventdate: string;
  location: string;
  eventprice: string;
  img: string;

  
  constructor (name: string, eventlink: string, eventdate: string, location: string, eventprice: string, img: string,) {
      this.name = name;
      this.eventlink = eventlink;
      this.eventdate = eventdate;
      this.location = location;
      this.eventprice = eventprice;
      this.img = img;

  }
  
  printInfo () {
    return `<div class="col-sm-6"><div class="card">
    <img src="${this.img}" class="card-img-top" alt="image">
    <div class="card-body">
      <p class="card-text">Name : ${this.name}</p>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Location : ${this.location} km</li>
      <li class="list-group-item">Date : ${this.eventdate}</li>
      <li class="list-group-item">Price : ${this.eventprice}</li>
      <li class="list-group-item">Link : ${this.eventlink}</li>
    </ul>
    </div>
  </div>
  </div>`}
}

let eve1 = new even ("Dorothy Khadem-Missagh", "https://www.dorothy-khadem-missagh.com/", "23. Okt. 2021, 18:00 - 20:30 Uhr", "Kulturplatz 1, 2410 Hainburg an der Donau", "Erwachsene: 30 Euro, Ermäßigt 1: 27 Euro, Jugendliche und Studierende 2: 16 Euro, Kinder bis 6 Jahre: Eintritt frei", "image/Khadem-Missagh.jpg");

let eve2 = new even ("Matthias Bartolomey", "https://www.matthiasbartolomey.at/", "27. Nov. 2021, 18:00 - 20:30 Uhr", "Kulturplatz 1, 2410 Hainburg an der Donau", "Erwachsene: 30 Euro, Ermäßigt 1: 27 Euro, Jugendliche und Studierende 2: 16 Euro, Kinder bis 6 Jahre: Eintritt frei", "image/Bartolomey.jpg" );


let eve : Array<even> = [eve1, eve2];
for (let even of eve) {
    (document.getElementById("cardthree") as HTMLElement).innerHTML += even.printInfo();
  
  }
// End Event