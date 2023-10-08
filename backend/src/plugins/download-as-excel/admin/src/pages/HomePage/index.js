// @ts-nocheck
import React, { useState, useEffect } from "react";
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
  NumberInput,
} from "@strapi/design-system";
import { Plus } from "@strapi/icons";

const HomePage = () => {
  const [tableName, setTableName] = useState();
  // const [filteredData, setFilteredData] = useState([])
  const [operation, setOperation] = useState("");
  const [value, setValue] = useState("");
  const [col, setcol] = useState("");
  const [tableOptions, setTableOptions] = useState([]);
  const [currentObject, setCurrentObject] = useState({});
  const [content, setContent] = useState("");
  let filteredData;

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const token = sessionStorage.getItem("jwtToken");
      const response = await fetch(
        `http://localhost:1337/content-type-builder/content-types`,
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

  // const tableOptions = [
  //   { name: 'Table 1', value: 'table1' },
  //   { name: 'Table 2', value: 'table2' },
  //   { name: 'Table 3', value: 'table3' },
  //   // Add more table options as needed
  // ];
  // const colOptions = [
  //   { name: 'name', value: 'name' },
  //   { name: 'award', value: 'award' },
  //   { name: 'snip', value: 'snip' },
  //   // Add more table options as needed
  // ];

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

  const onCreateOption = (optionName, optionValue) => {
    // Handle creating custom options if needed
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
    console.log(currentObject, "currentObject");
  };

  return (
    <>
      <Box
        background="neutral100"
        style={{ padding: "0.5em", marginTop: "2rem" }}
      >
        <BaseHeaderLayout
          primaryAction={<Button startIcon={<Plus />}>Add an entry</Button>}
          title="Operations"
          subtitle="36 entries found"
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
        <h1>Filters Added</h1>
        <GridLayout gap={5}>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <GridItem key={i} background="warning200" col={1}>
                <Alert key={i} closeLabel="Close" variant="success">
                  <span style={{ display: "flex" }}>
                    This is the default variant.
                  </span>
                </Alert>
              </GridItem>
            ))}
        </GridLayout>
        <Box padding={14}>
          <Divider />
        </Box>
        ,{/* select table here */}
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
          onClick={() => console.log("Filter button clicked")}
        >
          Add Filter
        </Button>
      </div>
    </>
  );
};

export default HomePage;
