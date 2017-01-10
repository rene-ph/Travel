import $ from 'jquery';

class ArrowToTop {
  constructor() {
      this.arrow = $('.navigate-top__arrow');
      this.topPage = $('html,body');
      this.events();
  }

  events() {
      this.arrow.click(this.toTheTop.bind(this)); 
    }

  toTheTop() {
    this.topPage.animate({ scrollTop: 0 }, 'slow');
  }


}

export default ArrowToTop