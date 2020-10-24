import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
    selector: 'app-dish-detail',
    templateUrl: './dish-detail.component.html',
    styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

    inputDish: Dish;

    constructor(private dishService: DishService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.inputDish = this.dishService.getDish(id);
    }

    goBack(): void {
        this.location.back();
    }

}
