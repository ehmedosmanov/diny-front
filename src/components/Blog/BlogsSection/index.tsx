'use client';
import React, { useState } from 'react';
import { blogData } from '@/data/blogData';
import AllBlogs from '../AllBlogs';
import BlogPagination from '../BlogsPagination';

const ITEMS_PER_PAGE = 4;

const BlogsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = blogData?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = blogData?.slice(startIndex, endIndex) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };


  if (!blogData || blogData.length === 0) {
    return (
      <section>
        <div className="wrapper">
          <div className="py-[38px] text-center">
            <p className="text-gray-500">No blog posts available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className="wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] py-[38px]">
            <AllBlogs currentItems={currentItems} />
          </div>

          <BlogPagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            getPageNumbers={getPageNumbers}
          />
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
