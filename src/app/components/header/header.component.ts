import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/animalsInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public navigatorInfo: NavigatorInterface[]

  constructor() { 

this.navigatorInfo = [{
  content: "Home",
  link: "#home"
},
{
  content: "Villagers",
  link: "#villagers"
},
{
  content: "Museum",
  link: "#museum"
},
{
  content: "Nook Inc.",
  link: "#nookinc"
}
]



  }




  ngOnInit(): void {
  }

}
