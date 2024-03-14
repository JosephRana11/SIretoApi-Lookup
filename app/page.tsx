import Image from "next/image";
import SearchBar from "./components/search-bar";
import './globals.css'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
        <SearchBar/>
    </main>
  );
}
