module.exports = {
  helpers: {
    if_or: function(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A workflow web project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    title: {
      type: 'string',
      message: 'web page title',
      default: 'page title'
    },
    mobile: {
      type: 'confirm',
      message: 'Use mobile adaptive?'
    },
    analytics: {
      type: 'confirm',
      message: 'Use GA + Custom analytics?'
    }
  },
  filters: {},
  completeMessage:
    'You can edit your code ASAP!\n\n Enjoy your life!~~'
};
