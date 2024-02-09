import React from "react";
import { Routes, Route } from 'react-router-dom';

import Dashboard from "../../pages/dashboard/dashboard";
import AddTicket from "../../pages/addTicket/addTicket";
import { Ticketlist } from "../../pages/list/ticketlist";
import { Ticket } from "../../pages/ticket/ticket";
import Entry from "../../pages/entry/entry";
import Forget from "../../pages/forget/forget";

const Next = () => {
    return(
        <div>
      <Routes>
        <Route path='/' element={<Entry />} />
        <Route path="/dashboard" element={< Dashboard/>} />
        <Route path='/add-ticket' element={<AddTicket />} />
        <Route path='/tickets' element={<Ticketlist />} />
        <Route path='/ticket/:tId' element={<Ticket />} />
        <Route path='/reset' element={<Forget />} />
        <Route path='/login' element={<Entry />} />
       
      </Routes>
      
    </div>
    )
}

export default Next;