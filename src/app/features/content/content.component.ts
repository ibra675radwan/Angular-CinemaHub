import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PaginationModel} from '../../core/models/pagination.model';
import {MoviesService} from './services/movies.service';
import {take} from 'rxjs/operators';
import {Router} from "@angular/router";
import {OnTvService} from "./services/onTV.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MovieCardComponent} from "../../shared/components/poster-card-view/poster-card.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {TitleCasePipe} from "@angular/common";
import {ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  imports: [
    MatPaginatorModule,
    MovieCardComponent,
    MatButtonModule,
    MatCardModule,
    TitleCasePipe,
   
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ContentComponent implements OnInit {

  contentType = '';
  longText;
  nowPlaying: Array<PaginationModel> = [];

  totalResults: any;

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: OnTvService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    
  ) {
    this.contentType = this.router.url.split('/')[1];
  }

  ngOnInit() {

    if (this.contentType === 'movies') {
      this.getNowPlayinMovies(1);
    } else {
      this.getNowPlayinTVShows(1);
    }

  }

  getNowPlayinMovies(page: number) {
    this.moviesService.getNowPlaying(page).pipe(take(1)).subscribe(
      res => {
        this.totalResults = res.total_results;
        this.nowPlaying = res.results;
        this.cdr.detectChanges();
      }, () => {}
    );
  }

  getNowPlayinTVShows(page: number) {
    this.tvShowsService.getTvOnTheAir(page).pipe(take(1)).subscribe(
      res => {
        this.totalResults = res.total_results;
        this.nowPlaying = res.results;
        this.cdr.detectChanges();
      }, () => {}
    );
  }

  changePage(event) {
    if (this.contentType === 'movies') {
      this.getNowPlayinMovies(event.pageIndex + 1);
    } else {
      this.getNowPlayinTVShows(event.pageIndex + 1);
    }
  }
  CardMediaSizeExample (){
     this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  }
 
}

