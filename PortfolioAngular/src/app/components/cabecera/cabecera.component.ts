import { Component, OnInit, HostListener} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit{

  public getScreenWidth: any;
  public getScreenHeight: any;

  flag= true;

  miPortfolio : any;

  constructor(private datosPortfolio: DataService){}

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.miPortfolio = datos;
    });

    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if ( window.innerWidth > 1105 ) {
      this.cambiarFlag(true)
    }else if(window.innerWidth <= 1105){
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
    if ( window.innerWidth > 1105 ) {
      this.cambiarFlag(true)
    }else if(window.innerWidth <= 1105){
      this.cambiarFlag(false)
    }
  }
  

}
