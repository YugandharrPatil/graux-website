import { Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const cormorantGaramond = Cormorant_Garamond({
	weight: "400",
	subsets: ["latin"],
});

const Navbar = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between bg-gray-950 p-4">
			<div className="mr-6 flex flex-shrink-0 items-center">
				<Link href="/">
					<Image src={logo} className="w-20" alt="grauxLogo"></Image>
				</Link>
			</div>

			<div className="block w-full flex-grow sm:flex sm:w-auto sm:items-center">
				<div className="flex justify-end text-lg sm:flex-grow">
					<Link
						href="/documentation"
						className={`${cormorantGaramond.className} mr-12 mt-4 block text-2xl text-purple-200 hover:text-purple-400 sm:mt-0 sm:inline-block`}
					>
						Documentation
					</Link>
					<Link
						href="/product"
						className={`${cormorantGaramond.className} mr-12 mt-4 block text-2xl text-purple-200 hover:text-purple-400 sm:mt-0 sm:inline-block`}
					>
						Product
					</Link>
					<Link
						href="/provider"
						className={`${cormorantGaramond.className} mr-12 mt-4 block text-2xl text-purple-200 hover:text-purple-400 sm:mt-0 sm:inline-block`}
					>
						Provider
					</Link>
					<Link
						href="/about"
						className={`${cormorantGaramond.className} mr-5 mt-4 block text-2xl text-purple-200 hover:text-purple-400 sm:mt-0 sm:inline-block`}
					>
						About
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
