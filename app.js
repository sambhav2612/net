var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.type;

console.log(' Current connection type is ' + type);

function updateConnection() {
    console.log('Connection switched from ' + type + ' to' + connection.type);
}

connection.addEventListener('typechange', updateConnection);