/*
Coding Steps:
Using what you’ve learned this week, create a page of an application that enables users to vote and leave reviews on movies.
You should include at least the following components: 
    MovieList: a container for all the Movie components and their data.
    Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
    Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable!)
    ReviewList: a container inside of a Movie that houses Review components.
    Review: A text review a user can leave on a movie.
    ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
        When submitted, the review should be added to the movie. All this data can be stored in an array,
        no networking or database needed for this assignment.
*/
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className='container-fluid text-dark navbar bg-danger m-0 mb-1 me-auto'>
            <nav>
                <Navbar>
                    <a className='navbar-brand ms-3 me-1'>Movie Reviews</a>
                    <div className='ms-2'>
                        <UncontrolledDropdown inNavbar>
                            <DropdownToggle nav caret>
                                Movie Genre
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Comedy</DropdownItem>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <button className='btn'>Login</button>
                </Navbar>
            </nav>
        </nav> 
    </div>
  )
}

export default NavBar