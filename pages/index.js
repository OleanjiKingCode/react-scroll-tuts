import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const pagesAndDetails = [
    { title: "PAGE ONE", details: "Details of Page One" },
    { title: "PAGE TWO", details: "Details of Page Two" },
    { title: "PAGE THREE", details: "Details of Page Three" },
    { title: "PAGE FOUR", details: "Details of Page Four" },
  ];

  return (
    <>
      <Head>
        <title>React Scroll Web</title>
        <meta
          name="description"
          content="An example of a react scroll website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full py-5 ">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {pagesAndDetails.map((page, i) => (
          <div className="w-full h-screen" key={i}>
            <div className="w-full mt-2 py-5 font-bold text-lg">
              {page.title}
            </div>
            <div className="w-full h-4/6 text-sm">{page.details}</div>
          </div>
        ))}
      </div>
    </>
  );
}
