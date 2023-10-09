import React, { useEffect, useState } from "react";
import { Download } from "@strapi/icons";
import { Button } from "@strapi/design-system";
import * as xlsx from "xlsx";

// import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const DownloadButton = () => {
  const [url, setUrl] = useState(window.location.href);
  const [data, setData] = useState(null);

  const regex = /(?<=\.)[^?]+(?=\?)/g;
  let filename=url.match(regex)[0];

  const convertToExcel = (data) => {
    data=filterData(data);
    let workbook = xlsx.utils.book_new(),
      worksheet = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    xlsx.writeFile(workbook, `${filename}.xlsx`);
  };

  function filterData(data) {
    return data.map((item) => {
      const { createdAt, updatedAt, createdBy, updatedBy, ...filteredItem } = item;
      return filteredItem;
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedUrl = url
          .replace("/admin", "")
          .replace(":8000", ":1337")
          .replace("collectionType", "collection-types");
        const token = sessionStorage.getItem("jwtToken");

        const headers = {
          Accept: "*/*",
          // Authorization:
          //   "Bearer " +
          //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1ODQ0NTc4LCJleHAiOjE2OTg0MzY1Nzh9.Jb1rzLpmKxstQ9AGfxWf6vTsSi2CEvcQStQk2TYRTvk",
          'Authorization': `Bearer ${token.replaceAll('"', '')}`,
          "Content-Type": "application/json",
        };
        console.log(updatedUrl, "updatedurl");
        console.log(sessionStorage.getItem("jwtToken"), "token");

        const response = await fetch(updatedUrl, {
          headers: headers,
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();
        setData(res.results);
        console.log(res.results, "here");
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    if (window.location.href !== url) {
      // Only update the URL and fetch data if it has changed
      setUrl(window.location.href);
    }

    fetchData();
  }, [url]);

  return (
    <Button
      variant="1ary"
      onClick={() => convertToExcel(data)}
      startIcon={<Download />}
    >
      Export as Excel
    </Button>
  );
};

export default DownloadButton;
