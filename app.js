const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    slidesArray: [
      {
        item: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        active: true,
      },
      {
        item: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
        active: false,
      },
      {
        item: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipssum, dolor sit amet consectetur adipisicing elit.',
        active: false,
      },
      {
        item: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        active: false,
      },
      {
        item: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        active: false,
      },
    ],
  },
  methods: {
    changeSlide: function (directionUp) {
      let activeIndex;

      this.slidesArray.forEach(({ active }, i) => {
        if (active) {
          activeIndex = i;
        }
      });

      this.slidesArray[activeIndex].active = false;

      if (directionUp) {
        // up
        if (activeIndex <= 0) {
          activeIndex = this.slidesArray.length - 1;
        } else {
          activeIndex--;
        }
      } else {
        // down
        if (activeIndex >= this.slidesArray.length - 1) {
          activeIndex = 0;
        } else {
          activeIndex++;
        }
      }

      this.slidesArray[activeIndex].active = true;
    },
  },
});
