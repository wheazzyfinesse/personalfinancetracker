import { SignedIn, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react"
import FinancialRecordForm from "./FinancialRecordForm"
import FiancialRecordList from "./FinancialRecordList"
import "./financialrecords.css"
import { Navigate } from "react-router-dom";
import { useFinancialRecords } from "../../context/financialrecordscontext";
import { useMemo, useState } from "react";
const Dashboard = () => {
    const [add, setAdd] = useState(false)
    const { user } = useUser()
    const { records } = useFinancialRecords()

    const addRecord = () => {
        setAdd(prev => !prev)
    }

    const totalMonthly = useMemo(() => {
        const totalAmount = records.reduce((acc, record) => acc + record.amount, 0)
        return totalAmount
    }, [records])
    if (!user) return <Navigate to="/auth" />
    return (
        <div className="dashboard-container">
            <h1>Welcome {user?.firstName}! Here are your finances: <SignedIn>
                <UserButton showName />
            </SignedIn></h1>
            {add ? <><button className="btn-close" onClick={addRecord}>close</button><FinancialRecordForm /></> : <button className="btn-add" onClick={addRecord}>Add New Finance Record</button>}
            <div className="dashboard">
                <h2>Financial Records</h2>
                <p>Total Monthly:{totalMonthly}</p>
            </div>

            {records.length === 0 ? <div>No Financial records! Record your financial expenses and incomes by clicking the Add New Fiance Record Button above</div> : <FiancialRecordList />}
        </div>
    )
}

export default Dashboard