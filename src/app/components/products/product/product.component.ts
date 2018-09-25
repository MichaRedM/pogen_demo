import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../../../card.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('imgSrc') imgSrc: string;
  @Input('name') name: string;
  @Input('price') price: string;


  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
  }

  order() {
    this.cardService.addToCard(this.name, this.price);
  }

}
