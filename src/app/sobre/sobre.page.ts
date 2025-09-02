import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; //alterei aqui
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonFooter} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [RouterLink, IonButton, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SobrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

