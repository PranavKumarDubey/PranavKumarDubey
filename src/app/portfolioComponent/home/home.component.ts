import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router ,  private dataService: DataService) { }
 
  homeData:any;

 ngOnInit() {
  this.dataService.getData().subscribe(data => {
    this.homeData = data.home; 
  });
}
 
  navigateToProjetc() {
    this.router.navigate(['/project']);
  }
}
