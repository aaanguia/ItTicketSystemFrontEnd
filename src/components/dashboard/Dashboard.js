import { useEffect, useState } from "react"

import ItTicketDashboard from "./ItTicketsDash"
import UserDashboard from "./UserDash"

export default function Dashboard(params) {
  return (
    <>
      <ItTicketDashboard />
      <UserDashboard />
    </>
  )
}
