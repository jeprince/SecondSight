import { Component, Injectable, inject } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private socket: Socket) {
    if (socket.connect) {
      console.log('We are connected.');
      socket.on('take-off-received', (data) => {
        console.log(data);
      });
    } else {
      socket.connect();
    }
  }

  onTakeoffClick() {
    console.log('Take off button clicked.');
    this.socket.emit('takeoff', {from: 'app', height: 15});
  }

  onArmClick() {
    console.log('Arming button clicked...');
  }

  onDisarmClick() {
    console.log('Disarm button clicked...');
  }

  onLandClick() {
    console.log('Land button clicked...');
  }

}

