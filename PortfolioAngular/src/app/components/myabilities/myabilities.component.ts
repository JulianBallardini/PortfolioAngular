import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-myabilities',
  templateUrl: './myabilities.component.html',
  styleUrls: ['./myabilities.component.css']
})
export class MyabilitiesComponent implements OnInit{

  miPortfolio : any;

  public getScreenWidth: any;
  public getScreenHeight: any;

  flag= true;

  constructor(private datosPortfolio: DataService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.miPortfolio = datos;
    })

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if ( window.innerWidth > 820 ) {
      this.cambiarFlag(true)
    }else if(window.innerWidth <= 820){
      this.cambiarFlag(false)
    }
    
  }

  cambiarFlag(bool: boolean){
    this.flag = bool;
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if ( window.innerWidth > 820 ) {
      this.cambiarFlag(true)
    }else if(window.innerWidth <= 820){
      this.cambiarFlag(false)
    }
  }

}
