const Models = require('../models')

module.exports = {
  find: async(params, model) => await Models[model].find(params, null, {
    sort: {
      timestamp: -1
    }
  }),
  findById: async(id, model) => await Models[model].findById(id),
  create: async(params, model) => await Models[model].create(params),
  remove: async(params, model) => await Models[model].remove(params),
  findOneAndUpdate: async(params, model) => await Models[model].findOneAndUpdate({
    _id: params._id
  }, params, {
    new: true
  }),
  findOneAndRemove: async(params, model) => await Models[model].findOneAndRemove(params)
}