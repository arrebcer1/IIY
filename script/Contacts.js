var x;
var all;
var filtered = [];

function getContactsData() {
    fetch("Data/colleges.json")
        .then(data => data.json())
        .then(data => {
            console.log(data);
            all = data;
            filtered = all;
            displayCollege();
        })
}

var listElements = []

var appContacts = new Vue({
    el: "#collegeList",
    data: {
        colleges: filtered
    }
});


function searchCollege() {
    var el = document.getElementById("search")
    x = el.value
    displayCollege()
}

function displayCollege() {
    var result = []
    if (x == undefined || x == "") {
        appContacts._data.colleges=all;
        return all;
    }
    all.forEach(element => {
        if (element.college.toLowerCase().includes(x.toLowerCase()) || element.country.toLowerCase().includes(x.toLowerCase())) {
            result.push(element)
        }
    });
    filtered = result;
    appContacts._data.colleges=result;
    return result;
}

getContactsData();