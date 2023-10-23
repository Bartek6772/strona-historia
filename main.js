// ##### MENU #####
(function () {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        // sections[e.id] = e.offsetTop + e.parentElement.offsetTop - 60;
        sections[e.id] = e.offsetTop - 60;
    });


    console.log(sections);

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
})();

// ######## INSERTING DATES ########
var dates = [
    {date: "996", text: "chrzest polski"},
    {date: "1000", text: "zjazd gnieźnieński"},
    {date: "1002", text: "wojna z Niemcami"},
    {date: "1025", text: "koronacja Bolesława Chrobrego"},
    {date: "1031", text: "Jednoczesny atak Niemiec i Rusi na Polskę"},
    {date: "1034", text: "śmierć Mieszka II"},
    {date: "1075", text: "ogłoszenie \"Dictatus Pape\""},
    {date: "1076", text: "koronacja Bolesława Śmiałego"},
    {date: "1333", text: "koronacja Kazimierza Wielkiego"},
    {date: "1335", text: "zjazd monarchów w Wyszehradzie"},
    {date: "1339", text: "sąd papieski nad Krzyżakami"},
    {date: "1343", text: "kompromisowy pokój z Krzyżakami"},
    {date: "1351", text: "książęta mazowieccy uznali się lennikami króla Polski"},
    {date: "1356", text: "układ o zrzeczeniu się Śląska w Pradze"},
]

var i = 0
var list;

for( i in dates){

    if(i % 8 == 0){
        var el = document.createElement('ul');
        document.querySelector('#daty .content').appendChild(el)
        list = el
    }

    list.innerHTML += `<li><b>${dates[i].date}</b> - ${dates[i].text}`;
}

// ########## ANIMATIONS #########
window.sr = ScrollReveal();
sr.reveal('h1, h2, h3', {
    reset: false,
    delay: 300,
    distance: '20px'
});

sr.reveal('li', {
    reset: false,
    delay: 300,
    // distance: '10px',
    duration: 500,
    opacity: 0,
    scale: 0,
});

sr.reveal('.map', {
    reset: false,
    delay: 300,
    // distance: '20px',
    // origin: 'right',
    scale: 0,
});

sr.reveal('.imgRV', {
    reset: false,
    delay: 300,
    distance: '20px',
    origin: 'right'
});

sr.reveal('p', {
    reset: false,
    delay: 300,
    distance: '20px',
    origin: 'left',
    // scale: 0,
});




