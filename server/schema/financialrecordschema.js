import mongoose from "mongoose";
const FinancialRecordSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	date: { type: Date, required: true },
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	paymentMethod: {
		type: String,
		required: true,
	},
});
const FinancialRecord = mongoose.model(
	"FinancialRecord",
	FinancialRecordSchema,
);

export default FinancialRecord;
