"use client";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import notFound from "@/app/(content)/not-found";
import { useRouter } from "next/navigation";

function InterceptedTimagePage({ params }) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    return notFound();
  }
  const router = useRouter();
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={`${params.slug} image`}
          />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedTimagePage;
