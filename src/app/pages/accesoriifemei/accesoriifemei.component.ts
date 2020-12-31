import { Component, OnInit } from '@angular/core';
import { ProductManagementService} from '../../product-management.service';

@Component({
  selector: 'app-accesoriifemei',
  templateUrl: './accesoriifemei.component.html',
  styleUrls: ['./accesoriifemei.component.css']
})
export class AccesoriifemeiComponent implements OnInit {

  constructor(private products: ProductManagementService) { }

  ngOnInit(): void {
  }

  cumpara(id){
    let titlu = document.getElementById("Titlu" + id).innerText;
    let pret = document.getElementById("Pret" + id).innerText;
    let descriere = document.getElementById("Descriere" +id).innerText;

    console.log(titlu, pret, descriere);
    
    this.products.cumpara(7,titlu,pret,descriere);
}


}
