import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { searchData, setCurrentAsin, setSelected } from "../../reducers/booksList";
import { useNavigate } from 'react-router-dom';

function NavBar({links}) {

    const navigate = useNavigate()

    const selected = useSelector((state) => state.books.selected) 
    const [searchInputValue, setSearchInputValue] = useState("")
    const [reload, setReload] = useState(false)

    const dispatch = useDispatch()
    
    const selectCategory = (e) => {
        dispatch(setSelected(e))
        dispatch(searchData(""))
        dispatch(setCurrentAsin(""))
        setSearchInputValue("")
        setReload(!reload)
        navigate("/")
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        dispatch(searchData(searchInputValue))
      }, 500)

      return () => clearTimeout(timer)
      
    }, [searchInputValue])
    
    useEffect(() => {
        
    }, [reload])
    
    
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand>EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
            <Nav className="me-auto">
                        {links.map(link => (
                            <Nav.Link key={nanoid()} href={link.href}>{link.name}</Nav.Link>
                        ))}
            </Nav>

            <Form.Select onChange={(e) => selectCategory(e.target.value)} value={selected}>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="history">History</option>
              <option value="romance">Romance</option>
              <option value="scifi">Scifi</option>
            </Form.Select>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            value={searchInputValue}
            type="text"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange= {(e) => setSearchInputValue(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar