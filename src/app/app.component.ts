import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  standalone: true,
  imports: [RouterModule, GalleryComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gallery';
}
