import React from 'react'

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    const id = (await params).id

    // fetch post information
    const singlePost = await getSinglePost(id);

    return {
        title: singlePost.title,
        description: singlePost.body,
    }
}

export default async function SinglePost({ params }) {
    const p = await params;
    const singlePost = await getSinglePost(p.id);

    return (
        <div>
            <div key={singlePost.id} className='border-2 border-gray-300 space-y-5 p-3 my-3 rounded-2xl'>
                <p>Title: {singlePost.title}</p>
                <p>Body: {singlePost.body}</p>
            </div>
        </div>
    )
}
