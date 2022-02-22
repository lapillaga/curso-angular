import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { Transaction } from 'src/app/model/product';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  movements: Transaction[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => {
          return this.productService.getMovements(params.get('id'));
        })
      ).subscribe(response => {
        this.movements = response;
        this.group();
    });
  }

  group(): any {
    const grouped = this.movements.reduce((r, a) => {
      // @ts-ignore
      r[a.date] = [...r[a.date] || [], a];
      return r;
    }, {});

    const groupArrays = Object.keys(grouped).map((date) => {
      return {
        date,
        // @ts-ignore
        movements: grouped[date]
      };
    });

    console.log(groupArrays);
    return groupArrays;
  }
}
