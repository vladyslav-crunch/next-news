'use client'
import React from 'react';
import {DUMMY_NEWS} from "@/dummy-news";

function ImagePage({params}) {
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
    if (!newsItem) {
        return
    }
    return (
        <img src={`/images/news/${newsItem.image}`} alt={`${params.slug} image`}/>
    );
}

export default ImagePage;
