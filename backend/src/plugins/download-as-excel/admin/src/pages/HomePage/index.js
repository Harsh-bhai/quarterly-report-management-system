// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import html2pdf from "html2pdf.js";
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
  const [reloadkey, setReloadkey] = useState(1)
  // const [primaryKey, setPrimaryKey] = useState();
  const [superFinal, setSuperFinal] = useState([]);
  const [uniqueAttributes, setUniqueAttributes] = useState([]); // store all unique attributes

  let filteredData, primaryKey;
  let temp = [];
  let currString;
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
      primaryKey=primaryKeyValue;
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
  console.log("fetchfilterdetails running")
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
    await new Promise(async(resolve, reject) => {
      let response = await data.json();
    console.log([...response.data], "data.response");
    // if(resData.length == 0){
    //   setResData([...response.data]);
    // }else
    //   setResData([...resData, ...response.data]);
    resData.push(response.data[0]);
    await setPriymaryKeyInObject();
    resolve();
    })
    // setResData(Array.from(new Set(resData)));
    console.log(resData, "resdata");
  };

  const setPriymaryKeyInObject = async() => {
    console.log("setPriymaryKeyInObject running")
  await new Promise((resolve, reject) => {
    resData.forEach((item) => {
      console.log(item, "item");
      item.primaryKey = primaryKey;
    });
    setFinal(resData)
    resolve();
  })
  console.log("setPriymaryKeyInObject completed");
  };

  const findPrimaryKey = () => {
    return new Promise((resolve, reject) => {
      const attributes = currentObject.schema.attributes;
      let primary = Object.entries(attributes).filter(([, attribute]) => {
        return attribute.unique === true && attribute.required === true;
      });
  
      if (primary.length > 0) {
        console.log("primary.length > 0")
        // setPrimaryKey(primary[0][0]);
        resolve(primary[0][0]);
      } else {
        reject(new Error("Primary key not found"));
      }
    });
  };
  

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
  };

  const handleConvertToPDF = () => {
    const input = tableRef.current.querySelector('table');;
    console.log(input,"tableinput")
    if (input) {
      const pdfOptions = {
        margin: 10,
        filename: "table.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .from(input)
        .set(pdfOptions)
        .outputPdf()
        .then((pdf) => {
          pdf.save();
        });
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

  return (
    <>
      {/* header */}
      <Box
        background="neutral100"
        style={{ padding: "0.5em", marginTop: "2rem" }}
      >
        <BaseHeaderLayout
          primaryAction={
            <Button onClick={handleConvertToPDF} startIcon={<Plus />}>
              Convert to PDF
            </Button>
          }
          title="Operations"
          // subtitle="36 entries found"
          as="h2"
        />
      </Box>
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
            
            uniqueAttributes.length>0?uniqueAttributes.forEach((item) => {
              console.log(item,"uniqueaitem")
            }):console.log("no unique attributes")
        }}
        
        >
          Add Filter
        </Button>
      </div>
      <div key={reloadkey}>
        <div>
        </div>
            <div>
              <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                {currString}
              </h1>
            </div>
        {superFinal.length > 0 && (
          <Box padding={8} background="neutral100">
            <div ref={tableRef} style={{ overflowX: "auto" }}>
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
                      {uniqueAttributes.length>0 && uniqueAttributes.map((i) => (
                        <Td>
                           {/* key={i}> */}
                          <Typography textColor="neutral800">
                            {console.log(item[0], "item under td")}
                            {item[0] && item[0][1] && item[0][1][i] ? item[0][1][i] : "---"}
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
