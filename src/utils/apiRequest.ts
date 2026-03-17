export async function apiRequest(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  return data;
}