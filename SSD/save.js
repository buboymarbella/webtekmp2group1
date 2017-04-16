
if(localStorage.getItem('inventory') == null){
var request = new XMLHttpRequest();
var inventory;

request.open('GET', 'https://api.myjson.com/bins/yjdfz', true);

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        inventory = JSON.parse(this.responseText);
        localStorage.setItem('inventory', JSON.stringify(inventory));
    }
};

request.send();
    console.log("saved");
}
