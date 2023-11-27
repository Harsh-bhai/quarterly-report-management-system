// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
// import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import * as XLSX from "xlsx";
import {
  SingleSelectOption,
  SingleSelect,
  Button,
  TextInput,
  Grid,
  GridItem,
  Divider,
  Box,
  BaseHeaderLayout,
  Alert,
  GridLayout,
  Typography,
  Status,
  Table,
  Thead,
  Tr,
  Td,
  Flex,
  Th,
  BaseCheckbox,
  VisuallyHidden,
  Tbody,
  IconButton,
} from "@strapi/design-system";
import { Pencil, Plus, Trash } from "@strapi/icons";
const HomePage = () => {
  const tableRef = useRef(null);

  const [query, setQuery] = useState([]);
  const [tableName, setTableName] = useState();
  // const [filteredData, setFilteredData] = useState([])
  const [operation, setOperation] = useState("");
  const [value, setValue] = useState("");
  const [col, setcol] = useState("");
  const [tableOptions, setTableOptions] = useState([]);
  const [currentObject, setCurrentObject] = useState({});
  const [content, setContent] = useState("");
  const [resData, setResData] = useState([]);
  const [final, setFinal] = useState([]);   
  const [reloadkey, setReloadkey] = useState(1);
  // const [primaryKey, setPrimaryKey] = useState();
  const [superFinal, setSuperFinal] = useState([]);
  const [uniqueAttributes, setUniqueAttributes] = useState([]); // store all unique attributes

  let filteredData, primaryKey;
  let temp = [];
  let currString, querystring="";
  const groupedObjects = {}; // merged objects by primary key

  const operationOptions = {
    $eq: "Equal",
    $eqi: "Equal (case-insensitive)",
    $ne: "Not equal",
    $nei: "Not equal (case-insensitive)",
    $lt: "Less than",
    $lte: "Less than or equal to",
    $gt: "Greater than",
    $gte: "Greater than or equal to",
    $in: "Includes",
    $notIn: "Not includes",
    $contains: "Contains",
    $notContains: "Does not contain",
    $containsi: "Contains (case-insensitive)",
    $notContainsi: "Does not contain (case-insensitive)",
    $null: "Is null",
    $notNull: "Is not null",
    $between: "Is between",
    $startsWith: "Starts with",
    $startsWithi: "Starts with (case-insensitive)",
    $endsWith: "Ends with",
    $endsWithi: "Ends with (case-insensitive)",
    $or: "OR",
    $and: "AND",
    $not: "NOT",
  };
  // let resData=[];
  useEffect(() => {
    fetchDetails();
  }, []);
  const finall = [
    { id: 1, contact: "a", description: "desc", category: "cat" },
  ];

  const queryAdd = async () => {
    console.log("Queryadd is running");

    const uniqueQuerySet = new Set(query);

    if (col !== "" && operation !== "" && content !== "") {
      currString = col + " " + operation + " " + content;
      uniqueQuerySet.add(currString);

      const uniqueQueryArray = Array.from(uniqueQuerySet);
      setQuery(uniqueQueryArray);

      // Clear input fields
      setcol("");
      setOperation("");
      setContent("");
    }

    console.log(currentObject, "cobject");

    // Note: Use .then() instead of await to handle the asynchronous nature
    findPrimaryKey().then((primaryKeyValue) => {
      primaryKey = primaryKeyValue;
    });
  };

  const regexPattern = /^(\S+)\s+(.*?)\s+(\S+)$/;
  const removeItem = (itemToRemove) => {
    const updatedQuery = query.filter((item) => item !== itemToRemove);
    setQuery(updatedQuery);
  };

  const fetchDetails = async () => {
    try {
      const token =
        sessionStorage.getItem("jwtToken") || localStorage.getItem("jwtToken");
      const response = await fetch(
        `${process.env.STRAPI_ADMIN_BHOST}/content-type-builder/content-types`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.replaceAll('"', "")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const datas = await response.json();
      let data = datas.data;

      // Filter the data array starting from the object with apiID "role"
      const startIndex = data.findIndex(
        (obj) => obj.uid === "plugin::users-permissions.user"
      );
      filteredData = startIndex !== -1 ? data.slice(startIndex + 1) : [];
      // setFilteredData(filtered);

      console.log(filteredData, "here");
      setTableOptions(filteredData);
      // setColOptions(filteredData.schema.attributes);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error as needed
      return [];
    }
  };

  const FetchFilterDetails = async () => {
    console.log("fetchfilterdetails running");
    const key = Object.keys(operationOptions).find(
      (k) => operationOptions[k] === operation
    );
    let data = await fetch(
      `${process.env.STRAPI_ADMIN_BHOST}/api/${currentObject.apiID}s?publicationState=preview&filters[${col}][${key}]=${content}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_ADMIN_READ_ONLY_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    await new Promise(async (resolve, reject) => {
      let response = await data.json();
      console.log([...response.data], "data.response");
      // if(resData.length == 0){
      //   setResData([...response.data]);
      // }else
      //   setResData([...resData, ...response.data]);
      resData.push(response.data[0]);
      await setPriymaryKeyInObject();
      resolve();
    });
    // setResData(Array.from(new Set(resData)));
    console.log(resData, "resdata");
  };

  const setPriymaryKeyInObject = async () => {
    console.log("setPriymaryKeyInObject running");
    await new Promise((resolve, reject) => {
      resData.forEach((item) => {
        console.log(item, "item");
        item.primaryKey = primaryKey;
      });
      setFinal(resData);
      resolve();
    });
    console.log("setPriymaryKeyInObject completed");
  };

  const findPrimaryKey = () => {
    return new Promise((resolve, reject) => {
      const attributes = currentObject.schema.attributes;
      let primary = Object.entries(attributes).filter(([, attribute]) => {
        return attribute.unique === true && attribute.required === true;
      });

      if (primary.length > 0) {
        console.log("primary.length > 0");
        // setPrimaryKey(primary[0][0]);
        resolve(primary[0][0]);
      } else {
        reject(new Error("Primary key not found"));
      }
    });
  };

  function getQuarterNumber(date) {
    const month = date.getMonth() + 1; // Adding 1 to make it one-based
  
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else {
      return 4;
    }
  }
  const currentDate = new Date(); // Use the desired date
  let currentyear = currentDate.getFullYear();
  const quarterNumber = getQuarterNumber(currentDate);
  let months={
    1 : "JAN-MAR",
    2 : "APR-JUN",
    3 : "JUL-SEPT",
    4 : "OCT-DEC",
  }

  const filterJson = async () => {
    console.log("filterJson running");
    try {
      let match = currString.match(regexPattern);
      let Currattribute = match[1];
      let CurrOperator = match[2];
      let CurrValue = match[3];

      // Promise 1
      // filtered the attributes based on the new query
      // changing resData to final
      await new Promise((resolve) => {
        final.forEach((item) => {
          console.log(item, "promise 1 item");
          if (item.attributes[Currattribute] == CurrValue) {
            console.log("something");
            setFinal([...final, item]);
            setFinal(Array.from(new Set(final)));
          }
        });
        resolve();
        console.log(final, "final");
      });

      // Promise 2
      // finding all the unique attributes and storing them to an array
      await new Promise((resolve) => {
        final.forEach((item) => {
          const attributes = item.attributes;

          Object.keys(attributes).forEach((attribute) => {
            if (!temp.includes(attribute)) {
              temp.push(attribute);
            }

            // function to find the index of the primarykey and swap it with 0 index

            const primarykeyIndex = temp.indexOf(primaryKey);

            if (primarykeyIndex !== -1 && primarykeyIndex !== 0) {
              temp.splice(primarykeyIndex, 1);
              temp.splice(0, 0, primaryKey);
            }

            temp = Array.from(new Set(temp));
            setUniqueAttributes(temp);
          });
        });
        resolve();
      });

      // Promise 3
      // merging all the attributes of same primary key from final array
      await new Promise((resolve) => {
        // const groupedObjects = {};
        final.forEach((item) => {
          if (!groupedObjects[primaryKey]) {
            groupedObjects[primaryKey] = { ...item.attributes };
          } else {
            groupedObjects[primaryKey] = {
              ...groupedObjects[primaryKey],
              ...item.attributes,
            };
          }
        });
        setSuperFinal([...superFinal, Object.entries(groupedObjects)]);

        resolve();
        console.log(superFinal, "superfinal");
        console.log(uniqueAttributes, "all unique attributes");
      });
    } catch (error) {
      console.log(error);
    }
    if (superFinal.includes([])) {
      superFinal.filter((item) => item.length > 0);
    }
    if (superFinal > 0) {
      setFinal(setSuperFinal);
    }
  };

// Include jsPDF library in your HTML file before using this script
// You can download it from https://github.com/eKoopmans/html2pdf

const handleConvertToPDF = () => {
  const input = tableRef.current;
  console.log(input, "tableinput");

  if (input) {
    // Initialize jsPDF
    const pdf = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    });

    // Set font size and style
    pdf.setFontSize(4);
    pdf.setFont("arial", "normal");
  
    // Get table data
    const tableData = [];
    const rows = input.rows;

    // Extract column headers
    const headerRow = rows[0];
    const columns = Array.from(headerRow.cells).map((cell) => cell.textContent.trim());

    // Extract table rows
    for (let i = 1; i < rows.length; i++) {
      const rowData = Array.from(rows[i].cells).map((cell) => cell.textContent.trim());
      tableData.push(rowData);
    }

    // Add table to PDF using autoTable
    pdf.autoTable({
      head: [columns],
      body: tableData,
      startY: 20, // Adjust the starting Y position as needed
    });

    // Save or open the PDF
    pdf.save("table.pdf");
  }
};




const handleExportToExcel = () => {
  const input = tableRef.current;

  if (input) {
    // Get table data
    const tableData = [];
    const rows = input.rows;

    // Define multiple headings with different styles
    const headings = [
      ['BHILAI INSTITUTE OF TECHNOLOGY, DURG'],
      ['DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING'],
      ['QUARTERLY REPORT'],
      [`SESSION: ${months[quarterNumber]} ${currentyear}`],
      ['R&D ACTIVITIES OF FACULTY MEMBERS'],
      [],
      [`${query.join(" & ")}`],
    ];

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Create a new worksheet
    const ws = XLSX.utils.aoa_to_sheet([[]]);

    // Set values and styles for headings
    headings.forEach((heading, rowIndex) => {
      heading.forEach((cellValue, colIndex) => {
        const cellRef = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });
        XLSX.utils.sheet_add_aoa(ws, [[cellValue]], { origin: cellRef });
        setCellStyle(ws, cellRef, { font: { bold: true, size: 14 } });
      });
    });

    // Extract column headers
    const headerRow = rows[0];
    const columns = Array.from(headerRow.cells).map((cell) => cell.textContent.trim());

    // Set values for column headers
    columns.forEach((column, colIndex) => {
      const cellRef = XLSX.utils.encode_cell({ r: headings.length, c: colIndex });
      XLSX.utils.sheet_add_aoa(ws, [[column]], { origin: cellRef });
      setCellStyle(ws, cellRef, { font: { bold: true, size: 9 } });
    });

    // Extract table rows and set values
    for (let i = 1; i < rows.length; i++) {
      const rowData = Array.from(rows[i].cells).map((cell) => cell.textContent.trim());
      rowData.forEach((cellValue, colIndex) => {
        const cellRef = XLSX.utils.encode_cell({ r: i + headings.length, c: colIndex });
        XLSX.utils.sheet_add_aoa(ws, [[cellValue]], { origin: cellRef });
      });
    }

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the workbook as an Excel file
    XLSX.writeFile(wb, `Quarterly Report_${months[quarterNumber].replace("-", "_")}_${currentyear}.xlsx`);
  }
};

const setCellStyle = (ws, cellRef, style) => {
  const range = XLSX.utils.decode_range(cellRef);
  for (let R = range.s.r; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = { c: C, r: R };
      const cell = ws[cellAddress];
      if (!cell) continue;

      // Apply style
      if (!cell.s) cell.s = {};
      if (style.font) {
        if (!cell.s.font) cell.s.font = {};
        Object.assign(cell.s.font, style.font);
      }
    }
  }
};



  const handleTableNameChange = (selectedTableName) => {
    console.log(tableOptions, "selectedTableName");
    setTableName(selectedTableName);
    setCurrentObject(
      tableOptions.find(
        (option) => option.schema.displayName === selectedTableName
      )
    );

    // setCurrentObject(selectedObject);
    // if(Object.keys(currentObject).length > 0){
    //   findPrimaryKey()
    // }
    // console.log(currentObject, "currentObject");

    // console.log(primaryKey, "pkey");
  };
//   `<Button onClick={handleExportToExcel} startIcon={<Plus />}>
//   Convert to PDF
// </Button>`

  return (
    <>
      {/* header */}
      <Box
        background="neutral100"
        style={{ padding: "0.5em", marginTop: "2rem" }}
      >
        <BaseHeaderLayout
      
          title="Operations"
          // subtitle="36 entries found"
          as="h2"
        />
      </Box>
      <Button disabled={final.length>0?false:true} onClick={handleExportToExcel} style={{ marginLeft: "4rem" }} variant="default">Download Excel </Button>
      
      <div
        style={{
          padding: "1rem 4rem",
          gap: "1rem",
          flexDirection: "column",
          display: "flex",
        }}
      >
        
        {query.length > 0 && (
          <Status variant="secondary" showBullet={false}>
            <Typography>
              <Typography fontWeight="bold">Filters Applied</Typography>
            </Typography>
          </Status>
        )}
        <GridLayout gap={5}>
          {query.map((i) => (
            <GridItem key={i} background="warning200" col={1}>
              <Alert
                key={i}
                closeLabel="Close"
                onClick={() => removeItem(i)}
                variant="success"
              >
                <span style={{ display: "flex" }}>{i}</span>
              </Alert>
            </GridItem>
          ))}
        </GridLayout>
        <Box padding={14}>
          <Divider />
        </Box>
        {/* select table here */}
        <SingleSelect
          label="Select Table "
          placeholder="Select table..."
          value={tableName}
          onChange={handleTableNameChange}
        >
          {tableOptions?.map(({ schema, apiID }) => (
            <SingleSelectOption key={apiID} value={schema.displayName}>
              {schema.displayName}
              {/* {setCurrentObject(schema.attributes)} */}
            </SingleSelectOption>
          ))}
        </SingleSelect>
        {tableName && (
          <>
            <SingleSelect
              label="Col Name"
              placeholder="Select Col..."
              value={col}
              onChange={setcol}
            >
              {Object.keys(currentObject.schema.attributes)?.map((item) => (
                <SingleSelectOption key={item} value={item}>
                  {item}
                </SingleSelectOption>
              ))}
            </SingleSelect>

            <SingleSelect
              label="Operation"
              placeholder="Select operation..."
              value={operation}
              onChange={setOperation}
            >
              {Object.values(operationOptions).map((item) => (
                <SingleSelectOption key={item} value={item}>
                  {item}
                </SingleSelectOption>
              ))}
            </SingleSelect>

            <TextInput
              placeholder="Enter Value"
              label="Value"
              name="strValue"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            {/* {(currentObject?.schema?.attributes[col]?.type==="integer" || currentObject.schema.attributes[col].type==="float") && <NumberInput
              placeholder="This is a content placeholder"
              label="Value"
              name="intValue"
              error={undefined}
              onValueChange={(value) => setContent(value)}
              value={content}
            />} */}
          </>
        )}
        <Button
          startIcon={<Plus />}
          label="Filter"
          style={{
            margin: "1rem",
            width: "10%",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={async () => {
            console.log("Button clicked");
            await queryAdd();
            console.log("queryAdd completed");

            await FetchFilterDetails();
            console.log("FetchFilterDetails completed");

            await filterJson();
            console.log("filterJson completed");

            uniqueAttributes.length > 0
              ? uniqueAttributes.forEach((item) => {
                  console.log(item, "uniqueaitem");
                })
              : console.log("no unique attributes");
          }}
        >
          Add Filter
        </Button>
      </div>
      <div key={reloadkey}>
        <div></div>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{currString}</h1>
        </div>
        {superFinal.length > 0 && (
          <Box padding={8} background="neutral100">
            <div style={{ overflowX: "auto", width: "100%" }}>
              <Table
                colCount={uniqueAttributes.length}
                rowCount={superFinal.length}
              >
                <Thead>
                  <Tr>
                    {uniqueAttributes.map((item) => {
                      return <Th key={item}>{item}</Th>;
                    })}
                    <Th>
                      <Typography variant="sigma"></Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {superFinal.map((item) => (
                    <Tr>
                      {/* key={item}> */}
                      {uniqueAttributes.length > 0 &&
                        uniqueAttributes.map((i) => (
                          <Td>
                            {/* key={i}> */}
                            <Typography textColor="neutral800">
                              {console.log(item[0], "item under td")}
                              {item[0] && item[0][1] && item[0][1][i]
                                ? item[0][1][i]
                                : "---"}
                            </Typography>
                          </Td>
                        ))}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </div>
          </Box>
        )}
      </div>
      <table ref={tableRef} style={{ display: "none" }}>
        <thead>
          <tr>
            {uniqueAttributes.map((item) => (
              <th key={item}>{item}</th>
            ))}
            <th>Sigma</th>
          </tr>
        </thead>
        <tbody>
          {superFinal.map((item, index) => (
            <tr key={index}>
              {uniqueAttributes.length > 0 &&
                uniqueAttributes.map((i) => (
                  <td key={i}>
                    {console.log(item[0], "item under td")}
                    {item[0] && item[0][1] && item[0][1][i]
                      ? item[0][1][i]
                      : "---"}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;

{
  /* <Td>
<Flex>
  <IconButton onClick={() => console.log('edit')} label="Edit" noBorder icon={<Pencil />} />
  <Box paddingLeft={1}>
    <IconButton onClick={() => console.log('delete')} label="Delete" noBorder icon={<Trash />} />
  </Box>
</Flex>
</Td> */
}
