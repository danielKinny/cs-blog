import { BlogPost } from '@/types/blog';

// Sample blog posts data - in a real app, this would come from a CMS, markdown files, or database
const samplePosts: BlogPost[] = [
  {
    slug: 'getting-started-with-algorithms',
    title: 'Getting Started with Data Structures and Algorithms',
    excerpt: 'A comprehensive guide to understanding the fundamentals of data structures and algorithms, perfect for computer science students and developers looking to strengthen their foundation.',
    content: `
# Getting Started with Data Structures and Algorithms

Data structures and algorithms form the backbone of computer science and software engineering. Whether you're preparing for technical interviews or wanting to write more efficient code, understanding these concepts is crucial.

## What are Data Structures?

Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Common data structures include:

- **Arrays**: Linear collection of elements
- **Linked Lists**: Dynamic linear data structure
- **Stacks**: Last-In-First-Out (LIFO) structure
- **Queues**: First-In-First-Out (FIFO) structure
- **Trees**: Hierarchical data structure
- **Graphs**: Network of connected nodes

## What are Algorithms?

Algorithms are step-by-step procedures for solving problems or performing tasks. They operate on data structures to achieve specific goals.

### Common Algorithm Categories:

1. **Searching Algorithms**: Binary search, linear search
2. **Sorting Algorithms**: Quick sort, merge sort, bubble sort
3. **Graph Algorithms**: Depth-first search, breadth-first search
4. **Dynamic Programming**: Breaking problems into subproblems

## Getting Started

Here's a roadmap for learning DSA:

1. Start with basic data structures (arrays, strings)
2. Learn about time and space complexity (Big O notation)
3. Practice with simple algorithms
4. Move to more complex structures (trees, graphs)
5. Practice on coding platforms like LeetCode, HackerRank

Remember, consistency is key. Practice a little bit every day rather than cramming!
    `,
    date: '2024-12-15',
    tags: ['algorithms', 'data-structures', 'beginner', 'computer-science'],
    author: 'CS Blog',
    readingTime: 5
  },
  {
    slug: 'understanding-big-o-notation',
    title: 'Understanding Big O Notation: A Complete Guide',
    excerpt: 'Master the concept of algorithmic complexity with this detailed explanation of Big O notation, including examples and practical applications in real-world programming.',
    content: `
# Understanding Big O Notation

Big O notation is a mathematical way to describe how the runtime or space requirements of an algorithm grow relative to the input size. It's essential for analyzing algorithm efficiency.

## Common Big O Complexities

### O(1) - Constant Time
Operations that take the same amount of time regardless of input size.

\`\`\`javascript
function getFirstElement(arr) {
  return arr[0]; // Always takes the same time
}
\`\`\`

### O(n) - Linear Time
Operations where runtime grows linearly with input size.

\`\`\`javascript
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
\`\`\`

### O(log n) - Logarithmic Time
Runtime grows logarithmically (like binary search).

### O(n²) - Quadratic Time
Common in nested loops.

\`\`\`javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
\`\`\`

## Why Big O Matters

Understanding Big O helps you:
- Choose the right algorithm for your use case
- Optimize existing code
- Prepare for technical interviews
- Scale applications effectively

## Practice Tips

1. Analyze the complexity of algorithms you write
2. Compare different approaches to the same problem
3. Use online tools to visualize algorithm performance
4. Practice with coding challenges

Remember: premature optimization is the root of all evil, but understanding complexity helps you make informed decisions!
    `,
    date: '2024-12-10',
    tags: ['big-o', 'algorithms', 'complexity', 'performance'],
    author: 'CS Blog',
    readingTime: 7
  },
  {
    slug: 'introduction-to-react-hooks',
    title: 'Modern React Development with Hooks',
    excerpt: 'Explore the power of React Hooks and how they revolutionized React development. Learn useState, useEffect, and custom hooks with practical examples.',
    content: `
# Modern React Development with Hooks

React Hooks, introduced in React 16.8, fundamentally changed how we write React components. They allow you to use state and lifecycle methods in functional components.

## Why Hooks?

Before hooks, you needed class components for:
- Managing state
- Lifecycle methods
- Context consumption

Hooks simplified this by allowing functional components to handle all these cases.

## Essential Hooks

### useState
Manages component state.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

### useEffect
Handles side effects and lifecycle events.

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Dependency array
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
\`\`\`

### Custom Hooks
Reusable stateful logic.

\`\`\`jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}
\`\`\`

## Best Practices

1. **Rules of Hooks**: Only call hooks at the top level
2. **Dependency Arrays**: Always include dependencies in useEffect
3. **Custom Hooks**: Extract reusable logic
4. **Performance**: Use useCallback and useMemo when needed

## Conclusion

Hooks make React code more readable, reusable, and easier to test. They're the modern way to write React applications.
    `,
    date: '2024-12-05',
    tags: ['react', 'hooks', 'javascript', 'frontend'],
    author: 'CS Blog',
    readingTime: 6
  }
];

export async function getAllPosts(): Promise<BlogPost[]> {
  return samplePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map(post => post.slug);
}
