const mongoose = require('mongoose');
const inventory = require("../model/Inventory");
const Sales = require("../model/Sales")
const orderController = {

    getAllOrders: async (req, res) => {

    },
    getOrderById: async (req, res) => {

    },
    addOrder: async (req, res) => {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const salesData = req.body

            for (let i = 0; i < salesData.saleDetails.length; i++) {
                const detail = salesData.saleDetails[i];

                const inventoryItem = await inventory.findOne({itemCode: detail.itemCode}).exec();
                if (!inventoryItem) {
                    throw new Error(`Item with itemCode not found`);
                }

                salesData.saleDetails[i].itemCode = inventoryItem._id;
            }
            const newSale = new Sales(salesData);

            await newSale.save({session});

            await session.commitTransaction();
            session.endSession();

            res.status(201).json({message: 'Order saved successfully'});

        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            res.status(500).json({error: error});
        }
    },
    updateOrder: async (req, res) => {

    },
    deleteOrder: async (req, res) => {

    },
}

module.exports = orderController;