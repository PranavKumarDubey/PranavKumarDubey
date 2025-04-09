import { Component , OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  constructor( private dataService: DataService) { }

  contactData:any;
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.contactData = data.contact; 
    });
  }

 contactForm: FormGroup = new FormGroup({
  
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
 }); 

 onSubmit(){
  if(this.contactForm.valid){
    console.log(this.contactForm.value);
    alert("Your message has been sent successfully!");
    this.contactForm.reset();
  }else{
    alert("Please fill all the required fields correctly.");
  }
 }
}
