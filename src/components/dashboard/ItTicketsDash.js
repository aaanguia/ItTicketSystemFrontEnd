import { useEffect, useState } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import axios from "axios"

import "bootstrap/dist/css/bootstrap.min.css"

const baseURL = "http://localhost:8080/api/tickets"

export default function ItTicketDashboard(params) {
  const [data, setData] = useState([])
  const [expandRows, setExpandRows] = useState([])
  const [expandState, setExpandState] = useState([])

  const detailHandler = (event, ticketId) => {
    const currentExpandedRows = expandRows
    const isRowExpanded = currentExpandedRows.includes(ticketId)
    let obj = {}
    isRowExpanded ? (obj[ticketId] = false) : (obj[ticketId] = true)
    setExpandState(obj)

    //If row is expanded, then hide it
    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== ticketId)
      : currentExpandedRows.concat(ticketId)

    setExpandRows(newExpandedRows)
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1> Current Outstanding Support Tickets({data.length})</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Table responsive variant="dark">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Category</th>
                <th>Author ID#</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ticket) => (
                <>
                  <tr key={ticket.id}>
                    <td>
                      <img src={ticket["photo"]} alt="" />
                    </td>
                    <td>{ticket.title}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.user_id}</td>

                    <td>
                      <Button
                        variant="link"
                        onClick={(event) => detailHandler(event, ticket.id)}
                      >
                        {expandState[ticket.id] ? "Hide" : "Show"}
                      </Button>
                    </td>
                  </tr>
                  <>
                    {expandRows.includes(ticket.id) ? (
                      <tr>
                        <td colspan="6">
                          <div
                            style={{
                              backgroundColor: "#343A40",
                              color: "#FFF",
                              padding: "10px",
                            }}
                          >
                            <h2> Details </h2>
                            <ul>
                              <li>
                                <span>
                                  <b>Description:</b>
                                </span>{" "}
                                <span> {ticket.body} </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
