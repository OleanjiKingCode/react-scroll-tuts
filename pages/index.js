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
  const colors = ["#36897A", "#E9E948", "#8D1DC5", "#52192B"];
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
              className={`w-full h-screen py-3`}
              style={{
                backgroundColor: colors[i],
              }}
            >
              <div className="flex flex-wrap items-center justify-between px-12 ">
                <div className="px-3 py-3 mb-2 bg-[#36897A] rounded-xl text-white">
                  Go To Page One
                </div>
                <div className="px-3 py-3 mb-2 bg-[#E9E948] rounded-xl text-white">
                  Go To Page Two
                </div>
                <div className="px-3 py-3 mb-2 bg-[#8D1DC5] rounded-xl text-white">
                  Go To Page Three
                </div>
                <div className="px-3 py-3 mb-2 bg-[#52192B] rounded-xl text-white">
                  Go To Page Four
                </div>
              </div>
              <div
                className={`w-full h-full -mt-16 flex flex-col items-center text-center justify-center `}
              >
                <div className={`w-full mt-2 py-5 font-bold text-2xl `}>
                  {page.title}
                </div>
                <div className="w-full  text-sm">{page.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
