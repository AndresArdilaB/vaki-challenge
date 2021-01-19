const functions = require('firebase-functions');
const admin = require('firebase-admin')
const cartHandler = require('./cart/cartHandler')

admin.initializeApp()

exports.cartConfirmBuy = functions.https.onCall((data) => {
  return cartHandler.cartConfirmBuy(admin, data)
})