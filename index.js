var background = document.getElementById("background");
var milestonesBox = document.getElementById("milestones");
// temporary, until hero animation is done 
var title = document.getElementById("title");
var animation = document.getElementById("animation");
var help = $("#about #help span");
var stats = document.getElementById("stats");
var organizers = document.getElementById("organizers");
var sponsors = document.getElementById("sponsors");
var socialMedia = document.getElementById("socialMedia");
var quickIcon = document.getElementById("quickIcon");

// switches btn day/night theme based on time
var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 19) {
        $(".objectsDay").show();
        $(".objectsNight").hide();

        // day theme
        background.classList.remove("nightGradientBackground");
        background.classList.add("dayGradientBackground");

        milestonesBox.classList.remove("milestonesNightBoxColor");
        milestonesBox.classList.add("milestonesDayBoxColor");

        title.classList.remove("titleMatchNightBackground");
        title.classList.add("titleMatchDayBackground");

        animation.classList.remove("animationNight");
        animation.classList.add("animationDay");

        quickIcon.classList.remove("titleMatchNightBackground");
        quickIcon.classList.add("titleMatchDayBackground");

        help.removeClass("helpBoxNightBackground");
        help.addClass("helpBoxDayBackground");

        stats.classList.remove("statsNightTheme");
        stats.classList.add("statsDayTheme");

        organizers.classList.remove("nightOrganizersBackground");
        organizers.classList.add("dayOrganizersBackground");

        sponsors.classList.remove("nightSponsorsBackground");
        sponsors.classList.add("daySponsorsBackground");

        socialMedia.classList.remove("nightSocialMediaBackground");
        socialMedia.classList.add("daySocialMediaBackground");

        socialMedia.classList.remove("nightSocialMediaColor");
        socialMedia.classList.add("daySocialMediaColor");
    }
    else {
        // night theme
        $(".objectsDay").hide();
        $(".objectsNight").show();

        background.classList.remove("dayGradientBackground");
        background.classList.add("nightGradientBackground");

        milestonesBox.classList.remove("milestonesDayBoxColor");
        milestonesBox.classList.add("milestonesNightBoxColor");

        title.classList.remove("titleMatchDayBackground");
        title.classList.add("titleMatchNightBackground");

        animation.classList.remove("animationDay");
        animation.classList.add("animationNight");
        
        quickIcon.classList.remove("quMatchDayBackground");
        quickIcon.classList.add("titleMatchNightBackground");

        help.removeClass("helpBoxDayBackground");
        help.addClass("helpBoxNightBackground");

        stats.classList.remove("statsDayTheme");
        stats.classList.add("statsNightTheme");

        organizers.classList.remove("dayOrganizersBackground");
        organizers.classList.add("nightOrganizersBackground");

        sponsors.classList.remove("daySponsorsBackground");
        sponsors.classList.add("nightSponsorsBackground");

        socialMedia.classList.remove("daySocialMediaBackground");
        socialMedia.classList.add("nightSocialMediaBackground");
        
        socialMedia.classList.remove("daySocialMediaColor");
        socialMedia.classList.add("nightSocialMediaColor");

        // setTimeout(function() {
        var intervalID = window.setInterval(function() {
            $("#imgBack").fadeToggle(3000);
            $("#imgBack2").fadeToggle(2000);
            $("#imgBack3").fadeToggle(4000);
            $("#imgBack4").fadeToggle(1500);
            $("#imgBack5").fadeToggle(2500);
            $("#imgBack6").fadeToggle(2200);
            $("#imgBack7").fadeToggle(1200);
            $("#imgBack7-5").fadeToggle(1000);
            $("#imgBack8").fadeToggle(1700);
            $("#imgBack9").fadeToggle(0700);
            $("#imgBack9-5").fadeToggle(900);
            $("#imgBack10").fadeToggle(3100);
            $("#imgBack10-5").fadeToggle(2600);
            $("#imgBack11").fadeToggle(2900);
            $("#imgBack11-5").fadeToggle(0800);
            $("#imgBack12").fadeToggle(1800);
        }, 1000);

        var intervalID2;
        setTimeout(function() {
            // clearInterval(intervalID);

            console.log("hi");
            intervalID2 = window.setInterval(function() {
                $("#imgBack").fadeToggle(5000);
                $("#imgBack2").fadeToggle(4000);
                $("#imgBack3").fadeToggle(6000);
                $("#imgBack4").fadeToggle(3500);
                $("#imgBackA").fadeToggle(6000);
                $("#imgBackB").fadeToggle(3500);
                $("#imgBack5").fadeToggle(4500);
                $("#imgBack6").fadeToggle(4200);
                $("#imgBack7").fadeToggle(3200);
                $("#imgBack7-5").fadeToggle(3000);
                $("#imgBack8").fadeToggle(3700);
                $("#imgBack9").fadeToggle(2700);
                $("#imgBack9-5").fadeToggle(2900);
                $("#imgBack10").fadeToggle(5100);
                $("#imgBack10-5").fadeToggle(4600);
                $("#imgBack11").fadeToggle(4900);
                $("#imgBack11-5").fadeToggle(2800);
                $("#imgBack12").fadeToggle(3800);
            }, 1000);

        }, 3000);

        var intervalID3;
        setTimeout(function() {
            // clearInterval(intervalID2);

            console.log("hi3");
            intervalID3 = window.setInterval(function() {
                $("#imgBack").fadeToggle(7000);
                $("#imgBack2").fadeToggle(6000);
                $("#imgBack3").fadeToggle(8000);
                $("#imgBack4").fadeToggle(5500);
                $("#imgBackA").fadeToggle(8000);
                $("#imgBackB").fadeToggle(5500);
                $("#imgBack5").fadeToggle(5500);
                $("#imgBack6").fadeToggle(6200);
                $("#imgBack7").fadeToggle(5200);
                $("#imgBack7-5").fadeToggle(5000);
                $("#imgBack8").fadeToggle(5700);
                $("#imgBack9").fadeToggle(4700);
                $("#imgBack9-5").fadeToggle(4900);
                $("#imgBack10").fadeToggle(7100);
                $("#imgBack10-5").fadeToggle(6600);
                $("#imgBack11").fadeToggle(6900);
                $("#imgBack11-5").fadeToggle(4800);
                $("#imgBack12").fadeToggle(5800);
            }, 1000);

            // setTimeout(function() {
            //     clearInterval(intervalID2);
            //     console.log("hi2");
            // }, 5000);
        }, 6000);
        
        setTimeout(function() {
            clearInterval(intervalID);
            clearInterval(intervalID2);
            clearInterval(intervalID3);
            console.log("hi2");

            $("#imgBack").fadeIn(7000);
            $("#imgBack2").fadeIn(6000);
            $("#imgBack3").fadeIn(8000);
            $("#imgBack4").fadeIn(5500);
            $("#imgBackA").fadeIn(8000);
            $("#imgBackB").fadeIn(5500);
            $("#imgBack5").fadeIn(5500);
            $("#imgBack6").fadeIn(6200);
            $("#imgBack7").fadeIn(5200);
            $("#imgBack7-5").fadeIn(5000);
            $("#imgBack8").fadeIn(5700);
            $("#imgBack9").fadeOut(4700);
            $("#imgBack9-5").fadeIn(4900);
            $("#imgBack10").fadeOut(7100);
            $("#imgBack10-5").fadeIn(6600);
            $("#imgBack11").fadeOut(6900);
            $("#imgBack11-5").fadeOut(4800);
            $("#imgBack12").fadeIn(5800);
        }, 9000);
    }
}

