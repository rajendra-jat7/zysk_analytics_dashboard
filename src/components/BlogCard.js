import React from 'react';
import LeftPost from '../images/LeftPost.svg';
import CenterPost from '../images/CenterPost.svg';
import RightPost from '../images/RightPost.svg';
import LeftAvatar from '../images/LeftAvatar.svg';
import CenterAvatar from '../images/CenterAvatar.svg';
import RightAvatar from '../images/RightAvatar.svg';

const BlogCard = () => {
  const blogs = [
    {
      title: 'UX review presentations',
      category: 'Design',
      description:
        'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: LeftPost,
      avatar: LeftAvatar,
    },
    {
      title: 'Migrating to Linear 101',
      category: 'Product',
      description:
        'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: CenterPost,
      avatar: CenterAvatar,
    },
    {
      title: 'Building your API stack',
      category: 'Software Engineering',
      description:
        'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: RightPost,
      avatar: RightAvatar,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto py-12 px-6'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <p className='text-sm text-purple-600 font-semibold uppercase'>
            Our blog
          </p>
          <h2 className='text-3xl font-bold mb-2'>Latest blog posts</h2>
          <p className='text-gray-600'>
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className='text-white bg-[#7F56D9] font-medium text-sm rounded-md p-2 hover:underline'>
          View All Posts
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm'
          >
            <img
              src={blog.image}
              alt={blog.title}
              className='h-48 w-full object-cover'
            />
            <div className='p-6'>
              <p className='text-purple-600 text-sm font-semibold uppercase'>
                {blog.category}
              </p>
              <h3 className='text-xl font-semibold mt-2'>{blog.title}</h3>
              <p className='text-gray-600 text-sm mt-2'>{blog.description}</p>
              <div className='flex items-center mt-4'>
                <img
                  src={blog.avatar}
                  alt={blog.author}
                  className='w-8 h-8 rounded-full border border-gray-200 mr-2'
                />
                <div>
                  <p className='text-gray-800 text-sm font-medium'>
                    {blog.author}
                  </p>
                  <p className='text-gray-500 text-sm'>{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
