import { Component, OnInit, Input  } from '@angular/core';


import {News } from '../news/news';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    @Input()
    dish: News;

  

  constructor() { }

  ngOnInit() {
  }

}
