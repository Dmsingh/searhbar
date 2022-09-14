import styled from 'styled-components'
export const Container= styled.div`
width: 100%;
height: max-content;
background-color: #eaebed;
position: absolute;
top:10.1%;

@media (max-width: 700px) {
      
 top:8.5%;

    }
`;
export const Title=styled.h5`
font-size: 1.5rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
font-weight: bold;
line-height: 1.334;
letter-spacing: 0em;
color:black;
margin: 8px;

`;
export const Text = styled.div`
  width:95%;
  font-size: 1.2rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  line-height: 1.334;
  letter-spacing: 0em;
  color:black;
  padding: 0px 8px;
  word-wrap: break-word;
  overflow-x:scroll;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  
  scrollbar-width: none;
  }
  @media (max-width: 700px) {
        
    font-size:medium;
    padding:8px;
    padding-left:10px;

      }
`;
export const TextContainer= styled.div`
// width:100%;
height:max-content;
margin:6px 4px;
border:1px solid black;
border-radius:2px;
display: flex;
justify-content:flex-start;
align-items:center;
@media (max-width: 700px) {
        
    height:max-content;
  

      }
`;
