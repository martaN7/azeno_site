import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <nav className="group flex justify-items-center gap-10 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link
                className="pointer-events-none lg:pointer-events-auto lg:p-0"
                href="/">
                <Image src="/logo.png" alt="Azeno Company logo" width="50" height="63" />
            </Link>
            <Link
                className="pointer-events-none lg:pointer-events-auto lg:p-0"
                href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About us</Link>
        </nav>
    );
}

export default Navbar;