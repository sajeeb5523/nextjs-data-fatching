import Link from 'next/link';
import React from 'react'

export const getComments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    return data;
}

export default async function Comments() {
    const comments = await getComments();

    return (
        <div>
            {comments.map((singleComment) => {
                return (
                    <div key={singleComment.id} className='border-2 border-gray-300 space-y-3 p-3 my-3 rounded-2xl'>
                        <p>ID: {singleComment.id}</p>
                        <p>Name: {singleComment.name}</p>
                        <p>Body: {singleComment.body}</p>
                        <p>By: {singleComment.email}</p>
                        <Link href={`/comments/${singleComment.id}`} className='text-blue-500'>
                            Details
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
