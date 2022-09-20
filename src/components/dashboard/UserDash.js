import { useEffect, useState } from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import axios from "axios"

import "bootstrap/dist/css/bootstrap.min.css"

const baseURL = "http://localhost:8080/api/users"

export default function UserDashboard(params) {
  const [data, setData] = useState([])
  const [expandRows, setExpandRows] = useState([])
  const [expandState, setExpandState] = useState([])

  const detailHandler = (event, userId) => {
    const currentExpandedRows = expandRows
    const isRowExpanded = currentExpandedRows.includes(userId)
    let obj = {}
    isRowExpanded ? (obj[userId] = false) : (obj[userId] = true)
    setExpandState(obj)

    //If row is expanded, then hide it
    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== userId)
      : currentExpandedRows.concat(userId)

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
          <h1> Current User Pool({data.length})</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Table responsive variant="dark">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <>
                  <tr key={user.id}>
                    <td>
                      <img src={user["photo"]} alt="" />
                    </td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>

                    <td>
                      <Button
                        variant="link"
                        onClick={(event) => detailHandler(event, user.id)}
                      >
                        {expandState[user.id] ? "Hide" : "Show"}
                      </Button>
                    </td>
                  </tr>
                  <>
                    {expandRows.includes(user.id) ? (
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
                                  <b>Phone number:</b>
                                </span>{" "}
                                <span> {user.phoneNumber} </span>
                              </li>
                              <li>
                                <span>
                                  <b>Department:</b>
                                </span>{" "}
                                <span> {user.department} </span>
                              </li>
                              <li>
                                <span>
                                  <b>District:</b>
                                </span>{" "}
                                <span> {user.district} </span>
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
