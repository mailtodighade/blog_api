import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { useGetAllBlogsQuery, useGetBlogByNameQuery } from "../services/blog";
import BlogListing from "./BlogListing";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BlogList() {
  const { data, isError, isLoading } = useGetAllBlogsQuery();

  console.log(data?.data, "data");
  console.log(isLoading, "loading....");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(event, newValue);
    setValue(newValue);
  };

  //render the blog data....
  const renderBlogCategoryList = data?.data.map((el) => {
    return <Tab label={el.title} {...a11yProps(el.id)} key={el.id} />;
  });
  console.log(value);
  const renderContent = data?.data.map((el, index) => {
    return (
        
      <TabPanel value={value} index={index} key={el.id}>
           

        <BlogListing blogData={el} />
           
      </TabPanel>
    );
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  function FormRow() {
const renderContent = data?.data.map((el, index) => {
    return (
        
      <TabPanel value={value} index={index} key={el.id}>
           <Grid item xs={4}>

        <BlogListing blogData={el} />
           </Grid>
      </TabPanel>
    );
  });
    return renderContent
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {renderBlogCategoryList}
          </Tabs>
        </Grid>
        <Grid item xs={9}>
        
        {renderContent}
      </Grid>
      </Grid>
    </>
  );
}
