/*
(function () {

    'use strict';


    // form

    var frm = $('.form');

    frm.submit(function (e) {

        e.preventDefault();

        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                //console.log('Ваша заявка отправлена');
                //console.log(data);
                window.location.href = 'thanks.html';
            },
            error: function (data) {
                alert('Произошла ошибка');
                //console.log(data);
            },
        });
    });


    // formReviews

    var frmReviews = $('.form--reviews');

    frmReviews.submit(function (e) {

        e.preventDefault();

        $.ajax({
            type: frmReviews.attr('method'),
            url: frmReviews.attr('action'),
            data: frmReviews.serialize(),
            success: function (data) {
                //console.log('Ваша заявка отправлена');
                //console.log(data);
                window.location.href = 'thanks.html';
            },
            error: function (data) {
                alert('Произошла ошибка');
                //console.log(data);
            },
        });
    });

})();
*/