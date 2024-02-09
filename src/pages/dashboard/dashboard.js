import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";
import TicketTable from "../../components/ticekt-table/ticket-table";
import tickets from '../../assests/data/dummy-tickets.json'
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="#" className="dashboard">
        <div className="headline">
      <Row>
        <Col>
        <Link to="/add-ticket">
          <Button className="btn">Add New Ticket</Button></Link>
        </Col>
      </Row>
      <Row>
        <Col className="details">
          <div className="quantity">Total Tickets: 50</div>
          <div className="quantity">Pending Tickets: 10</div>
        </Col>
      </Row></div>
      <Row>
        <Col className="recent">Recently Added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket"><TicketTable tickets={tickets} /></Col>
      </Row>
    </div>
  );
};

export default Dashboard;
