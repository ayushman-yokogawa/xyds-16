import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.scss']
})
export class HeaderExampleComponent implements OnInit {
  searchBar : boolean = false;
  small: boolean = false;
  fluid: boolean = true;
  treeControls : boolean = true
  menuClose(){
    this.small = !this.small
    this.fluid = !this.fluid
    this.treeControls = !this.treeControls
  }
  searchBarToggle(){
    this.searchBar = true;
  }
  menuItems = [
    {
      name:"Favorites Lists",
      icon: '',
    },
    {
      name: "Groups/Favourite",
      icon: "add_box",
      children: [
        {
          name: 'Group A',
          link: '/parent2/child3',
          children: [
            {
              name: 'Group 1',
              link: '/parent2/child3'
            }
          ]
        },
        {
          name: 'Group B',
          link: '/parent2/child3',
          children: [
            {
              name: 'Group 1',
              link: '/parent2/child3'
            }
          ]
        }
      ],
      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
