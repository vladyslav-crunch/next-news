import React from "react";
import notFound from "@/app/(content)/not-found";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

async function InterceptedTimagePage({ params }) {
  const newsItem = await getNewsItem(params.slug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <ModalBackdrop />
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
