module.exports = {


  friendlyName: 'View events',


  description: 'Display "EVENTS" page.',


  exits: {
    success: {
      viewTemplatePath: 'pages/events'
    }
  },


  fn: async function () {

    const events = await Event.find({
      select: ['id', 'title', 'eventType', 'city', 'address', 'startsAt'],
    });

    // Respond with view.
    return { events };
  }


};
