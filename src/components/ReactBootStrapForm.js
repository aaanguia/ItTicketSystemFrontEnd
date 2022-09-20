import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function ReactBootStrapForm() {
  return (
    <div className="w-75 p-3" style={{ backgroundColor: "#eee" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="title" placeholder="Enter Title" />
          <Form.Text className="text-muted">
            Short description of your issue.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="body" placeholder="Tell us whats wrong." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Category</Form.Label>
          <Form.Select>
            <option>IT Device</option>
            <option>Software Issue</option>
            <option>Network / VPN Issue</option>
            <option>Account Credentials</option>
            <option>Hardware Issue/Replacement</option>
            <option>IT Device</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
