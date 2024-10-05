import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ToastOptions } from '@ionic/angular';
import { User } from '../../interfaces/User';
import { UserInfoFavClicked } from '../../interfaces/UserInfoFavClicked';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})

export class ManagerComponent {

  name: string = '';
  surname: string = '';
  age: number | null = null; // La propiedad edad puede ser un número o nulo
  users: Array<User> = []; // Lista de usuarios
  nextId: number = 1; // Contador para el id

  constructor(private router: Router, private toast: ToastController) {}

  navigateToWelcome() {
    this.router.navigate(['/home/welcome']);
  }

  // Captura el valor de los campos de entrada
  onNameInput(event: any) {
    this.name = event.target.value;
  }

  onSurnameInput(event: any) {
    this.surname = event.target.value;
  }

  onAgeInput(event: any) {
    const value = event.target.value;
    this.age = value ? +value : null; // Convertir a número
  }

  // Agrega un usuario a la lista
  addUser() {
    if (this.name.trim() && this.surname.trim() && this.age !== null) {
      this.users.push({
        id: this.nextId++,
        name: this.name,
        surname: this.surname,
        age: this.age,
        isFav: false
      });

      // Limpiar los campos del formulario
      this.name = '';
      this.surname = '';
      this.age = null;
    }
  }

  // Elimina un usuario de la lista
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  // Lógica para gestionar el favorito y mostrar el Toast
  public onFavClicked(user: User, event: UserInfoFavClicked) {
    const index = this.users.findIndex(u => u.id === user.id);

    /*
    if (index !== -1) {
      // Actualiza el estado de favorito
      //this.users[index].isFav = event.fav ?? false; 
    }
    */

    const options: ToastOptions = {
        message: `User ${event.fav ? 'added' : 'removed'} ${event.fav ? 'to' : 'from'} favourites`,
        duration: 1000,
        position: 'bottom',
        color: 'danger',
        cssClass: 'fav-ion-toast'
    };

    // Mostrar el Toast
    this.toast.create(options).then(toast => toast.present());
    console.log(this.users)
  }
}
