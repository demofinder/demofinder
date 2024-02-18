/**
 * Event.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
      type: 'string',
      required: true,
      unique: true,
      isUUID: true,
      example: '4d773c0a-c5b0-4d1c-867c-867cbba6bc41'
    },

    eventType: {
      type: 'string',
      isIn: ['demo'],
      defaultsTo: 'demo'
    },

    countryCode: {
      type: 'string',
      defaultsTo: 'de',
    },
    city: {
      type: 'string',
      required: true,
    },
    address: {
      type: 'string',
      required: true,
    },
    status: {
      type: 'string',
      isIn: ['pending', 'registered', 'canceled'],
      defaultsTo: 'pending',
    },
    startsAt: {
      type: 'string',
      required: true,
      description: 'Localtime start',
      example: '2024-01-31 14:00:00'
    },
    endsAt: {
      type: 'string',
      required: false,
      description: 'Localtime end',
      example: '2024-01-31 14:00:00'
    },

    title: {
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 1024,
    },
    description: {
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 1024,
    },
    organizedBy: {
      type: 'string',
      allowNull: true,
      maxLength: 30,
    },
    url: {
      type: 'string',
      isURL: true,
      allowNull: true,
      maxLength: 512,
    },
    imgUrl: {
      type: 'string',
      isURL: true,
      allowNull: true,
      maxLength: 512,
    },



    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

