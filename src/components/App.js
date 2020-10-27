import React, {useState, useRef} from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";

const App = (props) => {
const [file, setFile] = useState(null); // Store images
const [previewSrc, setPreviewSrc] = useState('') // store preview images
const [state, setState] = useState("");
const [ispreviewAvailable, setIsPreviewAvailable] = useState(false);

const handleInputChange = (e) =>{
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
}

const handleOnSubmit = async (e) =>{
    e.preventDefault()
};

const errorMsg = "An error occured";

    return (
      <>
        <Form className="search-form" onSubmit={handleOnSubmit}>
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Control
                  type="text"
                  name="title"
                  value={state.title || ""}
                  placeholder="Enter title"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="description">
                <Form.Control
                  type="text"
                  name="description"
                  value={state.description || ""}
                  placeholder="Enter description"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
}

export default App;
