import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() {}
  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
}
