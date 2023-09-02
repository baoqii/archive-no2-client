export function searchPosts(posts, searchTerm) {
  if (searchTerm.trim() === "") {
    return posts;
  } else {
    const searchText = searchTerm.toLowerCase();
    const filtered = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchText) ||
        post.content.toLowerCase().includes(searchText) ||
        post.tags.some((tag) => tag.name.toLowerCase().includes(searchText))
      );
    });
    return filtered;
  }
}
