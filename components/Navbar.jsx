import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-red-400 px-8 py-3 rounded-xl">
      <Link
        className="text-white font-bold px-6 py-3 rounded-full hover:bg-blue-800 bg-slate-600"
        href={"/"}
      >
        HomePage
      </Link>
      <h1 className="text-white font-bold text-xl">Perform CRUD Operations!</h1>
      <Link
        className="text-white p-2 px-6 py-3 rounded-full hover:bg-blue-800 bg-slate-600"
        href={"/addTopic"}
      >
        Add Topic
      </Link>
    </nav>
  );
}
