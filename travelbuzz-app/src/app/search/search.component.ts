import { Component } from '@angular/core';
import { User } from './user.interface';
declare var $: any;

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    //   styleUrls: ['./app.component.css']
})
export class SearchComponent {
    public user: User;

    constructor() {
        $(function () {
            var stickyHeaderTop = $('#stickytypeheader').offset().top;

            $(window).scroll(function () {
                if ($(window).scrollTop() > stickyHeaderTop) {
                    $('#stickytypeheader').css({ position: 'fixed', top: '50px', "z-index": '16', opacity: 0.7 });
                    $('#sticky').css('display', 'block');
                } else {
                    $('#stickytypeheader').css({ position: 'static', top: '0px', opacity: 1 });
                    $('#sticky').css('display', 'none');
                }
            });
        });
    }

    public trip = [
        { value: 'single-trip', display: 'Single Trip' },
        { value: 'round-trip', display: 'Round Trip' }
    ];

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
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '33px',
        width: 'auto',
        inline: false,
        disableUntil: { year: 2016, month: 8, day: 10 },
        selectionTxtFontSize: '16px'
    };

    ngOnInit() {
        this.user = {
            trip: this.trip[0].value,
            adult: this.adults[0].value,
            children: null
        }
    }

    onDateChanged(event: any) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    }
}