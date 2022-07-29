function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  document.querySelector("form").addEventListener(
    "submit", (e) => {
      e.preventDefault()
    }
  )

  const button = document.querySelector("#btn");
  const result = document.querySelector("#result");


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

  const findNumber = () => {
    const phone = document.querySelector("#phoneNumber").value.trim();
    result.textContent = "";
    console.log(phone);
    let a = phone;
    let b = a[0] == "0" ? a.slice(1, 4) : a[0] == "+" ? a.slice(4, 7) : a;
    let service = null;
    let c = 0;

    for (let i = 0; i < services.length; i++) {
      c++;
      let a =
        services[i].items.filter((elem) => elem == b).length > 0 ? true : false;
      if (a) {
        service = services[i].name;
        break;
      }
    }
    if (service) {
      result.textContent = service;
    }
    console.log(c, service);
  };

  button.addEventListener("click", findNumber);

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //