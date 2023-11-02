import {Component} from '@angular/core';
import {XyNode} from "xy-designsystem";

@Component({
  selector: 'app-tree-example',
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.scss']
})
export class TreeExampleComponent {

  TREE_DATA: XyNode[] = [
    {
      id: 'Fruit',
      name: 'Fruit',
      expand: true,
      icon: 'construction',
      clickRight: () => { alert('clickRight called'); },
      rightIcon: 'more_vert',
      children: [
        {
          id: 'Apple',
          name: 'Apple',
          icon: 'construction',
          action: () => { alert('action called'); },
          clickRight: () => { alert('clickRight called'); },
          rightIcon: 'more_vert',
          clickRight2: () => { alert('clickRight2 called'); },
          rightIcon2: 'more_vert',
        },
        {
          id: 'Banana',
          name: 'Banana'
        },
        {
          id: 'Fruit loops',
          name: 'Fruit loops'
        }
      ],
    },
    {
      id: 'Vegetables',
      name: 'Vegetables',
      expand: true,
      children: [
        {
          id: 'Green',
          name: 'Green',
          children: [
            {
              id: 'Broccoli',
              name: 'Broccoli'
            },
            {
              id: 'Brussels sprouts',
              name: 'Brussels sprouts'
            }
          ],
        },
        {
          id: 'Orange',
          name: 'Orange',
          children: [
            {
              id: 'Pumpkins',
              name: 'Pumpkins'
            },
            {
              id: 'Carrots',
              name: 'Carrots'
          }],
        },
      ],
    },
  ];

  constructor() {}
}
