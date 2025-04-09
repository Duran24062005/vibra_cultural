interface Post {
    id: string;
    image: string;
    title: string;
    text: string;
    creador: string;
    created_at: string;
}

interface IndexBlogProps {
    postsprops: Post[];
}

// export const IndexBlog = ({ postsprops }: IndexBlogProps) => {
//     return (
//         <div className="sm:px-8 lg:px-12 pb-6 bg-gradient-to-l from-slate-400 to-slate-600 shadow-lg">
//             <h1 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-l from-blue-400 text-transparent bg-clip-text">Blog</h1>
//             <div className="grid grid-cols-3 gap-4">
//                 {postsprops.map((post: Post) => (
//                     <div key={post.id} className="border p-4 rounded-lg shadow-md">
//                         <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-t-lg" />
//                         <h2 className="text-xl font-bold mt-2">{post.title}</h2>
//                         <p className="text-gray-700 mt-1">{post.text}</p>
//                         <p className="text-gray-500 text-sm mt-1">By: {post.creador}</p>
//                         <p className="text-gray-500 text-sm mt-1">Date: {post.created_at}</p>
//                         <button className="text-blue-500 hover:underline">
//                             Leer más
//                         </button>
//                     </div>
//                 ))}
//             </div>
            
//         </div>
//     )
// }

import { useState } from 'react';

const PostList = ({ postsprops }: IndexBlogProps) => {
  const [showAll, setShowAll] = useState(false);

  const postsToShow = showAll ? postsprops : postsprops.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4">
        <h1 className="mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-l from-blue-400 text-transparent bg-clip-text">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {postsToShow.map((post:Post, index:number) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">
                {post.text.length > 100 ? post.text.slice(0, 100) + '...' : post.text}
              </p>
              <button className="text-blue-500 hover:underline">
                Leer más
              </button>
            </div>
          </div>
        ))}
      </div>

      {postsprops.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition"
          >
            {showAll ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;

