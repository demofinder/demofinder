module.exports = {


  friendlyName: 'Deliver new event',


  description: 'Deliver a new event to the appropriate internal channel(s).',


  //keep in sync with *.page.js
  inputs: {

    title: {
      required: true,
      type: 'string',
      minLength: 10,
      maxLength: 1024,
    },

    city: {
      required: true,
      type: 'string',
      minLength: 3,
    },

    address: {
      required: true,
      type: 'string',
      minLength: 3,
    },

    startsAt: {
      required: true,
      type: 'string',
    },

    description: {
      type: 'string',
      minLength: 10,
      maxLength: 1024,
    }

  },


  exits: {

    success: {
      description: 'The event was sent successfully.'
    }

  },


  fn: async function (inputs) {

    const event = await sails.helpers.createEvent({ ...inputs });
    console.log(event);

    /*

    if (!sails.config.custom.internalEmailAddress) {
      throw new Error(
        `Cannot deliver incoming message from contact form because there is no internal
email address (\`sails.config.custom.internalEmailAddress\`) configured for this
app.  To enable contact form emails, you'll need to add this missing setting to
your custom config -- usually in \`config/custom.js\`, \`config/staging.js\`,
\`config/production.js\`, or via system environment variables.`
      );
    }

    await sails.helpers.sendTemplateEmail.with({
      to: sails.config.custom.internalEmailAddress,
      subject: 'New contact form message',
      template: 'internal/email-contact-form',
      layout: false,
      templateData: {
        contactName: fullName,
        contactEmail: emailAddress,
        topic,
        message,
      }
    });
    */

  }


};
