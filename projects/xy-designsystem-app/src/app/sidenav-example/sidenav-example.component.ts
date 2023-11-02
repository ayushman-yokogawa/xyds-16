import { Component, OnInit } from '@angular/core';
import {XyNode} from "xy-designsystem";


@Component({
  selector: 'app-sidenav-example',
  templateUrl: './sidenav-example.component.html',
  styleUrls: ['./sidenav-example.component.scss']
})
export class SidenavExampleComponent implements OnInit {
  opened: boolean = false;
  small: boolean = false;
  fluid: boolean = true;
  treeControls : boolean = true
  
  // menuClose(){
  //   this.small = !this.small
  //   this.fluid = !this.fluid
  //   this.treeControls = !this.treeControls
  // }

  TREE_DATA: XyNode[] = [
    {
      id: 'Fruit ',
      name: 'Fruit Fruit Fruit Fruit Fruit Fruit Fruit Fruit Fruit Fruit',
      icon: 'settings',
      expand: true,
      clickRight: () => { alert('clickRight called'); },
      rightIcon: 'more_vert',
      tooltip: true, 
      charLimit: 20,
      children: [
        {
          id: 'Apple',
          name: 'Apple',
          action: () => { alert('action called'); },
          clickRight: () => { alert('clickRight called'); },
          rightIcon: 'more_vert',
          clickRight2: () => { alert('clickRight2 called'); },
          rightIcon2: 'more_vert',
          tooltip: true, 
          charLimit: 5,
        },
        {
          id: 'Banana',
          name: 'Banana',
          action: () =>{alert("hello")},
          tooltip: false, 
          
        },
        {
          id: 'Fruit loops',
          name: 'Fruit loops',
          tooltip: false, 
        }
      ],
    },
    {
      id: 'Vegetables',
      name: 'Vegetables',
      tooltip: false, 
      children: [
        {
          id: 'Green',
          name: 'Green',
          tooltip: true, 
          children: [
            {
              id: 'Broccoli',
              name: 'Broccoli',
              tooltip: false, 
            },
            {
              id: 'Brussels sprouts',
              name: 'Brussels sprouts',
              tooltip: false, 
            }
          ],
        },
        {
          id: 'Orange',
          name: 'Orange',
          tooltip: false, 
          children: [
            {
              id: 'Pumpkins',
              name: 'Pumpkins',
              tooltip: false, 
            },
            {
              id: 'Carrots',
              name: 'Carrots',
              tooltip: false, 
          }],
        },
      ],
    },
  ];

  constructor() { }
  
  menuClose(){
    this.small = !this.small
    this.fluid = !this.fluid
    this.treeControls = !this.treeControls
  }

  ngOnInit(): void {
    console.log(this.TREE_DATA)
  }
  onSelectSpacing(spacing: string) {
    const body = document.querySelector('body');
    if (body) {
      const len = body.classList.length;
      for (let i = len - 1; i >= 0; i--) {
        const cl = body.classList.item(i);
        if (cl) {
          if (cl.startsWith('spacing-')) {
            body.classList.remove(cl);
          }
        }
      }
      body.classList.add('spacing-' + spacing);
    }
  }

  onSelectFontSize(fontSize: string) {
    const html = document.querySelector('html');
    let cls = 'font-medium';
    if (html) {
      switch (fontSize) {
        case 'x-small':
          cls = 'font-x-small';
          break;
        case 'small':
          cls = 'font-small';
          break;
        case 'medium':
          cls = 'font-medium';
          break;
        case 'large':
          cls = 'font-large';
          break;
        case 'x-large':
          cls = 'font-x-large';
          break;
      }
      html.classList.remove('font-x-small');
      html.classList.remove('font-small');
      html.classList.remove('font-medium');
      html.classList.remove('font-large');
      html.classList.remove('font-x-large');
      html.classList.add(cls);
    }
  }

  onSelectTheme(theme: string) {
    const html = document.querySelector('html');
    let cls = 'light';
    if (html) {
      switch (theme) {
        case 'light-blue':
          cls = 'light-theme';
          break;
        case 'light-indigo':
          cls = 'light-theme';
          break;
        case 'dark':
          cls = 'dark-theme';
          break;
      }
      html.classList.remove('dark-theme');
      html.classList.remove('light-theme');
      html.classList.add(cls);
    }

    const body = document.querySelector('body');
    let cls2 = null;
    if (body) {
      switch (theme) {
        case 'light-blue':
          cls2 = 'xy-blue-theme';
          break;
        case 'light-indigo':
          cls2 = 'xy-indigo-theme';
          break;
      }
      body.classList.remove('xy-blue-theme');
      body.classList.remove('xy-indigo-theme');
      if (cls2) {
        body.classList.add(cls2);
      }
    }
  }

  onClickDashboard() {
    alert('Dashboard menu clicked!');
  }

  onClickInbox() {
    alert('Inbox menu clicked!');
  }

  onClickInbox2() {
    alert('Inbox menu item #2 clicked!');
  }

  test(){
    alert("h")
  }


 
}
