
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {  Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  id: any;
  driverInfo: any;
  commisionInfo: any;

  taxiTypes: any = [];

  longText = "text";
  dataSource = [];

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];

  constructor(private route: ActivatedRoute,private authService: AuthService, private router: Router,private db: AngularFireDatabase,private fb: FormBuilder) {
    const settingsRef = db.list('settings');
    const commisionRef = db.object('commision');



    settingsRef.valueChanges().subscribe(snap => {
      if (snap != null){

        this.taxiTypes.push(snap);
        console.log(this.taxiTypes);
      }
        
    });
    console.log(this.taxiTypes);

    commisionRef.valueChanges().subscribe((snap) => {
      if (snap != null){

        this.commisionInfo = snap;

        console.log("commisionInfo");
        console.log(this.commisionInfo);

        this.options = fb.group({
         hideRequired: this.hideRequiredControl,
         floatLabel: this.floatLabelControl,
         percent: [this.commisionInfo.percent, [Validators.required, ]  ],

       
       });
      }
       
    });

    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      percent: ['', [Validators.required, ]  ],

    
    });
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

    const driversRef = this.db.object('commision/');

    driversRef.update({
      percent: this.options.value.percent,
    }).then(item => {
      this.router.navigate(['/dashboard']);
    });

  }

}
