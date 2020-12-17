import { Component } from '@angular/core';
import { Server } from './model/server';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'Just test string'}];
  users = [
    {
      name: 'Marek',
      lastname: 'Skwarek'
    },
    {
      name: 'Jarek',
      lastname: 'Jarmarek'
    },
  ];
  onServerAdded(serverData: Server) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: Server) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed name!';
  }
  onDestroy() {
    this.serverElements.splice(0, 1);
  }
}
