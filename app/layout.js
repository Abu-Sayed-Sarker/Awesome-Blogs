import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Awesome <blogs></blogs>",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();


  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white/50 fixed w-full">
          <div className="bg-purple-300/50">
            <div className="navbar w-10/12 mx-auto">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                      <a>Parent</a>
                      <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                      </ul>
                    </li>
                    <li><a>Item 3</a></li>
                  </ul>
                </div>
                <h1 className="text-xl font-semibold md:text-2xl">Awesome <span className="text-purple-600 lg:text-3xl md:text-2xl">Blogs</span></h1>
              </div>
              <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal space-x-5 px-1">
                  <Link href={"/"}><li className="font-medium hover:border-b-2 border-black transform">Home</li></Link>
                  <Link href={"/details"}><li className="font-medium hover:border-b-2 border-black transform">Details</li></Link>
                  <Link href={"/profile"}><li className="font-medium hover:border-b-2 border-black transform">Profile</li></Link>
                  {!user && <LoginLink>Sign in</LoginLink>}
                  {!user && <RegisterLink>Sign up</RegisterLink>}
                  {user && <LogoutLink>Log out</LogoutLink>}

                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-black" />

        <div className="w-10/12 mx-auto pt-[68px]">

          {children}
        </div>



        <footer className="footer footer-center text-base-content p-4 mt-10">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Abu Sayed</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
