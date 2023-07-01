import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, AfterViewInit {

  works: any;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.github.loadRepos().subscribe((res: any) => {
      this.works = res;
    });
  }

  ngAfterViewInit(): void {
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      }
    });
  }
}
