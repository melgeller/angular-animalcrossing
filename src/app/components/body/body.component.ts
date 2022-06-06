import { galleryVillagers } from './../../models/animalsInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  public villagerInfo: galleryVillagers;

  constructor() {
    this.villagerInfo = {
      villagers:[{
        name: "Cándido",
        image: {
          src: "../../../assets/candido.png",
          alt: "candido"},
        species: "Perro",
        personality: "Vago",
        birthday: "4 de Agosto"
      },
    {
      name: "Bambina",
      image:{
        src: "../../../assets/bambina.png",
        alt: "bambina" },
      species: "Ciervo",
      personality: "Altanera",
      birthday: "4 de Enero"
    },
  {
    name: "Feli",
      image: { src:"../../../assets/feli.png",
      alt: "feli"},
      species: "Gato",
      personality: "Dulce",
      birthday: "27 de Marzo"
  },
{
  name: "Celeste",
      image: {src: "../../../assets/celeste.png",
      alt:"celeste"},
      species: "Osezno",
      personality: "Vivaracha",
      birthday: "24 de Junio"
},
{
  name: "Victoria",
      image: {src: "../../../assets/victoria.png",
      alt:"victoria"},
      species: "Caballo",
      personality: "Vivaracha",
      birthday: "11 de Julio"
},
{
  name: "Germán",
      image: {src: "../../../assets/german.png",
      alt:"german"},
      species: "Lobo",
      personality: "Picajoso",
      birthday: "17 de Febrero"
},
{
  name: "Saltonio",
      image: { src: "../../../assets/saltonio.png",
      alt:"saltonio"},
      species: "Rana",
      personality: "Atlético",
      birthday: "3 de Agosto"
},
{
  name: "Cabrálex",
      image: {src: "../../../assets/cabralex.png",
      alt:"cabralex"},
      species: "Cabra",
      personality: "Petulante",
      birthday: "28 de Junio"
},
{
  name: "Merengue",
      image: {src: "../../../assets/merengue.png",
      alt:"merengue"},
      species: "Rinoceronte",
      personality: "Dulce",
      birthday: "19 de Marzo"
},
{
  name: "Rubí",
      image: {src: "../../../assets/rubi.png",
      alt:"rubi"},
      species: "Conejo",
      personality: "Vivaracha",
      birthday: "25 de Diciembre"
},
{
  name: "Cocoloca",
      image: {src: "../../../assets/cocoloca.png",
      alt:"cocoloca"},
      species: "Conejo",
      personality: "Normal",
      birthday: "1 de Marzo"
},
{
  name: "Rosezna",
      image: {src: "../../../assets/rosezna.png",
      alt:"rosezna"},
      species: "Oso",
      personality: "Presumida",
      birthday: "10 de Marzo"
},
]
    }
   }

  ngOnInit(): void {
  }

}
