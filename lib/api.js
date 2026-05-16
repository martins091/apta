// src/lib/api.js
const API_URL = 'https://apta-server.onrender.com/api';

// Fetch all articles
export async function getAllArticles() {
  try {
    const response = await fetch(`${API_URL}/articles`);
    if (!response.ok) throw new Error('Failed to fetch articles');
    return await response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Fetch single article by slug
export async function getArticleBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/articles/${slug}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch article');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}