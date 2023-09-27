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
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1ODQ0NTc4LCJleHAiOjE2OTg0MzY1Nzh9.Jb1rzLpmKxstQ9AGfxWf6vTsSi2CEvcQStQk2TYRTvk",
          // 'Authorization': "Bearer "+token,
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

// fetch("http://localhost:1337/content-manager/collection-types/plugin::users-permissions.user?page=1&pageSize=10&sort=username:ASC", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk1ODI4NTc2LCJleHAiOjE2OTg0MjA1NzZ9.e8TXy9h_2-1cVGBAC1j5kfn6WCzTXhSg0nS1kBH32Jg",
//     "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site"
//   },
//   "referrer": "http://localhost:8000/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });
