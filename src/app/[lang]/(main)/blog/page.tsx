import CustomBreadCrumb from '@/components/shared/CustomBreadcrumb';
import React from 'react';
import BlogSlider from '@/components/Blog/BlogSlider';
import BlogsSection from '@/components/Blog/BlogsSection';
export { generateStaticParams } from '../static-params';

const BlogPage = () => {
  const blogBreadCrumbItems = [
    { label: 'Restaurants', href: '/restaurants' },
    { label: 'Barcelona', href: '/restaurants/barcelona' },
    { label: 'The 10 Best Restaurants in Barcelona' },
  ];
  return (
    <>
      <CustomBreadCrumb items={blogBreadCrumbItems} />
      <BlogSlider />
      <BlogsSection />
    </>
  );
};

export default BlogPage;
