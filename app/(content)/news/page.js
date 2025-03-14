import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

async function News() {
  const newsData = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      {newsData.length > 0 ? (
        <NewsList news={newsData} />
      ) : (
        <p>No news available.</p>
      )}
    </>
  );
}

export default News;
