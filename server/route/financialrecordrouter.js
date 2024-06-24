import express from "express";
import FinancialRecord from "../schema/financialrecordschema.js";
const router = express.Router();

router.get("/getUserRecords/:userId", async (req, res) => {
	try {
		const userId = req.params.userId;
		const records = await FinancialRecord.find({ userId });
		if (records.length === 0) {
			return res.status(404).send("No records found for the user");
		}
		res.status(200).send(records);
	} catch (error) {
		res.status(500).send(error);
	}
});
router.post("/", async (req, res) => {
	try {
		const newRecord = req.body;
		const newFinancialRecord = new FinancialRecord(newRecord);
		const savedRecord = await newFinancialRecord.save();
		res.status(200).send(savedRecord);
	} catch (error) {
		res.status(500).send(error);
	}
});
router.put("/:id", async (req, res) => {
	try {
		const id = req.body._id;
		const newRecord = req.body;

		const updatedRecord = await FinancialRecord.findByIdAndUpdate(
			id,
			newRecord,
			{ new: true },
		);
		if (!updatedRecord) {
			return res.status(404).send("No records found for the user");
		}
		res.status(200).send(updatedRecord);
	} catch (error) {
		res.status(500).send(error);
	}
});
router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		const deletedRecord = await FinancialRecord.findByIdAndDelete({ _id: id });
		res.status(200).send(deletedRecord);
	} catch (error) {
		res.status(500).send(error);
	}
});
export default router;
