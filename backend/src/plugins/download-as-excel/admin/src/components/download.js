import React, { useEffect, useState } from "react";
import { Download } from "@strapi/icons";
import { Button } from "@strapi/design-system";
// import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const DownloadButton = () => {
  const [url, setUrl] = useState(window.location.href);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedUrl = url
          .replace("/admin", "")
          .replace(":8000", ":1337")
          .replace("collectionType", "collection-types");
          const token=sessionStorage.getItem("jwtToken")

        const headers = {
          "Accept": "*/*",
          'Authorization': "Bearer "+token, 
          'Content-Type': 'application/json',
        };
        console.log(updatedUrl, "updatedurl");
        console.log(sessionStorage.getItem("jwtToken"), "token");

        const response = await fetch(updatedUrl, {
          "headers": headers,
          "method": "GET",
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        console.log(result, "here");
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    if (window.location.href !== url) {
      // Only update the URL and fetch data if it has changed
      setUrl(window.location.href);
    }

    fetchData();
  }, [url]);

  return (
    <Button variant="1ary" startIcon={<Download />}>
      Download as Excel{" "}
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
