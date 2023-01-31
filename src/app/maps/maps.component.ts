import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyle';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit , AfterViewInit {

  title = 'google-maps';



  activeDrivers: any = [];

  private map: google.maps.Map;

  constructor(private authService: AuthService, private router: Router,private db: AngularFireDatabase) {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCXqYnbeKp_uC6rlLaFdT4NqPGSiD70Fow'
    });

 

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 24.860966, lng: 66.990501 }

      this.map = new google.maps.Map(document.getElementById("map") as HTMLCanvasElement, {
        center: location,
        zoom: 6,
    
      });

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });

      // const driversRef = this.db.list('activeDrivers');



      // driversRef.valueChanges().subscribe(snap => {
      //   if (snap != null){
  
      //     this.activeDrivers =snap;
      //     console.log(this.activeDrivers);

      //     snap.forEach(s => {
      //       console.log(s);
      //       console.log(s);
      //       console.log(s);
         
      //       // var marker = new google.maps.Marker({
      //       //   position: new google.maps.LatLng(s[g]['0']),
      //       //   map: this.map
      //       // })
      //     });

      //     // this.activeDrivers.forEach(location as unknown as Drivers => {
      //     //   var marker = new google.maps.Marker({
      //     //     position: new google.maps.LatLng(location.l[0], location.l[1]),
      //     //     map: this.map
      //     //   })
      //     // });

      //     // const marker = new google.maps.Marker({
      //     //   position: location,
      //     //   map: this.map,
      //     // });
      //   }
          
      // });
    });
  }

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

  goToMaps(){
    this.router.navigate(['/maps']);
  }

  goToSettings(){
    this.router.navigate(['/settings']);
  }

  ngAfterViewInit(): void {
    
  }
}

interface Drivers{
  g : any,
  l : {
    0: any,
    1: any,
  },
}