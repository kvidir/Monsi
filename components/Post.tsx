import { useState } from 'react';

export default function Post({ post }: { post: any }) {
  const [likes, setLikes] = useState(post.likes || 0);

  return (
    <div className="border rounded p-4 mb-4 bg-white shadow">
      <div className="flex items-center gap-3 mb-2">
        <img src={post.user.avatar} alt="avatar" className="h-8 w-8 rounded-full" />
        <div>
          <div className="font-semibold">{post.user.name}</div>
          <div className="text-xs text-gray-500">{new Date(post.timestamp).toLocaleString()}</div>
        </div>
      </div>
      <div className="mb-2">{post.content}</div>
      {post.image && <img src={post.image} alt="media" className="mb-2 rounded max-h-64" />}
      <div className="flex gap-6 items-center">
        <button className="text-blue-600" onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
        <button className="text-gray-600">Comment</button>
        <button className="text-gray-600">Share</button>
        <button className="text-green-600">Tip (Crypto)</button>
      </div>
    </div>
  );
}
