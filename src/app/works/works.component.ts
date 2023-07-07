import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../github.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, AfterViewInit {

  @ViewChild('workSlider', { static: false }) workSliderRef!: ElementRef;
  works: any;
  swiperInstance: Swiper | null = null;
  constructor(private github: GithubService) { }

  ngAfterViewInit(): void {
    this.swiperInstance = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      mousewheel: true,
      keyboard: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0:{
          slidesPerView: 1,
        },
        520:{
          slidesPerView: 2,
        },
        950:{
          slidesPerView: 3,
        }
      }
    });
  }

  ngOnInit(): void {
    this.github.loadRepos().subscribe((res: any) => {
      this.works = res;
    });
  }

  onNextClick(): void {
    if (this.swiperInstance) {
      this.swiperInstance.slideNext();
    }
  }

  onPrevClick(): void {
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev();
    }
  }
}
