import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const posts = [
  {
    id: 1,
    username: 'westley.windler',
    userImage: 'https://via.placeholder.com/50',
    postImage: 'https://via.placeholder.com/600x400',
    caption: 'HI! #marinad',
    likes: 2875,
  },
  {
    id: 2,
    username: 'marina.dilaco',
    userImage: 'https://via.placeholder.com/50',
    postImage: 'https://via.placeholder.com/600x400',
    caption: 'New vibes ✨',
    likes: 3240,
  },
];

export default function MoodFeed() {
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#1B3B3B] text-beige">
      {/* Header */}
      <header className="p-4 text-center text-3xl font-bold">MoodFeed</header>

      {/* Affirmations (like Stories) */}
      <section className="flex space-x-4 p-4 overflow-x-auto">
        {['Stay Positive', 'You Got This', 'Keep Smiling', 'Be Kind'].map((affirmation, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-24 rounded-full bg-[#2D5D5D] flex items-center justify-center text-sm"
          >
            {affirmation}
          </div>
        ))}
      </section>

      {/* Posts */}
      <main className="space-y-8 p-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#2D5D5D] rounded-2xl shadow-lg overflow-hidden">
            {/* Post Header */}
            <div className="flex items-center p-4">
              <img
                src={post.userImage}
                alt={post.username}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="font-semibold">{post.username}</span>
            </div>

            {/* Post Image */}
            <img src={post.postImage} alt="Post" className="w-full" />

            {/* Post Actions */}
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <Heart
                  onClick={() => toggleLike(post.id)}
                  className={`cursor-pointer ${likedPosts[post.id] ? 'text-red-500' : 'text-white'}`}
                />
                <MessageCircle className="cursor-pointer" />
                <Send className="cursor-pointer" />
              </div>
              <Bookmark className="cursor-pointer" />
            </div>

            {/* Likes and Caption */}
            <div className="px-4 pb-4">
              <p className="font-semibold">{likedPosts[post.id] ? post.likes + 1 : post.likes} Likes</p>
              <p>
                <span className="font-semibold">{post.username}</span> {post.caption}
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#2D5D5D] p-4 flex justify-around text-white">
        <button>Home</button>
        <button>Journal</button>
        <button className="text-4xl">+</button>
        <button>Buddy Match</button>
        <button>Profile</button>
      </nav>
    </div>
  );
}
