import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  usuario: User;
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe(
      (usuario) => {
        this.usuario = usuario;
      }
    );
  }


  logout() {
    this.auth.signOut();
  }

}
