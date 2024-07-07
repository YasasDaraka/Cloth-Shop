const inventory = require("../model/Inventory");
const supplier = require("../model/Supplier");
const ItemSize = require("../model/ItemSize");
const mongoose = require("mongoose");

const inventoryController = {

    getAllInventory: async (req, res) => {
        try {
            const findAll = await inventory.find().populate('sizes').exec();
            res.status(200).json(findAll);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    getInventoryById: async (req, res) => {
        try {
            const itemCode = req.params.id;

            const item = await inventory.findOne({itemCode: itemCode});

            if (item === null) {
                return res.status(404).json({message: 'Item not found'});
            }
            res.status(200).json(item);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json(error);
        }
    },
    addInventory: async (req, res) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const data = req.body

            const exist = await inventory.findOne({itemCode: data.itemCode});

            if (exist !== null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(409).json({message: 'Item already exists'});
            }

            const sup = await supplier.findOne({supplierCode: data.supplierCode});

            if (sup === null) {
                await session.abortTransaction();
                session.endSession();
                return res.status(404).json({message: 'Supplier not found'});
            }

            const item = new inventory({

                itemCode: data.itemCode,
                itemDesc: data.itemDesc,
                itemPicture: data.itemPicture,
                category: data.category,
                supplierName: sup.supplierName,
                salePrice: data.salePrice,
                buyPrice: data.buyPrice,
                expectedProfit: data.expectedProfit,
                profitMargin: data.profitMargin,
                status: data.status,
                supplier: sup._id
            });

            await item.save({ session });

            const sizes = [
                new ItemSize({ size: 'S', quantity: data.sm, itemCode: item._id }),
                new ItemSize({ size: 'M', quantity: data.md, itemCode: item._id }),
                new ItemSize({ size: 'L', quantity: data.lg, itemCode: item._id }),
                new ItemSize({ size: 'XL', quantity: data.xl, itemCode: item._id }),
                new ItemSize({ size: 'XXL', quantity: data.xxl, itemCode: item._id }),
            ];

            const savedItemSizes = await ItemSize.insertMany(sizes, { session });

            item.sizes = savedItemSizes.map(size => size._id);
            item.qty = data.sm + data.md + data.lg + data.xl + data.xxl
            item.originalQty = item.qty
            await item.save({ session });

            await session.commitTransaction();
            session.endSession();
            res.status(201).json({message: 'Inventory and item sizes saved successfully'});
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            res.status(500).json({error: err});
        }
    },
    updateInventory: async (req, res) => {

    },
    deleteInventory: async (req, res) => {

    },
}

module.exports = inventoryController;