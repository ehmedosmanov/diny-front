import BlogCard from '@/components/shared/BlogCard';
import { Blog } from '@/data/blogData';
import React from 'react';

const AllBlogs = ({ currentItems }: { currentItems: Blog[] }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <BlogCard key={item.id} slug="slug" {...item} />
        ))}
    </>
  );
};

export default AllBlogs;
