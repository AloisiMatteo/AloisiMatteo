import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learn-more-buttons',
  templateUrl: './learn-more-buttons.component.html',
  styleUrls: ['./learn-more-buttons.component.scss']
})
export class LearnMoreButtonsComponent {
  @Input() buttonURL !: string
}
