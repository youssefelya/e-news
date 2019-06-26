import { Component, OnInit } from '@angular/core';
import { DISHES } from '../news/dishes';
import { News } from '../news/news';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  nnew: News[] = DISHES;

  selectedDish: News;





  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.nnew= this.dishService.getDishes();
  }

  onSelect(nn:News){
    this.selectedDish=nn;
  }

}
