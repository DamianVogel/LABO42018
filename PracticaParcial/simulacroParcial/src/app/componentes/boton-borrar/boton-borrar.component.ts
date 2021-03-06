import { Component, OnInit, Input } from '@angular/core';
import { ServicioHeladosService } from '../../servicios/servicio-helados.service';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})



export class BotonBorrarComponent implements OnInit {

  @Input() id:number;

  constructor(private httpHelado: ServicioHeladosService) { }

  Borrar()
  {
    console.log(this.id);

    let json={
      "id": this.id
    }
    this.httpHelado.Borrar(json)
    .then((data)=>{ console.log(data)})
    .catch((data)=>{console.log(data)})
    
  }

  ngOnInit() {
  }

}
