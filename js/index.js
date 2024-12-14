let backToTopBtn = document.querySelector('.back-to-top');

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

let menuItems = document.getElementsByClassName('menu-item');

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active');
        currMenu.classList.remove('active');
        item.classList.add('active');
    };
});

let scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60); };

let elToShow = document.querySelectorAll('.animasi-scroll');

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
};

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start');
        } else {
            item.classList.remove('start');
        }
    });

    scroll(loop);
};

loop();

let bottomNavItems = document.querySelectorAll('.mobile-navigasi-item');

let bottomMove = document.querySelector('.mobile-navigasi-animasipindah');

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        let crrItem = document.querySelector('.mobile-navigasi-item.active');
        crrItem.classList.remove('active');
        item.classList.add('active');
        bottomMove.style.left = index * 25 + '%';
    };
});

// Menambahkan animasi scroll untuk kartu di #about, #internship, dan #konten
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("#about .konten-item, #internship .konten-item, #konten .konten-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("card-scroll-animation");
            }
        });
    });

    cards.forEach((card) => observer.observe(card));
});

const texts = ["Hallo!", " My name is Auf Fajri Ramadhani."];
let i = 0, j = 0;
const typing = () => {
  if (i < texts.length) {
    const currentText = texts[i];
    if (j < currentText.length) {
      document.getElementById("typing").innerHTML += currentText[j];
      j++;
      setTimeout(typing, 100);
    } else {
      j = 0;
      i++;
      setTimeout(typing, 1000);
    }
  }
};
typing();

const textss = ["I am", " a computer science student at singaperbangsa karawang university."];
let k = 0, l = 0;

const typingg = () => {
  if (k < textss.length) {
    const currentText = textss[k];
    if (l < currentText.length) {
      document.getElementById("typingg").innerHTML += currentText[l]; // Changed j to l
      l++;
      setTimeout(typingg, 100);
    } else {
      l = 0;
      k++;
      setTimeout(typingg, 1000);
    }
  }
};

typingg();



// const texts = ["I am a computer science student at Singaperbangsa Karawang University."];
// let k = 0, l = 0;
// const typing2 = () => {
//     if(k< texts.length) {
//         const currentText = texts[i];
//         if (l < currentText.length) {
//             document.getElementById(typing2).innerHTML += currentText[l];
//             l++;
//             setTimeout(typing2, 100);
//         } else {
//             l=0;
//             k++;
//             setTimeout(typing2,1000);
//         }
//     }
// };
// typing2();
// const texts = ["Hallo! " , "My name is Auf Fajri Ramadhani."];
// let i = 0, j = 0;
// const typing2 = () => {
//   if (i < texts.length) {
//     const currentText = texts[i];
//     if (j < currentText.length) {
//       document.getElementById("typing2").innerHTML += currentText[j];
//       j++;
//       setTimeout(typing, 100);
//     } else {
//       j = 0;
//       i++;
//       setTimeout(typing, 1000);
//     }
//   }
// };
// typing2();
