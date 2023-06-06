import Image from "next/image";
import Link from "next/link";
import xxs from "../public/images/xxs.png";
import myphoto from "../public/images/logo.png";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center  lg:p-16  pt-0 bg-white ">
      {/* bg */}
      <div
        className="w-full md:rounded-3xl  max-w-screen-xl"
        style={{
          boxShadow: "2px 2px 8px 4px hsla(0,0%,6%,.1)",
          height: "30vh",
        }}
      >
        <Image src={xxs} alt={""} className="w-full h-full md:rounded-3xl" />
      </div>
      <div
        className="flex flex-col justify-center items-center relative "
        style={{ top: "-64px" }}
      >
        <div
          className="w-full rounded-3xl"
          style={{
            width: 124,
            height: 124,
            borderRadius: "50%",
            boxShadow: "4px 4px 24px 0 rgba(0,0,0,.21)",
          }}
        >
          <Image src={myphoto} alt={"myphoto"} className="w-full h-full" />
        </div>
        <div className="text-4xl font-semibold relative bottom-1">
          SONGSIKAI.COM
        </div>
        <div className="px-4">
          <div className="leading-8 pt-1 pb-4">Hello World 👋 </div>
          <div className="leading-8  pt-1 pb-4">
            我是
            <span
              style={{
                padding: "0 0.5rem",
                borderRadius: " 0.5rem",
                borderBottomLeftRadius: "0.125rem",
                boxDecorationBreak: "clone",
                backgroundColor: "#fbf3db",
                backgroundImage:
                  "linear-gradient(119deg,#fff,#fff697 10.5%,#fdf59d 85.29%,#fff)",
              }}
            >
              <b>宋斯凯,</b>
            </span>
            一个喜欢React的前端开发工程师
          </div>
          <div className="leading-8  pt-1 pb-4">
            You can find me on WeChat and GitHub — check out my bio for more
            info.
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href={"/biographical"}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            个人简历{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
