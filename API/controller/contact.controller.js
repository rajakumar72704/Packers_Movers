export const updateStatus = async (req, res) => {
  try {
    const { id, status } = req.body;

    await ContactModel.updateOne(
      { _id: id },
      { $set: { status } }
    );

    res.json({ status: true, message: "Status updated" });
  } catch (err) {
    res.status(500).json({ status: false });
  }
};
