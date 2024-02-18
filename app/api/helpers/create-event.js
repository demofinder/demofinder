module.exports = {


  friendlyName: 'Create event',


  description: '',


  inputs: {
    data: {
      type: "ref",
      required: true,
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function ({ data }) {
    console.log(data);
    const event = await Event.create({
      id: await sails.helpers.generateGuid(),
      title: data.title,
      city: data.city,
      description: data.description,
      startsAt: data.startsAt,
      address: data.address,
    }).fetch();
    return event;
  }


};

