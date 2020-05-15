/* Validation flag */
var valid = 0;
var pass_valid = 0;

/* Form validation */
$('.submit').click(function() {
    /* First and last name */
    $('.input[type="text"]').each(function() {
        if ($(this).val() == '' || $(this).val().length < 3) {

            $(this).addClass('input-error');
            $(this).parent().find('.input-error-message').removeClass('hidden');
        } else {
            $(this).removeClass('input-error');
            $(this).parent().find('.input-error-message').addClass('hidden');
            valid = 1;
        }
    });
    /* Email */
    $('.input[type="email"]').each(function() {
        if ($(this).val() == '') {

            $(this).addClass('input-error');
            $(this).parent().find('.input-error-message').removeClass('hidden');
        } else if (!isEmail($(this).val())) {

            $(this).addClass('input-error');
            $(this).parent().find('.invalid-email-message').removeClass('hidden');
        } else {

            $(this).removeClass('input-error');
            $(this).parent().find('.input-error-message').addClass('hidden');
            valid = 1;
        }

    });
    /* Password */
    $('.input[type="password"]').each(function() {
        if ($(this).val() == '' || $(this).val().length < 8) {

            $(this).addClass('input-error');
            $(this).parent().find('.input-error-message').removeClass('hidden');
        } else {
            $(this).removeClass('input-error');
            $(this).parent().find('.input-error-message').addClass('hidden');
            pass_valid = 1;

        }
    })

    if (valid == 1 && pass_valid == 1) {
        $('.container').addClass('hidden');
        $('.thanks-container').removeClass('hidden');
        $('.thanks-container').addClass('animated bounceInUp');
        $('html').css('overflow', 'hidden');
    }
});

/* remove errors on typing */

$('.input[type="text"]').each(function() {
    $(this).keyup(function() {

        if ($(this).val() != '' && $(this).val().length >= 3) {


            $(this).removeClass('input-error');
            $(this).parent().find('.input-error-message').addClass('hidden');
        } else {

            $(this).addClass('input-error');
            $(this).parent().find('.input-error-message').removeClass('hidden');
        }
    })
});


$('.input[type="email"]').each(function() {
    $(this).keyup(function() {

        if (isEmail($(this).val())) {


            $(this).removeClass('input-error');
            $(this).parent().find('.input-error-message').addClass('hidden');
        } else {

            $(this).addClass('input-error');
            $(this).parent().find('.input-error-message').removeClass('hidden');
        }
    })
});


$('.input[type="password"]').each(function() {
    $(this).keyup(function() {

        if ($(this).val() != '' && $(this).val().length >= 8) {


            $(this).removeClass('input-error');
            $(this).parent().find('.input-error-message').addClass('hidden');
        } else {

            $(this).addClass('input-error');
            $(this).parent().find('.input-error-message').removeClass('hidden');
        }
    })
});

/* Email validation function */
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}