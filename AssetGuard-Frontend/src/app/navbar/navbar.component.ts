import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthserviceService } from '../auth/authservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit,OnInit {
  signedInEmail:any = '';
  constructor(private router: Router,
    private authService: AuthserviceService) {}

  ngOnInit(): void {
    this.signedInEmail = this.authService.getSignedInEmail();
  }

  ngAfterViewInit() {
     
    this.initNavbarAnimation();
    this.setActiveNavItem();
  }

  initNavbarAnimation() {
    const self = this;

    function adjustSelector() {
      const tabsNewAnim = $('#navbarSupportedContent');
      const selectorNewAnim = tabsNewAnim.find('li').length;
      const activeItemNewAnim = tabsNewAnim.find('.active');
      const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      const itemPosNewAnimTop = activeItemNewAnim.position();
      const itemPosNewAnimLeft = activeItemNewAnim.position();

      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px'
      });
    }

    $('#navbarSupportedContent').on('click', 'li', function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      adjustSelector();
    });

    $(window).on('resize', function () {
      setTimeout(function () {
        adjustSelector();
      }, 500);
    });

    $('.navbar-toggler').click(function () {
      $('.navbar-collapse').slideToggle(300);
      setTimeout(function () {
        adjustSelector();
      });
    });
  }

  setActiveNavItem() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass('active');
  }


  
}