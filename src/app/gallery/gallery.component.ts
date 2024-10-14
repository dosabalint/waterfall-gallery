import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface ImageItem {
  src: string;
  aspectRatio: number;
  index: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GalleryComponent implements OnInit {
  columns: ImageItem[][] = [[], []];

  imageCount = 30;

  ngOnInit() {
    const imageSources = [
      'assets/horizontal-house.jpg',
      'assets/square-house.jpg',
      'assets/vertical-house.jpg',
    ];

    this.populateColumns(imageSources);
  }

  private populateColumns(imageSources: string[]) {
    const loadImage = (src: string, index: number) => {
      return new Promise<ImageItem>((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({ src, aspectRatio: img.height / img.width, index });
        };
        img.src = src;
      });
    };

    const addImageToColumn = (image: ImageItem) => {
      const columnAspectRatioSums = this.columns.map((column) =>
        column.reduce((sum, img) => sum + img.aspectRatio, 0)
      );

      const shorterColumnIndex =
        columnAspectRatioSums[0] <= columnAspectRatioSums[1] ? 0 : 1;

      this.columns[shorterColumnIndex].push(image);
    };

    const loadAndAddImage = async () => {
      let i = 0;
      while (i < this.imageCount) {
        const randomSrc =
          imageSources[Math.floor(Math.random() * imageSources.length)];
        const image = await loadImage(randomSrc, i + 1);
        addImageToColumn(image);
        i++;
      }
    };

    loadAndAddImage();
  }
}
