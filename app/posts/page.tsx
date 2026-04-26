import React from 'react'


export default function Posts() {
    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white relative overflow-hidden p-4">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <a className='text-gray-500 hover:text-white transition text-sm underline' href='/'>home</a>
            <p className="text-gray-500 mt-4">No posts yet</p>
        </div>
    )
}
