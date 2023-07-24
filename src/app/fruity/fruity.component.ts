import { Component, OnInit } from '@angular/core';
import { FruityViceService } from '../services/fruity-vice.service';

@Component({
  selector: 'app-fruity',
  templateUrl: './fruity.component.html',
  styleUrls: ['./fruity.component.scss'],
})
export class FruityComponent implements OnInit {
  constructor(private fruit: FruityViceService) {}

  ngOnInit(): void {
    this.getAllFruits()
  }

  getAllFruits() {
    this.fruit.getAllFruits().subscribe((data) => {
      console.log(data);
    });
  }
}
