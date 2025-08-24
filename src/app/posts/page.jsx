import Link from 'next/link';
import React from 'react'

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export const metadata = {
    title: "All Posts",
    description: "Loading json placeholder posts using server Component",
};

export default async function Posts() {

    const posts = await getPosts();

    return (
        <div>
            {posts.map((singlePost) => {
                return (
                    <div key={singlePost.id} className='border-2 border-gray-300 space-y-3 p-3 my-3 rounded-2xl'>
                        <p>User-id: {singlePost.id}</p>
                        <p>Title: {singlePost.title}</p>
                        <p>Body: {singlePost.body}</p>
                        <Link href={`/posts/${singlePost.id}`} className='text-blue-500'>Details</Link>
                    </div>
                );
            })}
        </div>
    )
}
