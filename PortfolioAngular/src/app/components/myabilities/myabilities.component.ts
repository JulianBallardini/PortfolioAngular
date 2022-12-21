import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-myabilities',
  templateUrl: './myabilities.component.html',
  styleUrls: ['./myabilities.component.css']
})
export class MyabilitiesComponent implements OnInit{

  miPortfolio : any;

  constructor(private datosPortfolio: DataService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos =>{
      this.miPortfolio = datos;
    })
  }

}
