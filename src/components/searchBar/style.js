import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
export const OuterContainer = styled.div`
  width: 100%;
  height: auto;
`;
export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #292e4a;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    justify-content: center;
  }
  position:fixed;
  z-index:1200 ;
`;
export const Title = styled.h5`
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  line-height: 1.334;
  letter-spacing: 0em;
  color: #fff;
  padding: 0px 22px;
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchContainer = styled.div`
  border-radius: 6px;
  width: 46%;
  height: 40px;
  position: relative;
  right: 22px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  &:hover {
    background-color: white;
  }
  align-items: center;
  @media (max-width: 700px) {
    width: 90%;
    right: 0px;
    height: 45px;
  }
`;
export const SearchIcon = styled(FiSearch)`
  color: black;
  height: 100%;
  display: flex;
  padding: 0px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;
export const InputBox = styled.input`
width: 86%;
color: black;
height: 20px;

display: flex;
padding: 5px;
position:relative;

align-items: center;


justify-content: center;
left: 8%;
// top: 12%;
border:none;
background-color: transparent;
cursor: pointer;
::-ms-input-placeholder{
    color:#b7bdc7;
};
::placeholder{
    color:#b7bdc7;
};
    &:focus {
        outline: none;
        border:none;
        // box-shadow: 0px 0px 2px red;
    };
};
font-size: 1rem;
align-items: center;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: 400;
line-height: 1.1876em;
letter-spacing: 0.00938em;
}
@media (max-width: 700px) {
        
    left:12%;

      }
`;
export const SearchResult = styled.div`
  width: 100%;
  height: max-content;
  background-color: #eaebed;
  position: absolute;
  top:10.1%;
  z-index:1 ;
  @media (max-width: 700px) {
        
   top:8.5%;

      }
`;
export const Text = styled.p`
  font-size: 1.2rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  line-height: 1.334;
  letter-spacing: 0em;
  color:black;
  &:hover{
    color:blue;
    text-decoration: underline;
    
    cursor:pointer;
    padding-left:12px;
  }
  padding-left:10px;
  @media (max-width: 700px) {
        
    font-size:medium;
    padding:8px;
    padding-left:10px;

      }
`;
export const TextContainer= styled.div`
height:40px;
margin:6px 4px;
border:1px solid black;
border-radius:2px;
display: flex;
justify-content:flex-start;
align-items:center;
&:hover{
    background-color:white;
}
@media (max-width: 700px) {
        
    height:50px

      }
`;

