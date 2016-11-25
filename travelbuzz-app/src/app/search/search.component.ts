import { Component,NgZone } from '@angular/core';
import { User } from './user.interface';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
})

export class SearchComponent {
    public user: User;
    width :Number;
    height : Number;

 
    googleGeoCode1: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
    googleGeoCode2: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";    
   
    constructor(public router: Router, ngZone :NgZone) {
        $(function () {
            var stickyHeaderTop = $('#formcontainers').offset().top;

            $(window).scroll(function () {
                if ($(window).scrollTop() > stickyHeaderTop) {
                    $('#formcontainers').css({ position: 'fixed', top : '-25px', "z-index": '16', opacity: 0.87, width : '100%'});
                    $('#formBlue').css({width : '940px', padding: '11px', "background-color": '#30302F', "border-radius": "11px"});
                    $('#formBlue').addClass("container");
                    $('#sticky').css('display', 'block');
                } else {
                    $('#formcontainers').css({ position: 'static', top : '0px', opacity: 1, width : '962px' });
                    $('#formBlue').css({width : '940px', padding: '0px', "background-color": '#B3C89A', "border-radius": "0px"});
                    $('#sticky').css('display', 'none');
                }
            });
        });
        window.onresize = (e) =>
        {
                 ngZone.run(() => {
                 this.width = window.innerWidth;
                        this.height = window.innerHeight;
                        console.log("width : "+this.width);
                        console.log("width : "+this.height);
                    });
                };
    }
   
    public trip = [
        { value: 'single-trip', display: 'Single Trip' },
        { value: 'round-trip', display: 'Round Trip' }
    ];
    
    model3 = {key: 3, name: "Key Three"};

    public adults = [
        { value: 1, display: 1 },
        { value: 2, display: 2 },
        { value: 3, display: 3 },
        { value: 4, display: 4 },
        { value: 5, display: 5 },
        { value: 6, display: 6 }
    ];

    public children = [
        { value: 1, display: 1 },
        { value: 2, display: 2 },
        { value: 3, display: 3 },
        { value: 4, display: 4 },
        { value: 5, display: 5 },
        { value: 6, display: 6 }
    ];

    myDatePickerOptions = {
      //  todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '33px',
        width: '200px',
        inline: false,
        disableUntil: { year: 2016, month: 8, day: 10 },
        selectionTxtFontSize: '16px',
        showDateFormatPlaceholder: false,
        indicateInvalidDate: true
    };

    ngOnInit() {
        this.user = {
            trip: this.trip[0].value,
            adult: null,
            children: null,
        }
    }

    onDateChanged(event: any) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    }

    onsubmit() {
        console.log('submit clicked!!');
        this.router.navigate(['result']);
    }
}






















// import { Component } from '@angular/core';
// import { User } from './user.interface';
// import { Trip } from './trip.interface';
// import { Adults } from './adults.interface';
// import { Children } from './children.interface';
// declare var $: any;

// @Component({
//     selector: 'search',
//     templateUrl: './search.component.html',
//     //   styleUrls: ['./app.component.css']
// })
// export class SearchComponent {
//     public user: User;

//     constructor() {
        
//         $(function () {
//             var stickyHeaderTop = $('#stickytypeheader').offset().top;

//             $(window).scroll(function () {
//                 if ($(window).scrollTop() > stickyHeaderTop) {
//                     $('#stickytypeheader').css({ position: 'fixed', top: '50px', "z-index": '16', opacity: 0.7 });
//                     $('#sticky').css('display', 'block');
//                 } else {
//                     $('#stickytypeheader').css({ position: 'static', top: '0px', opacity: 1 });
//                     $('#sticky').css('display', 'none');
//                 }
//             });
//         });
// }

//     public trip: Trip[] = [
//         { value: 'single-trip', display: 'Single Trip' },
//         { value: 'round-trip', display: 'Round Trip' }
//     ];

//     public adults: Adults[] = [
//         { value: 1, display: 'Adults' },
//         { value: 1, display: '1' },
//         { value: 2, display: '2' },
//         { value: 3, display: '3' },
//         { value: 4, display: '4' },
//         { value: 5, display: '5' },
//         { value: 6, display: '6' }
//     ];

//     public children: Children[] = [
//         { value: 0, display: 'Children' },
//        { value: 1, display: '1' },
//         { value: 2, display: '2' },
//         { value: 3, display: '3' },
//         { value: 4, display: '4' },
//         { value: 5, display: '5' },
//         { value: 6, display: '6' }
//     ];

//     myDatePickerOptions = {
//       //  todayBtnTxt: 'Today',
//         dateFormat: 'yyyy-mm-dd',
//         firstDayOfWeek: 'mo',
//         sunHighlight: true,
//         height: '33px',
//         width: '200px',
//         inline: false,
//         disableUntil: { year: 2016, month: 8, day: 10 },
//         selectionTxtFontSize: '16px',
//         showDateFormatPlaceholder: false,
//         indicateInvalidDate: true
//     };

//     ngOnInit() {
//         this.user = {
//             trip: this.trip[0].value,
//             adult: this.adults[0].value,
//             children: null,
//             // startDate: new Date(),
//             // endDate: null
//         }
//     }

//     onDateChanged(event: any) {
//         console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
//     }
// }