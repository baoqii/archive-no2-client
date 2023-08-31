const getPosts = async (setPosts, setLoading, setError) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const response = await fetch(`${baseURL}/api/posts/all`);

    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    setPosts(data.data.post_list);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
};

export default getPosts;
