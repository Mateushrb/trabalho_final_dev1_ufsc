//About
let aboutNumber = document.querySelectorAll('.about__number');

let ab1 = 0;
let ab2 = 0;
let ab3 = 0;
let ab4 = 0;

aboutNumber[0].innerText = '+0'; //+20
aboutNumber[1].innerText = '0';  //7
aboutNumber[2].innerText = '0';  //2010
aboutNumber[3].innerText = '0';  //115

const counterAB1 = () => {
    if (ab1 < 19) {
        ab1++;
        aboutNumber[0].innerText =  `+${ab1}`;
        setTimeout(counterAB1, 150);
    } else {
        ab1++;
        aboutNumber[0].innerText =  `+${ab1}`;
        setTimeout(counterAB1, 1000);
    }
}

const counterAB2 = () => {
    if (ab2 < 6) {
        ab2++;
        aboutNumber[1].innerText =  `+${ab2}`;
        setTimeout(counterAB2, 428);
    } else {
        ab2++;
        aboutNumber[1].innerText =  `+${ab2}`;
        setTimeout(counterAB2, 2000);
    }
}

const counterAB3 = () => {
    if (ab3 < 2009) {
        ab3++;
        aboutNumber[2].innerText =  `+${ab3}`;
        ab3++;
        aboutNumber[2].innerText =  `+${ab3}`;
        setTimeout(counterAB3, 1);
        ab3++;
        aboutNumber[2].innerText =  `+${ab3}`;
        ab3++;
        aboutNumber[2].innerText =  `+${ab3}`;
    } else {
        ab3++;
        aboutNumber[2].innerText =  `+${ab3}`;
        setTimeout(counterAB3, 100);
    }
}

const counterAB4 = () => {
    if (ab4 < 114) {
        ab4++;
        aboutNumber[3].innerText =  `+${ab4}`;
        setTimeout(counterAB4, 26);
    } else {
        ab4++;
        aboutNumber[3].innerText =  `+${ab4}`;
        setTimeout(counterAB4, 600);
    }
}

counterAB1();
counterAB2();
counterAB3();
counterAB4();
