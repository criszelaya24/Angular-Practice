import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'
import { PostUser } from '../models/create-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
        name:['',Validators.required],
        job:['',Validators.required]
    });
  }

  onSubmit(){
    const userData = new PostUser(
    this.messageForm.get('name').value,
    this.messageForm.get('job').value
  );
    this.submitted = true;
    if (this.messageForm.invalid){
      return;
    }
      this.data.createUser(userData).subscribe(() =>{
        this.success = true
        setTimeout(() => { this.success = false},2500);
      })
  }

}
