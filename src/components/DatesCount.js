import React from "react";
import { Col, Row } from "react-bootstrap";
import {person} from '../Data'

const DatesCount = (person) => {
  return (
    <div className="py-3">
      <Row className="justify-content-center">
        <Col sm='8'>
          <p>لديك {person.length} مواعيد اليوم</p>
        </Col>
      </Row>
    </div>
  );
};

export default DatesCount;
