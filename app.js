var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.type;
var downlink = connection.downlink;

var root = document.getElementById('root');
var container = document.createElement('div');
container.setAttribute('class', 'container');
root.appendChild(container);

var para = document.createElement('p');
para.setAttribute('id', 'main-text');
container.appendChild(para);

console.log('Current connection type is ' + type + ' with bandwidth ' + connection.bandwidth + ' and downlink ' + downlink + 'Mb/s');
para.innerHTML = 'Current connection type is ' + type + ' with bandwidth ' + connection.bandwidth + ' and downlink ' + downlink + 'Mb/s';

function updateConnection() {
    console.log('Connection switched from ' + type + ' to ' + connection.type);
    para.innerHTML = 'Connection switched from ' + type + ' to ' + connection.type;
}

connection.onchange = updateConnection;
connection.addEventListener('typechange', updateConnection);