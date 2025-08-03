import { useState } from 'react';

export default function CreatePost({ onPost }: { onPost: (post: any) => void }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content && !image) return;
    onPost({
      id: Date.now(),
      user: { name: "Guest", avatar: "/avatar.png" },
      content,
      image,
      likes: 0,
      timestamp: new Date().toISOString(),
    });
    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 rounded border bg-white shadow flex flex-col gap-2">
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border rounded p-2"
        rows={2}
      />
      <div className="flex items-center gap-2">
        <input type="file" accept="image/*" onChange={handleImage} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
      </div>
      {image && <img src={image} alt="preview" className="mt-2 h-24 rounded" />}
    </form>
  );
}
