import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  name = 'Nicolas'
  surname = 'Garro'
  titulo = "Full Stack Developer Jr"

  constructor() { }

  ngOnInit(): void {
  }

}
