const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleDetailSchema = new Schema({
    itemCode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory',
        required: true
    },
    itemDesc: {
        type: String,
    },
    salePrice: {
        type: Number,
        required: true
    },
    itmQTY: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
});

const SalesSchema = new Schema({
    orderNo: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    purchaseDate: {
        type: String,
    },
    cusId: {
        type: String,
        required: true,
    },
    cusName: {
        type: String,
        required: true,
    },
    totalPoints: {
        type: String,
        required: true,
    },
    saleDetails: [SaleDetailSchema]
}, { versionKey: false });

// Create Sales model
const Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales;
