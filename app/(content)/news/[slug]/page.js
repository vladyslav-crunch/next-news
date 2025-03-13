import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import notFound from "@/app/(content)/not-found";
import Link from "next/link";

function NewsItem({ params }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt="" />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}

export default NewsItem;
