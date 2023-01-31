
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {  Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-taxi-type',
  templateUrl: './edit-taxi-type.component.html',
  styleUrls: ['./edit-taxi-type.component.css']
})
export class EditTaxiTypeComponent implements OnInit {

  id: any;
  driverInfo: any;

  taxiTypes: any = [];

  longText = "text";
  dataSource = [];

  email: string;
  password: string;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  

  constructor(private route: ActivatedRoute,private authService: AuthService, private router: Router,private db: AngularFireDatabase,private fb: FormBuilder) {
    const settingsRef = db.list('settings');

    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
 
    const driversRef = db.object('settings/' + this.id);
 
    driversRef.valueChanges().subscribe((snap) => {
       if (snap != null){
 
         this.driverInfo = snap;

         console.log(this.driverInfo);

         this.options = fb.group({
          hideRequired: this.hideRequiredControl,
          floatLabel: this.floatLabelControl,
          key: [this.driverInfo.key, [Validators.required, ]  ],
          price: [this.driverInfo.price, Validators.required],
    
          timePrice: [this.driverInfo.timePrice, [Validators.required, ]],
          image: [this.driverInfo.image, Validators.required],
        
        });
       }
        
     });

    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      key: ['', [Validators.required, ]],
      price: ['', Validators.required],

      timePrice: ['', [Validators.required, ]],
      image: ['', Validators.required],
    
    });



    settingsRef.valueChanges().subscribe(snap => {
      if (snap != null){

        this.taxiTypes.push(snap);
        console.log(this.taxiTypes);
      }
        
    });
    console.log(this.taxiTypes);
  }

  ngOnInit(): void {}

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

  goToDrivers(){

    this.router.navigate(['/drivers']);
  }

  goToPassengers(){
    this.router.navigate(['/passengers']);
  }

  goToHome(){
    this.router.navigate(['/dashboard']);
  }

  goToOrders(){
    this.router.navigate(['/orders']);
  }

  goToMap(){
    this.router.navigate(['/maps']);
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }

  navigateTaxiType(id: any){
    console.log(id);
    this.router.navigate(['/editTaxiType' , id]);
  }

  onSubmit() {
    console.log("on submit");

    const driversRef = this.db.object('settings/' + this.id);

    driversRef.update({
      key: this.options.value.key,
      price: this.options.value.price,
      timePrice: this.options.value.timePrice,
      image: this.options.value.image,
    }).then(item => {
      this.router.navigate(['/dashboard']);
    });

    // driversRef
    // .valueChanges()
    // .subscribe((data) => {
    //   this.editForm.setValue(data);
    // });
  }


}
