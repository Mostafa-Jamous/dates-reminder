import React from "react";
import { Row, Col } from "react-bootstrap";


const DatesAction = ({onDelete,show}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="d-flex justify-content-between my-2">
          <button onClick={show} className="btn btn-danger p-2">عرض الكل</button>
          <button onClick={onDelete} className="btn btn-danger p-2">مسح الكل</button>
        </div>
      </Col>
    </Row>
  );
};

export default DatesAction;
