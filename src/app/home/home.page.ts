import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({ chevronDownCircleOutline });
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
