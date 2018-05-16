(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listtoBuy = this;

  listtoBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  listtoBuy.buy = function (index) {
    ShoppingListCheckOffService.bought(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var listBought = this;

  listBought.items = ShoppingListCheckOffService.getBoughtItems();
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [{
    name: 'cookies',
    quantity: 2
  }, {
    name: 'cream',
    quantity: 4
  },{
    name: 'milk',
    quantity: 20
  },{
    name: 'bread',
    quantity: 100
  },{
    name: 'cheese',
    quantity: 100
  },];

  var itemsBought = [];


  service.bought = function (index) {
    itemsBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index,1);
  };

  service.getItemsToBuy = function ()
  {
    return itemsToBuy;
  };

  service.getBoughtItems = function ()
  {
    return itemsBought;
  };
}


})();
