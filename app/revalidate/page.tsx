// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default async function () {
  await fetch("https://httpbin.org/status/200", {
    next: { revalidate: 60 * 60 * 24 },
  });

  return <h1>revalidate=false</h1>;
}
