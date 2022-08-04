function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // DOM Elements
  let img = document.querySelector("#networkImg");
  let networkDisplay = document.querySelector("#networkDisplay");
  let numberBeginsWith = " ";

  // List of Networks
  const services = [
    {
      name: "MTN",
      items: [
        "703",
        "706",
        "803",
        "806",
        "810",
        "813",
        "814",
        "816",
        "903",
        "906",
        "913",
      ],
    },
    {
      name: "Airtel",
      items: ["701", "708", "802", "808", "812", "902", "907", "901", "912"],
    },
    {
      name: "GLO",
      items: ["705", "805", "807", "811", "815", "905"],
    },
    {
      name: "9Mobile",
      items: ["809", "817", "818", "908", "909"],
    },
  ];

  // Checking if phone number matches any network when user types in the input
  document.querySelector("#phoneNumber").addEventListener("keyup", () => {
    const phone = document.querySelector("#phoneNumber").value;
    const resetDOMElements = () => {
      img.classList.remove("active");
      numberBeginsWith = "";
      networkDisplay.innerHTML = "";
      networkDisplay.classList.remove("active");
    };
    if (phone.trim()[0] == "0") {
      if (phone.trim().length >= 5) {
        findNumber();
      } else {
        resetDOMElements();
      }
    } else if (phone.trim()[0] == "+") {
      if (phone.trim().length >= 7) {
        findNumber();
      } else {
        resetDOMElements();
      }
    } else if (phone.trim()[0] == "2") {
      if (phone.trim().length >= 6) {
        findNumber();
      } else {
        resetDOMElements();
      }
    }
  });

  // findNumber function finds the network provider of a number
  const findNumber = () => {
    const phone = document.querySelector("#phoneNumber").value.trim();

    numberBeginsWith = "";
    let a = phone;
    let b = a[0] == "0" ? a.slice(1, 4) : a[0] == "+" ? a.slice(4, 7) : a;
    numberBeginsWith =
      a[0] == "0" ? "0" : a.slice(0, 4) == "+234" ? "+234" : a.slice(0, 4);
    let service = null;

    for (let i = 0; i < services.length; i++) {
      let a =
        services[i].items.filter((elem) => elem == b).length > 0 ? true : false;
      if (a) {
        service = services[i].name;
        break;
      }
    }

    const imgSrc = [
      "/img/MTN.png",
      "/img/AIRTEL.jpg",
      "/img/GLO.jpg",
      "/img/9MOBILE.png",
    ];

    img.src = "";

    if (service) {
      networkDisplay.innerHTML = "";
      if (service == "MTN") {
        img.src = imgSrc[0];
        img.classList.add("active");
        services[0].items.map((item) => {
          networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
        });
        networkDisplay.classList.add("active");
      } else if (service == "Airtel") {
        img.src = imgSrc[1];
        img.classList.add("active");
        services[1].items.map((item) => {
          networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
        });
        networkDisplay.classList.add("active");
      } else if (service == "GLO") {
        img.src = imgSrc[2];
        img.classList.add("active");
        services[2].items.map((item) => {
          networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
        });
        networkDisplay.classList.add("active");
      } else if (service == "9Mobile") {
        img.src = imgSrc[3];
        img.classList.add("active");
        services[3].items.map((item) => {
          networkDisplay.innerHTML += `<div class="autocomplete">${numberBeginsWith}${item}</div>`;
        });
        networkDisplay.classList.add("active");
      }
    }

    // Adding click event to the auto complete buttons
    document.querySelectorAll(".autocomplete").forEach((elem) => {
      elem.addEventListener("click", () => {
        document.querySelector("#phoneNumber").value = elem.textContent;
      });
    });
  };

  //Image slider
  let i = 0;
  let images = [
    "/img/img1.png",
    "/img/img2.jpeg",
    "/img/img6.jpg",
    "/img/img4.jpg",
    "/img/img3.jpg",
    "/img/img5.jpg",
  ];
  const slider = () => {
    document.querySelector(
      ".bg-image-wrapper"
    ).style.backgroundImage = `url(${images[i]})`;
    document.querySelector(".bg-image-wrapper").style.opacity = "1";
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    setTimeout("slider()", 4500);
  };

  window.onload = slider;
}
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //