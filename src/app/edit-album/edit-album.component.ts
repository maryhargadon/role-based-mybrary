import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumApiService } from '../albumApi.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  albumForm: FormGroup;
  _id = '';
  title = '';
  artist = '';
  genre = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: AlbumApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAlbum(this.route.snapshot.params.id);
    this.albumForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'genre' : [null, Validators.required]
    });
  }

  getAlbum(id: any) {
    this.api.getAlbum(id).subscribe((data: any) => {
      this._id = data._id;
      this.albumForm.setValue({
        title: data.title,
        artist: data.artist,
        genre: data.genre
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateAlbum(this._id, this.albumForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/show-album', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  albumDetails() {
    this.router.navigate(['/show-album', this._id]);
  }


}
