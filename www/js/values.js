'use strict';

(function(){
  var customConfig = {};
  //與後端 json 對應的版本控制
  customConfig.version = 2;
  //選單列表(白名單)，實際顯示的選單由 json 控制
  customConfig.menulists = {
    "news":"即時訊息",
    "session":"議程",
    "sponsor":"贊助",
    "speaker":"講者",
    "location":"交通指南",
    "community":"社群"
  };
  
  angular
    .module('mopconApp.values',[])
    .constant('appParam', customConfig);

  
})();