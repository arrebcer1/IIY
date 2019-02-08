var x;
function getContactsData() {
    fetch("Data/Contact.json")
        .then(data => data.json())
        .then(data => {
            console.log(data);
            x=data;
            createContactList(data);
        })
}

var listElements=[]

function createContactList(data){
    var appContacts = new Vue({
        el :"#contactsList",
        data: {
            contacts: data
        }
    });
}

getContactsData();