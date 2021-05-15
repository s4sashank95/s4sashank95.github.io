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
    menu: {
      export_pdf: {
        text: "Export PDF",
        icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
        onClick: pdf,
      },
    },
    nodeBinding: {
      field_0: "name",
      field_1: "dob",
      img_0: "img",
    },
    nodes: [
      {
        id: 1,
        name: "Badraiah",
        dob: "1920-1970",
        img: "/assets/images/2.jpg",
      },
      {
        id: 2,
        pid: 1,
        name: "Bheemappa",
        dob: "",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 3,
        pid: 2,
        name: "Siddiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 4,
        pid: 3,
        name: "Govindappa",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 5,
        pid: 4,
        name: "Rukmaji",
        dob: "",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 6,
        pid: 5,
        name: "Venkaiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 7,
        pid: 5,
        name: "Govindappa",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 8,
        pid: 5,
        name: "Siddiah",
        dob: "",
        img: "/assets/images/man.svg",
      },
      {
        id: 9,
        pid: 8,
        name: "Govindappa",
        dob: "",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 10,
        pid: 9,
        name: "Venkaiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 11,
        pid: 9,
        name: "Govindappa",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      { id: 12, pid: 9, name: "Siddiah", dob: "", img: "" },
      {
        id: 13,
        pid: 12,
        name: "Govind",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 14,
        pid: 13,
        name: "Shankeriah",
        dob: "",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 15,
        pid: 13,
        name: "Badraiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 16,
        pid: 13,
        name: "Venkaiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 17,
        pid: 15,
        name: "Veeriah",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 18,
        pid: 17,
        name: "Kistaiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 19,
        pid: 17,
        name: "Venkaiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 20,
        pid: 17,
        name: "Badraiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 21,
        pid: 19,
        name: "Veeraiah Gupta",
        dob: "DOD :14-12-1970",
        img: "",
      },
      {
        id: 22,
        pid: 19,
        name: "Govindappa",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 23,
        pid: 22,
        name: "Veerabadraiah",
        dob: "DOD 16-12-1989",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 24,
        pid: 22,
        name: "Satyam",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 25,
        pid: 22,
        name: "Pullaiah",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 26,
        pid: 22,
        name: "Sudarshan",
        dob: "",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },

      {
        id: 27,
        pid: 21,
        name: "Venkataiah",
        dob: "DOD: 13-12-1971",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 28,
        pid: 21,
        name: "Chandraiah",
        dob: "DOD: 15-11-1996",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 29,
        pid: 21,
        name: "Narayan Rao",
        dob: "DOD: 06-06-2003",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 30,
        pid: 21,
        name: "Mahadev",
        dob: "DOD: 12-07-2009",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 31,
        pid: 21,
        name: "Vasudev Rao",
        dob: "DOD: 12-09-1990",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 32,
        pid: 21,
        name: "Pandarinath",
        dob: "",
        img: "https://cdn.balkan.app/shared/11.jpg",
      },
      {
        id: 33,
        pid: 21,
        name: "Babulnath",
        dob: "02-09-1938 to 06-12-1990",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 34,
        pid: 21,
        name: "Nagamalla Sharada",
        dob: "DOD: 18-02-1997",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },

      {
        id: 35,
        pid: 27,
        name: "Madhusudan Rao",
        dob: "DOB: ",
        img: "https://cdn.balkan.app/shared/5.jpg",
      },
      {
        id: 36,
        pid: 27,
        name: "Gudupalli Chandrakantha",
        dob: "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 37,
        pid: 27,
        name: "Bachu Suryakantha",
        dob: "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 41,
        pid: 37,
        name: "Bachu Gopal",
        dob: "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
        tags: ["partner"],
      },
      {
        id: 38,
        pid: 27,
        name: "Javvaji Swarnalatha",
        dob: "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 39,
        pid: 27,
        name: "Karumuri Sukanya",
        dob: "DOB: ",
        img: "https://cdn.balkan.app/shared/10.jpg",
      },
      {
        id: 40,
        pid: 27,
        name: "Kuna Jamuna",
        dob: "DOB: ",
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

      var menu = document.querySelector("[control-export-menu]");
      console.log(menu);
      // while (menu.children.length) menu.children[0].remove();
    }, 200);
    // chart.zoom(0.5);
  }, 1000);
});
