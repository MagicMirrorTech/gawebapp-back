const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    items: [{ itemName: String, description: String, quantity: Number, rate: Number, subtotal: Number }],
    subtotal: Number,
    tax: Number,
    discount: Number,
    paid: Number,
    total: Number,
    jobName: String,
    dateStart: {
        type: String,
        default: 'Update this field'
    },
    dateEnd: {
        type: String,
        default: 'Update this field'
    },
    comments: String,
    img: [String],
    dateCreate: String,
    status: {
        type: String,
        enum: ['Unsent', 'Sent', 'Approve', 'Decline', 'Unpaid', 'Paid'],
        default: 'Unsent'
    },
    type: {
        type: String,
        enum: ['Invoice', 'Job', 'Estimate'],
        default: 'Estimate'
    },
    projectManager: [{
        projectId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            autopopulate: true
        },
        time: [Number]
    }],

    workers: [{
        workerId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            autopopulate: true
        },
        time: [Number]
    }],
    expenses: [{
        date: String,
        merchant: String,
        category: String,
        description: String,
        img: String,
        total: Number,
    }],


}, {
    timestamps: true,
    versionKey: false
});

invoiceSchema.plugin(require('mongoose-autopopulate'))
module.exports = model('Invoice', invoiceSchema);