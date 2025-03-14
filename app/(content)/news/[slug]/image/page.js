"use client";
import React from "react";
import { getNewsItem } from "@/lib/news";

async function ImagePage({ params }) {
  const newsItem = await getNewsItem(params.slug);
  if (!newsItem) {
    return;
  }
  return (
    <img src={`/images/news/${newsItem.image}`} alt={`${params.slug} image`} />
  );
}

export default ImagePage;
