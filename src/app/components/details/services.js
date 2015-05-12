(function () {
    'use strict';

    //var details = angular.module('details');

    /**
     * @constructor Balance
     * @memberof wallet
     * @description Handle balance add/remove validation
     */
   /* wallet.factory('Balance', [function () {
        return {
            /!**
             * @method remove
             * @description Handles removing balance from currentBalance
             * @memberof wallet.Balance
             * @param {int} amount - amount to be removed from current balance
             * @param {int} balance - current wallet balance
             *!/
            remove: function remove(amount, balance) {
                var result;

                amount = parseFloat(amount);
                balance = parseFloat(balance);

                if (balance - amount < 0) {
                    result = -1;
                } else {
                    result = balance - amount;
                }

                return result;
            },
            /!**
             * @method add
             * @description Handles adding balance to wallet
             * @memberof wallet.Balance
             * @param {int} amount - amount to be added to current balance
             * @param {int} balance - current wallet balance
             *!/
            add: function add(amount, balance) {
                var result;

                amount = parseFloat(amount);
                balance = parseFloat(balance);
                result = amount + balance;

                return result;
            }
        };
    }]);*/

}());