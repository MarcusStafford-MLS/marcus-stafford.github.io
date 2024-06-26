document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }
  
    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
    document.querySelectorAll('.mobile-nav-toggle').forEach((el) => {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
        document.querySelector('body').classList.toggle('mobile-nav-active');
      })
    });
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      if (!navmenu.hash) return;
  
      let section = document.querySelector(navmenu.hash);
      if (!section) return;
  
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          document.querySelector('body').classList.remove('mobile-nav-active');
          mobileNavShow.classList.toggle('d-none');
          mobileNavHide.classList.toggle('d-none');
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    const navmenuLinks = document.querySelectorAll('.navmenu .has-dropdown > a');
  
    navmenuLinks.forEach(function(el) {
      el.addEventListener('click', function(event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');
  
          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });
  
    /**
     * Scroll with offset on page load with hash links in the URL
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          window.scrollTo({
            top: document.querySelector(window.location.hash).offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  
    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  
  });
  