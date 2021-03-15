const { json } = require("express");
let { editSlot, newIngredient, deleteIngredient } = require("../model");

exports.editSlots = (req, res) => {

    if (editSlot(req.body.slotId, req.body.ingredientId)){
        res.json({
            status: "ok",
            message: "Slot edited successfully !"
        });
    } else {
        res.json({
            status: "error",
            message: "Can't edit slot"
        });
    }
};

exports.addIngredient = (req, res) => {
    if (newIngredient(req.body.name, req.body.image, req.body.color)){

        res.json({
            status: "ok", 
            message: "Ingredient added successfully !"
        })
    } else {
        res.json({
            status: "error",
            message: "Can't add new ingresdient..."
        })
    }
    
}

exports.delIngredient = (req, res) => {
    if (deleteIngredient(req.body.ingredientId)) {
        res.json({
            status: "deleted",
            message: "Ingredient deleted successfully !"
        });
    } else {
        res.json({
            status: "error",
            message: "Can't delete this ingredient..."
        });
    }
}