import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserInfoFavClicked } from '../../interfaces/UserInfoFavClicked';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})

export class UserInfoComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() id!: number;
  @Input() name!: string;
  @Input() surname!: string;
  @Input() age!: number;
  @Input() isFav: boolean = false;

  @Output() userDeleted = new EventEmitter<void>(); // Evento para eliminar el usuario

  @Output() onFavClicked: EventEmitter<UserInfoFavClicked> = new EventEmitter<UserInfoFavClicked>();

  // Método para obtener la inicial del segundo apellido
  getSecondSurnameInitial(apellidos: string): string {
    const partes = apellidos.split(' '); // Dividir los apellidos por espacio
    if (partes.length > 1) {
      return partes[1].charAt(0).toUpperCase() + '.'; // Retornar la inicial del segundo apellido
    }
    return ''; 
  }

  deleteUser() {
    this.userDeleted.emit(); // Emitir evento 
  }

  onFavClick(event: any) 
  {
    this.isFav = !this.isFav; // Cambia el estado de isFav

    this.onFavClicked.emit({
      fav: this.isFav
    });

    event.stopPropagation();
  }

}

