import React from "react";
import { Row, Col } from "react-bootstrap";
import icon from "../images/icon.png";
import {person} from '../Data'

const DatesList = ({person}) => {
  
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle py-2">
          {person.length
            ? person.map((item) => {
                return (
                  <div className="d-flex border-bottom mx-2" key={item.id}>
                    <img className="icon" src={icon} alt="person img" />
                    <div className="p-2">
                      <p className="fs-5 d-inline">{item.name}</p>
                      <p className="fs-6">{item.date}</p>
                    </div>
                  </div>
                );
              })
            : (<h2>لا يوجد مواعيد اليوم</h2>)}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
