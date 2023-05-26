import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-button',
  templateUrl: './regular-button.component.html',
  styleUrls: ['./regular-button.component.scss']
})
export class RegularButtonComponent implements OnInit {
  @Input() testoBottone !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
