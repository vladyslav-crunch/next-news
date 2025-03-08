import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import notFound from "@/app/not-found";

function NewsItem({ params }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <article className="news-article">
        <header>
          <img src={`/images/news/${newsItem.image}`} alt="" />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}

export default NewsItem;
