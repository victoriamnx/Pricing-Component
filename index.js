window.addEventListener("DOMContentLoaded", function () {
  var switchInput = document.querySelector(".switch input");
  var purpleBoxH1 = document.querySelector(".purpleBox h1");
  var whiteBoxH1 = document.querySelector(".whiteBox h1");
  var secondWhiteBoxH1 = document.querySelector(".secondWhiteBox h1");
  var originalPurpleBoxText = purpleBoxH1.textContent;
  var originalWhiteBoxText = whiteBoxH1.textContent;
  var originalSecondWhiteBoxText = secondWhiteBoxH1.textContent;
  var newValuePurpleBox = "&dollar;24.99";
  var newValueWhiteBox = "&dollar;19.99";
  var newValueSecondWhiteBox = "&dollar;39.99";

  switchInput.addEventListener("change", function () {
    if (switchInput.checked) {
      purpleBoxH1.innerHTML = newValuePurpleBox;
      whiteBoxH1.innerHTML = newValueWhiteBox;
      secondWhiteBoxH1.innerHTML = newValueSecondWhiteBox;
    } else {
      purpleBoxH1.textContent = originalPurpleBoxText;
      whiteBoxH1.textContent = originalWhiteBoxText;
      secondWhiteBoxH1.textContent = originalSecondWhiteBoxText;
    }
  });
});
