import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from '../model/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContent: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(event: HTMLInputElement) {
    console.log(this.serverContent.nativeElement.value);
    this.serverCreated.emit({
      serverName: event.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(event: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: event.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
