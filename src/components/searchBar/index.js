import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Title,
  SearchContainer,
  SearchIcon,
  InputBox,
  OuterContainer,
  SearchResult,
  TextContainer,
  Text,
} from "./style";
import { Link } from "react-router-dom";
function Index({ Loader, err,typing }) {
  const [data, setdata] = useState({
    data: [],
    loading: false,
    error: false,
  });
  const [text, settext] = useState("");

  useEffect(() => {
    return async () => {
      if (text) {
        if (text.length > 0) {
          await axios
            .get(`https://hn.algolia.com/api/v1/search?query=${text}`)
            .then((response) => {
              setdata({ ...data, loading: false, data: response.data.hits });
              Loader(false);
            })
            .catch((error) => {
              setdata({ ...data, loading: false, error: false });

              Loader(false);
              err(true, error.error);
            });
        }
      
      }
      else{
        
        typing(false)

      }
    };
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  
  const onChangeHandeler = (text) => {
    settext(text);
    if (text.length === 0) {
      typing(false)
      window.location.reload();
    } else if(text.length>1) {
      Loader(true);
      typing(true);
      setdata({ ...data, loading: true });
    }
  };

  return (
    <OuterContainer>
      <Container>
        <Title>Hybr1d Search Bar</Title>
        <SearchContainer autoFocus={true}>
          <SearchIcon />
          <InputBox
            placeholder="Search"
            onChange={(e) => {
              onChangeHandeler(e.target.value);
            }}
            value={text}
            autoFocus={true}
            type="text"
          />
        </SearchContainer>
      </Container>
      {data?.data.length > 0 && !data.loading && text.length > 0 && (
        <SearchResult>
          {data.data.map((value, id) => (
            <TextContainer key={id}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/${value.objectID}`}
              >
                <Text onClick={() =>  settext("")
                }>
                  {value?.title ? value.title : value?.story_title}
                </Text>
              </Link>
            </TextContainer>
          ))}
        </SearchResult>
      )}
    </OuterContainer>
  );
}

export default Index;