// calculates what to display for countdown timer
var countDownDate = new Date("Jan 16, 2021 12:00:00").getTime();
// Update every second
var x = setInterval(function() {
    var now = new Date().getTime();
        
    var distance = countDownDate - now;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("countdown").innerHTML = "Virtual Rose Hack begins in: " + days + " days ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "VIRTUAL ROSE HACK HAS ENDED!";
    }
    else if (minutes <= 0 && hours <= 0 && days <= 0) {

        document.getElementById("countdown").innerHTML = "Virtual Rose Hack begins in: " + seconds + " sec ";
    }
    else if (hours <= 0 && days <= 0) {
        document.getElementById("countdown").innerHTML = "Virtual Rose Hack begins in: " + minutes + " min  " + seconds + " sec ";
    }
    else if (days <= 0) {
        document.getElementById("countdown").innerHTML = "Virtual Rose Hack begins in: " + hours + " hr  " + minutes + " min  " + seconds + " sec ";
    }
    else if (days == 1) {
        document.getElementById("countdown").innerHTML = "Virtual Rose Hack begins in: " + days + " day " + hours + " hr  " + minutes + " min  " + seconds + " sec ";
    }
    else if (days <= 2) {
        document.getElementById("countdown").innerHTML = "Virtual Rose Hack begins in: " + days + " days  " + hours + " hr  " + minutes + " min ";
    }
}, 1000);



// allows email to be copyied to clipboard
$(document).ready(function() {
    // $('a[href^=mailto]').addClass('mailto-link');

    var mailto = $('.mailto-link');
    var messageCopy = 'Copy email';
    var messageSuccess = 'Copied';
    
    $('.mailto-message').append(messageCopy);
    
    // Disable default action (opening your email client. yuk.)
    $('a[href^=mailto]').click(function() {
        return false; 
    })
    
    // On click, get href and remove 'mailto:'
    // Store email address in a variable.
    mailto.click(function() {
        var href = $(this).attr('href');
        var email = href.replace('mailto:', '');
        copyToClipboard(email);
        $('.mailto-message').empty().append(messageSuccess);
        setTimeout(function() {
            $('.mailto-message').empty().append(messageCopy);
        }, 2000); 
    });
});

// Copies email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

//alert to chrome if opened in ie
let userAgentString = navigator.userAgent; 
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1; 
if (IExplorerAgent == true) {
    alert("Warning: Browser not supported. To view this webpage, we recommend that you use the latest version of Chrome, Firefox, or Safari.");
}