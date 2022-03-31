import React, { useState, useEffect } from 'react'
import {Table} from 'reactstrap';
export default function Homepage() {
  const[searchInput, setSearchInput] = useState('');
  const[searchData, setSearchData]=useState('');
  useEffect(() => {
 }, [searchData, searchInput]);
  const [data, setData]=useState(
    [
      { id:1,
        firstName: "Mark",
        lastName:"Otto",
        username:"@mdo"
      },
      { id:2,
        firstName: "Jacob",
        lastName:"Thornton",
        username:"@jcb"
      },
      { id:3,
        firstName: "Guddu",
        lastName:"Pandit",
        username:"@arnold"
      },
      { id:4,
        firstName: "Thomas",
        lastName:"Shelby",
        username:"@tshel"
      }
    ]
    )

    const handleSearchInput = (event) => {
      event.persist();
      const inp= event.target.value;
      setSearchInput(inp);
      
      
    };
   const handleSearch= ()=>{
     const inp= searchInput;
     setSearchData(inp);
     setSearchInput('');
     console.log(searchData)
   }
  return (
    <div>
        <div className="banner">
        <div className="banner-content">
          <h1 className="heading">Fitness World</h1>
          <div className="button-violet">Join Now!</div>
        </div>
      </div>
      <div className="carousel">
        <a href="#" className="carousel-item">
          <img
            className="carousel-img"
            src="./assets/fw_mar_flash_sale_join_for_10_web_950x598.png"
            alt=""
          />
        </a>
        <a href="#" className="carousel-item">
          <img
            className="carousel-img"
            src="./assets/Free-Pass-Slider-REOPEN.png"
            alt=""
          />
        </a>
      </div>
      <div className="feature">
        <img
          src="./assets/fw-Hero-rev_v2-1.jpg"
          alt=""
          className="feature-img"
        />
        <div className="feature-content">
          <h2>Welcome to Power Fitness</h2>
          <p className="content">
            Power Fitness is a gym for everyone. You want to work on your strength, or do yoga in peace, this is the go to place for you.
            With training instructors for a variety of sports and fitness activites, we bring quality training in affordable prices.
          </p>
          <button className="button-black">Join Now</button>
        </div>
      </div>
      <div className="feature-rev">
        <div className="feature-content">
          <h2>Grab a 3 day free Pass</h2>
          <p className="content">
            We offer you a 3 day pass to visit our gym, absolutely free. After which you can decide to join any of our Power Fitness branches located across Canada.
            You get a discounted first month membership if you avail the 3 day free pass before joining.
          </p>
          <button className="button-black">Learn More</button>
        </div>
        <img
          src="./assets/fw-Hero-105_v1-1.jpg"
          alt=""
          className="feature-img"
        />
      </div>
      <div className="search-section">
        <h1>Search our Trainers</h1>
          <div className=" search-bar d-flex form-inputs">
            <input
              className="form-control"
              type="text"
              value={searchInput}
              onChange={handleSearchInput}
              placeholder="Search for FirstName"
            />{" "}
            <button className="button-black" onClick={handleSearch}>Search</button> 
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Instagram Username</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(user=>(
               (searchData==='' || searchData.includes(user.firstName)) && <tr key={user.id}>
                  <td>2</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}
