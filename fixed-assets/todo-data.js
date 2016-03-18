angular.module('todo-data', [])
  .provider('TodoService', function(){
    'use strict';

    var _dbName,
        _getDB = function(){
          return JSON.parse(localStorage.getItem(_dbName)) || [];
        },
        _updateDB = function(db){
          localStorage.setItem(_dbName, JSON.stringify(db));
        };

    this.dbName = function(name){
      if (angular.isString(name)){
        _dbName = name;
      }else{
        throw Error('[TodoService(config)]: Expects dbName to be string');
      }
    };


    this.$get = function(){
      var db,
          validateItem = function(item, functionName){
            if (angular.isDefined(item) && angular.isObject(item) && !angular.isArray(item)){
              if (angular.isDefined(item.id)){
                return _getDB();
              }else {
                throw Error("[TodoService]: ."+functionName+"() expects item to contain property 'id'");
              }
            }else{
              throw Error('[TodoService]: .'+functionName+'() expects item param as object');
            }
          }

      return {
        getList: function(){
          return _getDB();
        },
        add: function(item){
          db = validateItem(item,'add');
          db = this.getList();
          db.push(item);
          _updateDB(db);
        },
        update: function(item){
          db = validateItem(item, 'update');
          var outDatedItem = this.getItem(item.id);
          var index = db.indexOf(outDatedItem);
          db[index] = item;
          _updateDB(db);
        },
        getItem(id){
          db = this.getList();
          return db.filter(function(f){
            return f.id === id;
          })[0];
        },
        delete(id){
          db = this.getList();
          var item = this.getItem(id);
          var index = db.indexOf(item);
          if (~index){
            db.splice(index,1);
          }
          _updateDB(db);
        }
      };

  	};
  });
