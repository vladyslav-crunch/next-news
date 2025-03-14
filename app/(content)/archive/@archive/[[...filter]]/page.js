import React, { Suspense } from "react";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter");
  }
  let links = availableYears;

  if (year && !month) {
    links = await getAvailableNewsMonths(year); // Ensure we await the result
  }
  if (year && month) {
    links = await getAvailableNewsMonths(year);
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNewsList({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={"Loading filter..."}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <FilteredNewsList year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

export default FilteredNewsPage;
