import React from "react";
import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

async function LatestPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestPage;
