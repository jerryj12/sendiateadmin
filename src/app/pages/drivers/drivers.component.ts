
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements AfterViewInit,OnInit {

  drivers: any = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'email','Status','action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  constructor(private authService: AuthService, private router: Router,private db: AngularFireDatabase,private route: ActivatedRoute) {

    const driversRef = db.list('drivers');
    


    driversRef.valueChanges().subscribe(snap => {
      if (snap != null){

        this.drivers.push(snap);
        console.log(this.drivers);
      }
        
    })
    console.log(this.drivers);
  }
  authenticate:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.authenticate = params['user'];
    });
    console.log(this.authenticate);
    if(this.authenticate!='admin'){
      this.router.navigate(['/']);
    }
  }
  

  status(id:any){
    const itemsRef = this.db.list('drivers');
    itemsRef.update(id, { isAccountVerified: true });
    window.location.reload();

  }

  logout() {
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

  goToDrivers(){

    this.router.navigate(['/drivers'],{queryParams: {user:"Admin"}});
  }

  goToPassengers(){
    this.router.navigate(['/passengers'],{queryParams: {user:"Admin"}});
  }

  goToHome(){
    this.router.navigate(['/dashboard'],{queryParams: {user:"Admin"}});
  }

  goToOrders(){
    this.router.navigate(['/orders'],{queryParams: {user:"Admin"}});
  }

  goToMaps(){
    this.router.navigate(['/maps']);
  }

  goToDriverInfo(id: any){
    console.log(id);

    this.router.navigate(['/driverInfo' , id]);
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }


  addWallet(id: any){
    console.log(id);

    const driversRef = this.db.object('wallets/' + id);

    driversRef.update({
      wallet : 0,
      trips : 0,
      commision : 0,
    }).then(item => {
     // this.router.navigate(['/dashboard']);
    });
  }
}
