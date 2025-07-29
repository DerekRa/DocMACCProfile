import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-macc-profile-page',
  imports: [GoogleMapsModule, DatePipe],
  templateUrl: './macc-profile-page.component.html',
  styleUrl: './macc-profile-page.component.css',
})
export class MaccProfilePageComponent {
  title = 'DocMACCProfile';
  public picture: string = 'images/dr.JPG';
  public logo: string = 'images/logo.png';
  public today: number = Date.now();
}
