import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent {
@Input() images;
@Input() name : string;

prePath = environment.ImgFilePath;
currImg = 0;
  constructor() { }

  prev() {
    if(this.currImg > 0) {
      this.currImg--;
    }
  }

  next() {
    if(this.currImg + 1 < this.images.length) {
      this.currImg++;
    }
  }
}
