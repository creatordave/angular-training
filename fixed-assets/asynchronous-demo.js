(function(){
'use strict';

angular.module('todo.data',[])

.provider('todoStuff', function(){

  var speed = 1000,
      todoList = [],
      listKey = "todoDemoList",
      privateMethods = {
        getTodo: function(){
          var list = localStorage.getItem(listKey);
          if (list === null){
            list = [];
            this.setTodo(list);
          }else{
            list = JSON.parse(list);
          }
          return list;
        },
        setTodo: function(list){
          localStorage.setItem(listKey, JSON.stringify(list));
        }
      },
      deferred = function(){
        var self = this,
            callbackFunction;
        this.data;

        this.resolve = function(resolvedData){
          this.data = resolvedData;
          if (typeof callbackFunction === "function"){
            callbackFunction(this.data);
          }
        };

        this.promise = {
          then : function(callback){
              if (typeof callback === "function"){
                if (typeof self.data !== 'undefined'){
                  callback(self.data);
                }else{
                  callbackFunction = callback;
                }
              }
          }
        };
      };


this.setSpeed = function(s){
  switch(s){
    case "slow":
      speed = 3000;
    break;
    case "normal":
      speed = 1000;
    break;
    case "fast":
      speed = 300;
    break;
    case "ultra-fast":
      speed = 1;
    break;
    case "random":
      speed = Math.floor(Math.random() * 1000) + 1;
    break;
    default:
      speed = 1000;
    break;
  }
};


this.$get = function(){

  return {
    getAll: function(){
        var defer = new deferred();
        setTimeout(function(){
          defer.resolve(privateMethods.getTodo());
        },speed);

        return defer.promise;
    },
    save: function(list){
      var defer = new deferred();
      setTimeout(function(){
        privateMethods.setTodo(list);
        defer.resolve(list);
      },speed);

      return defer.promise;
    }
  };

};

});

})();
