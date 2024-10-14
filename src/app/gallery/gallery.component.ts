import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GalleryComponent implements OnInit {
  images: string[] = [];

  ngOnInit() {
    const imageSources = [
      'assets/horizontal-house.jpg',
      'assets/square-house.jpg',
      'assets/vertical-house.jpg',
    ];

    // Generate 30 random images
    this.images = Array.from(
      { length: 30 },
      () => imageSources[Math.floor(Math.random() * imageSources.length)]
    );
  }
}
