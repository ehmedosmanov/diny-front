import React from 'react';
import { Eye } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface BlogProps {
  id: number;
  title: string;
  image: StaticImageData;
  date: string;
  viewCount: number;
  slug: string;
}

const BlogCard = ({ id, title, image, date, viewCount, slug }: BlogProps) => {
  const href = slug ? `/blog/${slug}` : `/blog/${id}`;

  return (
    <Card className="w-full  overflow-hidden pt-0 bg-white gap-0 pb-0">
      <Link href={href} className="block group">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="pt-[18px] px-[13px] pb-[8px]">
        <Link href={href}>
          <h2 className="text-xl font-bold text-gray-900 leading-tight mb-8 hover:text-blue-600 transition-colors cursor-pointer">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between text-sm text-black border-t border-t-[#ECECECEE] py-[18px]">
          <span>Published on {date}</span>
          <div className="flex items-center gap-1">
            <span className="font-medium">{viewCount}</span>
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
