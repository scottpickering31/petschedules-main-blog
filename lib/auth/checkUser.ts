export async function checkUser() {
  try {
    const response = await fetch("/api/auth/checkUser");
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    return { user: data.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}
