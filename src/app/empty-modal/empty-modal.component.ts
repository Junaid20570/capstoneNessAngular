import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-modal',
  templateUrl: './empty-modal.component.html',
  styleUrls: ['./empty-modal.component.scss']
})
export class EmptyModalComponent implements OnInit{

  ngOnInit(): void {
    // $('#mainModal').modal('show');
    // let root =<HTMLElement>document.getElementById('mainModal');
    // root.style.background='red';
  }
}
