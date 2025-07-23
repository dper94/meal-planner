import db from "@/lib/db";

export default async function Home() {
  const user = await db.user.findFirst();

  return (
    <>
      <h1>Hello from NextJS</h1>
      <p>{JSON.stringify(user)}</p>
    </>
  );
}
