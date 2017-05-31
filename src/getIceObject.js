const $ = require('jquery');
function getIceObject(cb){
  // Call XirSys ICE servers
  $.ajax({
    url: "https://service.xirsys.com/ice",
    data: {
      ident: "biikachu",
      secret: "5b07d922-45a5-11e7-a51d-21c877763f84",
      domain: "biikachu.github.io",
      application: "default",
      room: "default",
      secure: 1
    },
    success: function (data, status) {
      // data.d is where the iceServers object lives
      cb(data.d);
      console.log(customConfig);
    },
  });
}
modeule.exports = getIceObject;
