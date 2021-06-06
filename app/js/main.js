// console.log(document.getElementById("orgchart"))
var chart;
document.addEventListener("DOMContentLoaded", function () {
  function pdf(nodeId) {
    chart.exportPDF({
      format: "A4",
    });
  }

  chart = new OrgChart(document.getElementById("tree"), {
    template: "luba",
    // menu: {
    //   export_pdf: {
    //     text: "Export PDF",
    //     icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
    //     onClick: pdf,
    //   },
    // },
    nodeBinding: {
      field_0: "Name",
      field_1: "Date of Birth",
      img_0: "img",
    },
    nodes: [
      {
        id: 1,
        Name: "Badraiah",
        "Date of Birth": "1920-1970",
        img: "/assets/images/missingp.png",
      },
      {
        id: 2,
        pid: 1,
        Name: "Bheemappa",
        "Date of Birth": "",
        img: "/assets/images/missingp.png",
      },
      {
        id: 3,
        pid: 2,
        Name: "Siddiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 4,
        pid: 3,
        Name: "Govindappa",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 5,
        pid: 4,
        Name: "Rukmaji",
        "Date of Birth": "",
        img: "/assets/images/missingp.png",
      },
      {
        id: 6,
        pid: 5,
        Name: "Venkaiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 7,
        pid: 5,
        Name: "Govindappa",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 8,
        pid: 5,
        Name: "Siddiah",
        "Date of Birth": "",
        img: "/assets/images/man.svg",
      },
      {
        id: 9,
        pid: 8,
        Name: "Govindappa",
        "Date of Birth": "",
        img: "/assets/images/missingp.png",
      },
      {
        id: 10,
        pid: 9,
        Name: "Venkaiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 11,
        pid: 9,
        Name: "Govindappa",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      { id: 12, pid: 9, Name: "Siddiah", "Date of Birth": "", img: "" },
      {
        id: 13,
        pid: 12,
        Name: "Govind",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 14,
        pid: 13,
        Name: "Shankeriah",
        "Date of Birth": "",
        img: "/assets/images/missingp.png",
      },
      {
        id: 15,
        pid: 13,
        Name: "Badraiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 16,
        pid: 13,
        Name: "Venkaiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 17,
        pid: 15,
        Name: "Veeraiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 18,
        pid: 17,
        Name: "Kistaiah",
        "Date of Birth": "",
        img: "/assets/images/missingp.png",
      },
      {
        id: 19,
        pid: 17,
        Name: "Venkaiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 20,
        pid: 17,
        Name: "Badraiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 21,
        pid: 19,
        Name: "Veeraiah Gupta",
        "Date of Birth": "DOD :14-12-1970",
        img: "",
      },
      {
        id: 22,
        pid: 19,
        Name: "Govindappa",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 23,
        pid: 22,
        Name: "Veerabadraiah",
        "Date of Birth": "DOD 16-12-1989",
        img: "/assets/images/missingp.png",
      },
      {
        id: 24,
        pid: 22,
        Name: "Satyam",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 25,
        pid: 22,
        Name: "Pullaiah",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 26,
        pid: 22,
        Name: "Sudarshan",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },

      {
        id: 27,
        pid: 21,
        Name: "Venkataiah",
        "Date of Birth": "DOD: 13-12-1971",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 28,
        pid: 21,
        Name: "Chandraiah",
        "Date of Birth": "DOD: 15-11-1996",
        img: "/assets/images/missingp.png",
      },
      {
        id: 29,
        pid: 21,
        Name: "Narayan Rao",
        "Date of Birth": "DOD: 06-06-2003",
        img: "/assets/images/T Narayan Rao.jpg",
      },
      {
        id: 30,
        pid: 21,
        Name: "Mahadev",
        "Date of Birth": "DOD: 12-07-2009",
        img: "/assets/images/Mahadev.jpg",
      },
      {
        id: 31,
        pid: 21,
        Name: "Vasudev Rao",
        "Date of Birth": "DOD: 12-09-1990",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 32,
        pid: 21,
        Name: "Pandarinath",
        "Date of Birth": "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 33,
        pid: 21,
        Name: "Babulnath",
        "Date of Birth": "02-09-1938 to 06-12-1990",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 34,
        pid: 21,
        Name: "Nagamalla Sharada",
        "Date of Birth": "DOD: 18-02-1997",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },

      {
        id: 35,
        pid: 27,
        Name: "Madhusudan Rao",
        "Date of Birth": "DOB: ",
        img: "/assets/images/missingp.png",
      },
      // {
      //   id: 36,
      //   pid: 27,
      //   Name: "Gudupalli Chandrakantha",
      //   "Date of Birth": "DOB: ",
      //   img: "https://cdn.balkan.app/shared/10.jpg",
      // },
      // {
      //   id: 37,
      //   pid: 27,
      //   Name: "Bachu Suryakantha",
      //   "Date of Birth": "DOB: ",
      //   img: "https://cdn.balkan.app/shared/10.jpg",
      // },
      // {
      //   id: 38,
      //   pid: 37,
      //   Name: "Bachu Gopal",
      //   "Date of Birth": "DOB: ",
      //   img: "https://cdn.balkan.app/shared/10.jpg",
      //   tags: ["partner"],
      // },
      // {
      //   id: 39,
      //   pid: 27,
      //   Name: "Javvaji Swarnalatha",
      //   "Date of Birth": "DOB: ",
      //   img: "https://cdn.balkan.app/shared/10.jpg",
      // },
      // {
      //   id: 40,
      //   pid: 27,
      //   Name: "Karumuri Sukanya",
      //   "Date of Birth": "DOB: ",
      //   img: "https://cdn.balkan.app/shared/10.jpg",
      // },
      // {
      //   id: 41,
      //   pid: 27,
      //   Name: "Kuna Jamuna",
      //   "Date of Birth": "DOB: ",
      //   img: "https://cdn.balkan.app/shared/10.jpg",
      // },
      {
        id: 42,
        pid: 28,
        Name: "Kiran Kumar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 43,
        pid: 28,
        Name: "Ravinder",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 44,
        pid: 28,
        Name: "Srinu",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 45,
        pid: 28,
        Name: "Kishore",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 46,
        pid: 29,
        Name: "Anil Kumar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 47,
        pid: 29,
        Name: "Sunil Kumar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 48,
        pid: 29,
        Name: "Pradeep Kumar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 49,
        pid: 30,
        Name: "Vinod Kumar",
        "Date of Birth": "DOB: ",
        img: "/assets/images/Vinodh Kumar - Mahadev.jpg",
      },
      {
        id: 50,
        pid: 30,
        Name: "Ramesh",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 51,
        pid: 30,
        Name: "Vishweshwar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 52,
        pid: 30,
        Name: "Venkatesh",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 53,
        pid: 31,
        Name: "Raju",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 54,
        pid: 31,
        Name: "Pramod",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 55,
        pid: 32,
        Name: "Prasad",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 56,
        pid: 33,
        Name: "Vinay Kumar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 57,
        pid: 33,
        Name: "Shiva Kumar",
        "Date of Birth": "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      
    ],
  });
  setTimeout(() => {
    chart.center(5, {
      parentState: OrgChart.EXPAND,
      childrenState: OrgChart.EXPAND,
      rippleId: 1,
      vertical: true,
      horizontal: false,
    });
    setTimeout(() => {
      chart.zoom(0.5);

      // var menu = document.querySelector("[control-export-menu]");
      // console.log(menu);
      // while (menu.children.length) menu.children[0].remove();
      // var img = document.createElement("img");
      // menu.appendChild(img);
      // img.src = "/assets/images/pdf.svg";
    }, 200);
    // chart.zoom(0.5);
  }, 1000);
});

// img: "https://cdn.balkan.app/shared/5.jpg",
// img: "https://cdn.balkan.app/shared/10.jpg",
// img: "https://cdn.balkan.app/shared/11.jpg",
