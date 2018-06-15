var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var templateSchema = mongoose.Schema({
    templatename:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    ud_template:{
        type: String,
        required: true
    },
    lastupdateAttuid:{
        type: String,
        required: true
    },
    cbus:{
        type: Number,
        required: true
    },
    type_of_cbus:{
        type: String,
    },
    tas:{
        type: String,
    },
    _id:{
        type: Number,
        // required: true
    },
    create_date:{
        type: Date,
        default: Date.now 
    }
},{
    versionKey: false
});

templateSchema.plugin(AutoIncrement);

var Template = module.exports = mongoose.model('Template',templateSchema);
module.exports.getTemplates = function(callback, limit){
    Template.find(callback).limit(limit);
}

module.exports.getTemplateById = function(id, callback){
    Template.findById(id,callback);
}

module.exports.addTemplate = function(template, callback){
    Template.create(template, callback);
}