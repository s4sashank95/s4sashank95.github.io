// console.log(document.getElementById("orgchart"))
var chart;
document.addEventListener('DOMContentLoaded', function () {

    function pdf(nodeId) {
        chart.exportPDF({
            format: "A4"
        });
    }
    
    chart = new OrgChart(document.getElementById("tree"), {
           
            template:'polina',
        menu: {
            export_pdf: {
                text: "Export PDF",
                icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
                onClick: pdf
            },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        nodes: [
            { id: 1, name: "Badraiah", title: "1920-1970", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Bheemappa", title: "", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 3, pid: 2, name: "Siddiah", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 4, pid: 3, name: "Govindappa", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 5, pid: 4, name: "Rukmaji", title: "", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 6, pid: 5, name: "Venkaiah", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 7, pid: 5, name: "Govindappa", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 8, pid: 5, name: "Siddiah", title: "", img: "man.svg" },
            { id: 9, pid: 8, name: "Govindappa", title: "", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 10, pid: 9, name: "Venkaiah", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 11, pid: 9, name: "Govindappa", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 12, pid: 9, name: "Siddiah", title: "", img: "" }, 
            { id: 13, pid: 12, name: "Govind", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 14, pid: 13, name: "Shankeriah", title: "", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 15, pid: 13, name: "Badraiah", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 16, pid: 13, name: "Venkaiah", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 17, pid: 15, name: "Veeriah", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 18, pid: 17, name: "Kistaiah", title: "", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 19, pid: 17, name: "Venkaiah", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 20, pid: 17, name: "Badraiah", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 21, pid: 19, name: "Veeraiah Gupta", title: "DOD :14-12-1970", img: "" },
            { id: 22, pid: 19, name: "Govindappa", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 23, pid: 22, name: "Veerabadraiah", title: "DOD 16-12-1989", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 24, pid: 22, name: "Satyam", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 25, pid: 22, name: "Pullaiah", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 26, pid: 22, name: "Sudarshan", title: "", img: "https://cdn.balkan.app/shared/10.jpg" },

            { id: 27, pid: 21, name: "Venkataiah", title: "DOD: 13-12-1971", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 28, pid: 21, name: "Chandraiah", title: "DOD: 15-11-1996", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 29, pid: 21, name: "Narayan Rao", title: "DOD: 06-06-2003", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 30, pid: 21, name: "Mahadev", title: "DOD: 12-07-2009", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 31, pid: 21, name: "Vasudev Rao", title: "DOD: 12-09-1990", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 32, pid: 21, name: "Pandarinath", title: "", img: "https://cdn.balkan.app/shared/11.jpg" },
            { id: 33, pid: 21, name: "Babulnath", title: "02-09-1938 to 06-12-1990", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 34, pid: 21, name: "Nagamalla Sharada", title: "DOD: 18-02-1997", img: "https://cdn.balkan.app/shared/10.jpg" },

            { id: 35, pid: 27, name: "Madhusudan Rao", title: "DOB: ", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 36, pid: 27, name: "Gudupalli Chandrakantha", title: "DOB: ", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 37, pid: 27, name: "Bachu Suryakantha", title: "DOB: ", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 41, pid: 37, name: "Bachu Gopal", title: "DOB: ", img: "https://cdn.balkan.app/shared/10.jpg", tags: ['partner'] },
            { id: 38, pid: 27, name: "Javvaji Swarnalatha", title: "DOB: ", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 39, pid: 27, name: "Karumuri Sukanya", title: "DOB: ", img: "https://cdn.balkan.app/shared/10.jpg" },
            { id: 40, pid: 27, name: "Kuna Jamuna", title: "DOB: ", img: "https://cdn.balkan.app/shared/10.jpg" },    




        ]
    
    });  
    setTimeout(() => {

        chart.center(5,     {
            parentState: OrgChart.EXPAND,
            childrenState: OrgChart.EXPAND,
            rippleId: 1,
            vertical: true,
            horizontal: false
        });
        setTimeout(() => {
            chart.zoom(0.5)
            
        }, 2000);
        
    }, 1000); 

});
