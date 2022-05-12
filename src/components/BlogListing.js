import React from "react";
import { useGetBlogByNameQuery } from "../services/blog";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PaginationRounded from "./PaginationRounded";

const BlogListing = ({ blogData }) => {
  const { data, isLoading, isError } = useGetBlogByNameQuery(blogData.slug, 3);
  console.log(data?.blogs, 'data>>>>>>>>>')
  const renderBlogCard = data?.blogs?.data.map((el, index) => {
    return (
      <div key={el.id}  >
        <BlogCard blog={el} />
        
      </div>
    );
  });
  

  
  return (
    <>
       {/* <Grid container spacing={2}>
       <Grid item xs={6}>
        {renderBlogCard}
        </Grid>
        
       </Grid> */}
       <div >
      
           {renderBlogCard}
        
       </div>
       <PaginationRounded page = {data?.blogs?.total}/>
    </>
  );
};

export default BlogListing;
