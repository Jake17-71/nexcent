import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SliderSelectors } from '@/types'

class Slider {
  private selectors: SliderSelectors = {
    swiper: `[data-js-swiper]`,
    pagination: `[data-js-swiper-pagination]`,
  }

  private readonly swiperElement: HTMLElement | null

  constructor() {
    this.swiperElement = document.querySelector(this.selectors.swiper)
    this.init()
  }

  init(): void {
    if (!this.swiperElement) {
      return
    }

    new Swiper(this.swiperElement as HTMLElement, {
      modules: [Pagination],
      loop: true,
      pagination: {
        el: this.selectors.pagination,
        clickable: true,
      },
    })
  }
}

export default Slider