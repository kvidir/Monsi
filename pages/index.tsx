import Navbar from '@/components/Navbar';
import UserBar from '@/components/UserBar';
import CreatePost from '@/components/CreatePost';
import Post from '@/components/Post';
import { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    user: { name: "Alice", avatar: "/avatar.png" },
    content: "Hello, world! First post on ChainSocial 🚀",
    image: null,
    likes: 2,
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    user: { name: "Bob", avatar: "/avatar.png" },
    content: "Check out this awesome meme!",
    image: "/meme.png",
    likes: 5,
    timestamp: new Date().toISOString(),
  },
];

export default function Home() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (post: any) => {
    setPosts([post, ...posts]);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto py-8">
        <UserBar />
        <CreatePost onPost={handleAddPost} />
        <div>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
