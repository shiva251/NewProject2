import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../model/employee.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService) { }
  addForm: FormGroup;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required]

    });

  }


  onSubmit() {

    this.employeeService.createEmployee(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
  }


}
