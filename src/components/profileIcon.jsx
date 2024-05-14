import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../assests/user.png';

const StyledImg = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Dropdown = styled.div`
position: absolute;
right: 10px;
top: 70px;
background-color: white;
border: 1px solid #ccc;
border-radius: 4px;
width: 200px;
padding: 10px;
z-index: 1000;
`

const Option = styled.div`
padding: 10px;
cursor: pointer;
&:hover {
  background-color: #f0f0f0;
}

`

function DropDownOptions({ isLoggedIn, handleLogOut }) {
    return (
      <Dropdown>
        <Option onClick={() => console.log('Profile clicked')}>Profile</Option>
        {isLoggedIn ? (
          <Option onClick={handleLogOut}>Log Out</Option>
        ) : (
          <Option onClick={() => console.log('Redirect to login')}>Log In</Option>
        )}
      </Dropdown>
    );
  }
  
  function ProfileIcon() {
    const [isDropDown, setIsDropDown] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line
  
    const handleLogOut = () => {
      setIsLoggedIn(false);
      console.log('User logged out');
    };
  
    return (
      <>
        <StyledImg
          src={user}
          alt="profile icon"
          onClick={() => setIsDropDown(!isDropDown)}
        />
        {isDropDown && <DropDownOptions isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />}
      </>
    );
  }


export default ProfileIcon;