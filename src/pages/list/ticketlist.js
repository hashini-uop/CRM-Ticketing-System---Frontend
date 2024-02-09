import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SearchForm } from "../../components/searchFrom/searchForm";
import TicketTable from "../../components/ticekt-table/ticket-table";
import tickets from "../../assests/data/dummy-tickets.json";
import { Link } from "react-router-dom";
import './ticketlist.css'

export const Ticketlist = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);
  useEffect(
    () => {},
    [ str, displayTicket ]
  );
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };
  const searchTicket = (sttr) => {
    const displayTicket = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTicket(displayTicket);
  };

  return (
    <div className="list">
      <Row>
        <Col>
        <Link to="/add-ticket">
          <Button className="btn">Add New Ticket</Button></Link>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
      <hr />
    </div>
  );
};
