import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul className='flex justify-around items-center bg-gray-800 text-white p-4'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/posts"><li>Posts</li></Link>
                    <Link href="/comments"><li>Comments</li></Link>
                    <Link href="/meals"><li>Meals</li></Link>
                </ul>
            </nav>
        </div>
    )
}
