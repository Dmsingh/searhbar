import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import axios from 'axios'
import { Container, TextContainer, Title,Text, } from './style';
import Loading from'../Loder'


 function Index({load,typing}) {
    const [data, setdata] = useState({
        data:[],
        loading:false,
        error:false
      });
  let { id } = useParams();
 
  
  useEffect(() => {
  setdata({...data,loading:true})
     return async()=>{    
    await axios.get(`https://hn.algolia.com/api/v1/items/${id}`)
              .then((response) =>{ 
              setdata({...data,loading:false,data:response.data})
  })
              .catch((error) => {
               setdata({...data,loading:false,error:false})
                
               
                
              });
      }
      
  }, [id])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    load?<Loading/>:
    data.loading?<Loading/>:
    <Container>
        <Title>Title: {data.data&& data.data.title?data.data.title:"No Title"}</Title>
        <Title>Points: {data.data&& data.data.points?data.data.points:"No Points"}</Title>
        <Title>Comments:</Title>
        {data.data.children&& data.data.children.map((value)=>(
            <TextContainer key={value.id}>
              

              <Text  dangerouslySetInnerHTML={{
    __html: value.text
  }}>
              

              </Text>
              
              
            </TextContainer>))
 }

        </Container>
    
   

  );
}
export default Index