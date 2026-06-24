import { connectDB } from "@/lib/mongodb";

export default async function Home() {
  await connectDB();

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        EPM conectado correctamente 🚀
      </h1>
    </main>
  );
}