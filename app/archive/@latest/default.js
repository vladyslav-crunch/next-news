import React from "react";
import NewsList from "@/components/main-header/news-list";
import { getLatestNews } from "@/lib/news";

function LatestPage(props) {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestPage;
