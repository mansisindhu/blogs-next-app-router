import Link from "next/link";
import { Pen } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const routes = [
  {
    name: "Create blog",
    route: "/create-blog",
    icon: <Pen className="mr-2" size={20} />,
  },
  {
    name: "Blogs",
    route: "/blogs",
  },
  {
    name: "",
    route: "",
    icon: (
      <>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </>
    ),
  },
];

export function Header() {
  return (
    <header className="bg-white shadow-md mb-7">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BIApp
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {routes.map((el) => (
              <li key={el.name}>
                {el.route ? (
                  <Link
                    href={el.route}
                    className="flex items-center hover:text-blue-600 transition"
                  >
                    {el?.icon ? el.icon : null}
                    {el.name}
                  </Link>
                ) : (
                  el.icon
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
