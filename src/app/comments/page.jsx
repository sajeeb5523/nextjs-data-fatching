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
            {comments.map((comment) => {
                return (
                   <div key={comment.id} className='border-2 border-gray-300 space-y-3 p-3 my-3 rounded-2xl'>
                        <p>Name: {comment.name}</p>
                        <p>Body: {comment.body}</p>
                        <p>By: {comment.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
