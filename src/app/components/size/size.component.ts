import { Component, OnInit } from '@angular/core';
import { ISize, SizeService } from '../../size.service';
@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  allSizes: ISize[];


  constructor(
    private sizeService: SizeService,
  ) { }

  ngOnInit() {
    this.allSizes = this.sizeService.getSizes();
  }

}
