import "../models/connection.js";
import ConsignmentModel from "../models/consignment.model.js";

export const addConsignment = async (req, res) => {
  try {
    const {
      userId,
      itemName,
      quantity,
      weight,
      pickupAddress,
      dropAddress,
      description
    } = req.body;

    // 🔐 backend validation
    if (
      !userId ||
      !itemName ||
      !quantity ||
      !weight ||
      !pickupAddress ||
      !dropAddress
    ) {
      return res.status(400).json({
        status: false,
        msg: "All required fields are mandatory"
      });
    }

    await ConsignmentModel.create({
      userId,
      itemName,
      quantity,
      weight,
      pickupAddress,
      dropAddress,
      description
    });

    res.status(201).json({
      status: true,
      msg: "Consignment added successfully"
    });

  } catch (err) {
    console.error("Add Consignment Error:", err); // 👈 IMPORTANT
    res.status(500).json({
      status: false,
      msg: "Server error while adding consignment"
    });
  }
};


export const fetchConsignments = async (req, res) => {
  try {
    const { userId } = req.query;

    let data;

    if (userId) {
      // 👤 USER → only own consignments
      data = await ConsignmentModel.find({ userId });
    } else {
      // 👑 ADMIN → all consignments
      data = await ConsignmentModel.find();
    }

    res.json(data);

  } catch (err) {
    console.error("Fetch Consignments Error:", err);
    res.status(500).json({ msg: "Fetch error" });
  }
};


export const deleteConsignment = async (req, res) => {
  await ConsignmentModel.deleteOne({ _id: req.params.id });
  res.json({ status: true });
};


export const updateConsignmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!status) {
      return res.status(400).json({
        status: false,
        msg: "Status is required"
      });
    }

    await ConsignmentModel.updateOne(
      { _id: id },
      {
        $set: {
          status: status,
          statusUpdatedAt: new Date()
        }
      }
    );

    res.json({
      status: true,
      msg: "Consignment status updated"
    });

  } catch (err) {
    console.error("Status Update Error:", err);
    res.status(500).json({
      status: false,
      msg: "Error updating status"
    });
  }
};


export const trackConsignment = async (req, res) => {
  try {
    const { id } = req.params;

    const consignment = await ConsignmentModel.findById(id);

    if (!consignment) {
      return res.status(404).json({
        status: false,
        msg: "Consignment not found"
      });
    }

    res.json({
      status: true,
      data: consignment
    });

  } catch (err) {
    console.error("Track Consignment Error:", err);
    res.status(500).json({
      status: false,
      msg: "Tracking error"
    });
  }
};
