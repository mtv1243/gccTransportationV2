console.log('working');

let $sectionsWrapper = $('#sections-wrapper');
let $sidebar = $('#sidebar');

function expandSidebar() {
  $sectionsWrapper.animate({
    'flex-basis': '30%'
  }, 200);
  $sidebar.animate({
    'flex-basis': '70%'
  }, 200);
}

function expandMain() {
  $sidebar.animate({
    'flex-basis': '30%'
  }, 200);
  $sectionsWrapper.animate({
    'flex-basis': '70%'
  }, 200);
}

//Sections variables
let $titleSect = $('.title');
let $servicesSect = $('.services');
let $enrollSect = $('.enroll');
let $driversSect = $('.drivers');
let $eligibilitySect = $('.eligibility');
let $applySect = $('.apply');
let $benefitsSect = $('.benefits');

// Mobile menu bar code
let $menuMobile = $('.menu-bar-mobile');
let $bars = $('.fa-bars');
let $menuX = $('.fa-times');

//desktop menu items variables
let $servicesItem = $('.item01');
let $enrollItem = $('.item02');
let $driversItem = $('.item03');
let $eligibilityItem = $('.item04');
let $careersItem = $('.item05');
let $benefitsItem = $('.item06');

//mobile menu items variables
let $servicesMobileItem = $('.mobile-item01');
let $enrollMobileItem = $('.mobile-item02');
let $driversMobileItem = $('.mobile-item03');
let $eligibilityMobileItem = $('.mobile-item04');
let $careersMobileItem = $('.mobile-item05');
let $benefitsMobileItem = $('.mobile-item06');

//scroll
$servicesItem.click(()=>{
    expandMain();
  scrollToElement($servicesSect)
});

$enrollItem.click(()=>{
    expandMain();
  scrollToElement($enrollSect)
});

$driversItem.click(()=>{
    expandMain();
  scrollToElement($driversSect)
});

$careersItem.click(()=>{
    expandSidebar();
  scrollToElement($applySect)
});

$eligibilityItem.click(()=>{
    expandSidebar();
  scrollToElement($eligibilitySect)
});

$benefitsItem.click(()=>{
    expandSidebar();
  scrollToElement($benefitsSect)
});

//desktop scroll function
function scrollToElement(element){
  setTimeout(()=>{
    $("html").animate(
    {
      scrollTop: element.offset().top - 120
    },
    "slow"
  );
  }, 200);
}

//mobile scroll
$bars.click((evt)=>{
  // console.log(evt);
  $menuMobile.slideToggle();
  $bars.fadeOut(200);
  setTimeout(()=>{$menuX.fadeIn(200)}, 200);
});

$menuX.click((evt)=>{
  $menuMobile.slideToggle();
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

$servicesMobileItem.click(()=>{
  console.log('click');
  mobileScrollToElement($servicesSect);
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

$enrollMobileItem.click(()=>{
  console.log('click');
  mobileScrollToElement($enrollSect);
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

$driversMobileItem.click(()=>{
  console.log('click');
  mobileScrollToElement($driversSect);
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

$eligibilityMobileItem.click(()=>{
  console.log('click');
  mobileScrollToElement($eligibilitySect);
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

$careersMobileItem.click(()=>{
  console.log('click');
  mobileScrollToElement($applySect);
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

$benefitsMobileItem.click(()=>{
  console.log('click');
  mobileScrollToElement($benefitsSect);
  $menuX.fadeOut(200);
  setTimeout(()=>{$bars.fadeIn(200)}, 200);
});

//scroll mobile function
function mobileScrollToElement(element) {
  $("html").animate(
    {
      scrollTop: element.offset().top - 120
    },
    "slow"
  );
  $menuMobile.slideToggle();
}

//Apply section code
let $paperformWrapper = $('.paperform-wrapper');
let $paperformButton = $('.paperform-button');

$paperformButton.click(()=>{
  $paperformWrapper.slideToggle();
  console.log('click');
});