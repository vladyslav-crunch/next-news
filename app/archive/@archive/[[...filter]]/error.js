"use client";
import React from "react";

function FilterError({ error }) {
  return (
    <>
      <div id="error">
        <h2>An error occurred!</h2>
        <p>invalid path</p>
        <p>{error?.message}</p>
      </div>
    </>
  );
}

export default FilterError;
