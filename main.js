var thehours = new Date().getHours();
var themessage;
var morning = ('Good Morning!');
var afternoon = ('Good Afternoon!');
var evening = ('Good Evening!');

if (thehours >= 0 && thehours < 12) {
  themessage = morning;

} else if (thehours >= 12 && thehours < 17) {
  themessage = afternoon;

} else if (thehours >= 17 && thehours < 24) {
  themessage = evening;
}

console.log(themessage)

$('.greeting').append(themessage);


/* for the progress bar */

$(document).on('scroll', function() {
  var pixelsFromtop = $(document).scrollTop()

  //   1. make some vairables for our documentHeight and documentWidth
  //   2. make a variable to work out the difference between the two
  //   3. using the difference and the scroll position, divide the difference from the pixelsFromtop to make a percentage
  //   4. multiply by 100 to get a % figure

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromtop / difference

  $('.bar').css('width', percentage + '%')
})

