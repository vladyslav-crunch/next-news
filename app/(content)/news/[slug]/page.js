import React from "react";
import notFound from "@/app/(content)/not-found";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

async function NewsItem({ params }) {
  const newsItem = await getNewsItem(params.slug);
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
