import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const pagesAndDetails = [
    { title: "PAGE ONE", details: "Details of Page One", color: "#36897A" },
    { title: "PAGE TWO", details: "Details of Page Two", color: "#E9E948" },
    { title: "PAGE THREE", details: "Details of Page Three", color: "#8D1DC5" },
    { title: "PAGE FOUR", details: "Details of Page Four", color: "#52192B" },
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

      <div className="w-full ">
        {pagesAndDetails.map((page, i) => (
          <div key={i}>
            
            <div
              className={`w-full h-screen bg-[${page.color}] flex flex-col items-center text-center justify-center `}
            >
              <div className={`w-full mt-2 py-5 font-bold text-lg `}>
                {page.title}
              </div>
              <div className="w-full  text-sm">{page.details}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
