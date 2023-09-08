const createComment = async ({ post_id, author, text }) => {
  try {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const response = await fetch(
      `${baseURL}/api/posts/${post_id}/new-comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, text }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status} ${response.statusText}`
      );
    }

    const responseData = await response.json();
    console.log(responseData);
    return { success: true, data: responseData };
  } catch (error) {
    console.error("Error submitting comment:", error);
    return {
      success: false,
      message: "An error occurred while submitting the comment",
    };
  }
};

export default createComment;
