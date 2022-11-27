import Head from "next/head";
import { Link, Element } from "react-scroll";

export default function Home() {
  const pagesAndDetails = [
    { title: "PAGE ONE", details: "Details of Page One" },
    { title: "PAGE TWO", details: "Details of Page Two" },
    { title: "PAGE THREE", details: "Details of Page Three" },
    { title: "PAGE FOUR", details: "Details of Page Four" },
  ];

  const colors = ["#b8c7ce ", "#E9E948", "#f1f1f1 ", "#7bc191"];

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

      <div className="w-full pt-5 ">
        <div className="flex flex-wrap items-center justify-between px-12 ">
          {pagesAndDetails.map((page, i) => (
            <Link
              activeClass="active"
              to={page.title}
              spy
              smooth
              duration={700}
              className="px-3 py-3 mb-2  rounded-xl border-2 border-white cursor-pointer"
              style={{
                backgroundColor: colors[i],
              }}
            >
              Go To {page.title}
            </Link>
          ))}
        </div>
        {pagesAndDetails.map((page, i) => (
          <div key={i}>
            <Element
              name={page.title}
              className={`w-full h-screen py-3`}
              style={{
                backgroundColor: colors[i],
              }}
            >
              <div
                className={`w-full h-full -mt-16 flex flex-col items-center text-center justify-center `}
              >
                <div className={`w-full mt-2 py-5 font-bold text-2xl `}>
                  {page.title}
                </div>
                <div className="w-full  text-sm">{page.details}</div>
              </div>
            </Element>
          </div>
        ))}
      </div>
    </>
  );
}
