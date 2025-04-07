import { Component , OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projectsData:any[] = [];
  
  constructor( private dataService: DataService  ) { }
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.projectsData = data.projects;
    });
  }
}
