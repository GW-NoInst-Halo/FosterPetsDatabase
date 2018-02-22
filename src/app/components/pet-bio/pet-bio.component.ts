import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-bio',
  templateUrl: './pet-bio.component.html',
  styleUrls: ['./pet-bio.component.css']
})
export class PetBioComponent implements OnInit {
  /** javascript begin **/
  /**  var animalPics[0] = {
      image: new Image(),
      src: "catLisa.jpeg"
    };
    animalPics[1] = {
      image: new Image(),
      src: "catSabrina.jpeg"
    };
    animalPics[2] = {
      image: new Image(),
      src: "catSaber.jpeg"
    };
    animalPics[3] = {
      image: new Image(),
      src: "dogBoss.jpeg"
    };
    animalPics[4] = {
      image: new Image(),
      src: "dogShelbie.jpeg"
    };
    animalPics[5] = {
      image: new Image(),
      src: "kittenSnow.jpeg"
    };
    animalPics[6] = {
      image: new Image(),
      src: "pupLucas.jpeg"
    };
    animalPics[7] = {
      image: new Image(),
      src: "dogRenzio.jpeg"
    };
    animalPics[8] = {
      image: new Image(),
      src: "kittenBubbles.jpeg"
    };
    animalPics[9] = {
      image: new Image(),
      src: "pupBryan.jpeg"
    };
**/
    petBreed: string;
    petName: string;
    petBio: string;


  /** javascript end **/
  constructor() {
    this.petBreed = 'Border Collie Breed';
    this.petName = 'Shelbie';
    this.petBio = 'Hi people, I am not like other dogs at all. I like to keep both myself and my area spotless. I know this sounds crazy for a dog, but that is just the way I am. I can not stand being dirty because it makes my fur all nasty. Other than that, I am mildly active and know how to play safely with both adults and kids. Also, I like rearranging shoes on the floor to make awesome color patterns.';
  }

  ngOnInit() {
  }

}
