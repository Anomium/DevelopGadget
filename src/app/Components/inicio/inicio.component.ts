import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  Loader: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.Loader = true;
    }, 2000);
  }

}