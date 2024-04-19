$(document).ready(function () {
  const nextYear = new Date().getFullYear() + 1;
  $(".nextYear").text(nextYear);
  const countDownDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);

    if (distance < 0) {
      clearInterval(x);
      $(".expired").text("Happy New Year 🎉🎉🎉🎉🎉");
    }
  }, 1000);
});
