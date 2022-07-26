export default async function fetchData(query, authToken = "") {
  let isError = false;
  const response = await fetch("https://magento.test/graphql", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: authToken,
    }),
    body: JSON.stringify({
      query: query,
    }),
  }).catch((error) => {
    if (error) {
      isError = true;
    }
  });
  if (!isError) {
    const result = await response.json();
    return result;
  }
  return false;
}

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjMsInV0eXBpZCI6MywiaWF0IjoxNjU1NDYzNjkzLCJleHAiOjE2NTU0NjcyOTN9.i7TYB65kG76eyv1d5VfKIKloLBQgSBCPkQQgTZQ1leQ"
);
myHeaders.append("Content-Type", "application/json");
