import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NewsBlock = styled.a`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;
const NewsImageWrapper = styled.div`
  img {
    height: 20rem;
    width: 35rem;
  }
`;
const NewsContent = styled.div`
  color: #fff;
  padding: 1rem 0 1rem 2rem;
  font-size: 1.5rem;
  h4 {
    font-size: 2rem;
    padding-top: 0;
  }
`;

export default function FetchTaiwanNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=tw&apiKey=d0333c98698e4f6b818186a29bf10625"
      );
      let json = await response.json();
      setNews(json.articles);
    };
    fetchData().then((r) => console.log(r));
  }, []);
  return (
    <div>
      {news.length !== 0 &&
        news.map((item) => {
          const { title, urlToImage, url, description } = item;

          return (
            <div>
              <NewsBlock href={url}>
                <NewsImageWrapper>
                  <img
                    src={urlToImage || "https://i.imgur.com/sKZOGw0.png"}
                    alt=""
                  />
                </NewsImageWrapper>

                <NewsContent>
                  <h4> {title}</h4>
                  {description}
                </NewsContent>
              </NewsBlock>
            </div>
          );
        })}
    </div>
  );
}
