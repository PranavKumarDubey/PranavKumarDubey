import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  aboutData: any;
  constructor( private dataService: DataService  ) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.aboutData = data.about;
    });
  }
}
