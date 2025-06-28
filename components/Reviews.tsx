"use client";

import { useState } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    rating: 5,
    comment: "Amazing blog! The articles on algorithms really helped me understand complex concepts. The explanations are clear and the examples are practical.",
    date: "2024-12-15",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Mike Johnson",
    rating: 4,
    comment: "Great resource for computer science students. I've learned so much from the programming tutorials. Keep up the excellent work!",
    date: "2024-12-10",
    avatar: "MJ"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    comment: "This blog has been instrumental in my CS journey. The content is well-researched and the writing style makes complex topics accessible.",
    date: "2024-12-05",
    avatar: "ER"
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.comment.trim()) {
      const review: Review = {
        id: Date.now(),
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: "", rating: 5, comment: "" });
      setShowForm(false);
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="py-16" style={{backgroundColor: '#7a2531'}}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Readers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(Math.floor(averageRating))}
            <span className="text-red-200 ml-2">
              {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
            </span>
          </div>
          <p className="text-red-200">Join the community of learners who trust CS Blog</p>
        </div>

        <div className="grid gap-6 mb-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border"
              style={{borderColor: '#e8d8da'}}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm" style={{backgroundColor: '#7a2531'}}>
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold" style={{color: '#7a2531'}}>{review.name}</h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="mb-2" style={{color: '#6b1e2a'}}>{review.comment}</p>
                  <p className="text-sm" style={{color: '#8b2635'}}>{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-300 shadow-lg"
              style={{backgroundColor: '#d4af37'}}
            >
              Write a Review
            </button>
          ) : (
            <div className="bg-white p-6 rounded-lg border" style={{borderColor: '#e8d8da'}}>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#7a2531'}}>Share Your Experience</h3>
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1" style={{color: '#6b1e2a'}}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                    style={{color: '#7a2531', borderColor: '#e8d8da'}}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium mb-1" style={{color: '#6b1e2a'}}>
                    Rating
                  </label>
                  <select
                    id="rating"
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                    style={{color: '#7a2531', borderColor: '#e8d8da'}}
                  >
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium mb-1" style={{color: '#6b1e2a'}}>
                    Your Review
                  </label>
                  <textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                    style={{color: '#7a2531', borderColor: '#e8d8da'}}
                    placeholder="Tell us about your experience with CS Blog..."
                    required
                  />
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    type="submit"
                    className="text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-colors duration-300 shadow-lg"
                    style={{backgroundColor: '#7a2531'}}
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-400 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
