import { Component, OnInit } from '@angular/core';
import { AlbumApiService } from '../albumApi.service';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'artist'];
  data: Album[] = [];
  isLoadingResults = true;

  constructor(private api: AlbumApiService) { }

  ngOnInit() {
    this.api.getAlbums()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
