import React from 'react'

export const getSingleComment = async (comment_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${comment_id}`)
    const data = await res.json()
    return data;
}

export default async function SingleComment({ params }) {
    const p = await params;
    const singleComment = await getSingleComment(p.id);

    return (
        <div>
            <div key={singleComment.id} className='border-2 border-gray-300 p-4 m-4 rounded-lg space-y-5' >
                <p>Name: {singleComment.name}</p>
                <p>Body: {singleComment.body}</p>
                <p>Email: {singleComment.email}</p>
            </div>
        </div>
    )
}
