import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToAccesoriiF(){
    this.router.navigate(["femei/accesorii"], {replaceUrl:true});
  }
  goToCosmeticeF(){
    this.router.navigate(["femei/cosmetice"], {replaceUrl:true});
  }
  goToAccesoriiB(){
    this.router.navigate(["barbati/accesorii"], {replaceUrl:true});
  }
  goToIncaltaminteB(){
    this.router.navigate(["barbati/incaltaminte"], {replaceUrl:true});
  }
  goToCos(){
    this.router.navigate(["cos"], {replaceUrl:true});
  }
  goToCont(){
    this.router.navigate(["cont"], {replaceUrl:true});
  }
  goToRegister(){
    this.router.navigate(["register"], {replaceUrl:true});
  }
  goToGlammy(){
    this.router.navigate(["home"], {replaceUrl:true});
  }
}
