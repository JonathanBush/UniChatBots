ar BanBot = new Bot("BanBot", "/");
function initializeBots() {
  BanBot.register();
}
BanBot.executeCommand =  function(data) {
  var poster = data.poster;
  var message = data.message;
  var timestamp = data.timestamp;
  var raw_timestamp = data.rawTimestamp;
 
  getArgs("/ban username")[1]
   if (message.substring(0,3) == "ban") {
  	BanBot.respond(username + " has been banned for ~1 eternity.");
  }
}
