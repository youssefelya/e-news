import { Injectable } from '@angular/core';

import { News } from '../news/news';
import { DISHES } from '../news/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {



  getDishes(): News[] {
    return DISHES;
  }

  constructor() { }
}
