import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumApiService } from '../albumApi.service';
import { Album } from '../album';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit {

  album: Album = { _id: '', title: '', artist: '', genre: '', updatedAt: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: AlbumApiService, private router: Router) { }

  ngOnInit() {
    this.getAlbumDetails(this.route.snapshot.params.id);
  }

  getAlbumDetails(id: any) {
    this.api.getAlbum(id)
      .subscribe((data: any) => {
        this.album = data;
        console.log(this.album);
        this.isLoadingResults = false;
      });
  }

  deleteAlbum(id: any) {
    this.isLoadingResults = true;
    this.api.deleteAlbum(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
