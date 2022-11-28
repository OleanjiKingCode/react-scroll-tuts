import Head from "next/head";
import { Link, Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: PAGE_ONE, inView: viewOne } = useInView({
    threshold: 0.3,
  });
  const { ref: PAGE_TWO, inView: viewTwo } = useInView({
    threshold: 0.3,
  });
  const { ref: PAGE_THREE, inView: viewThree } = useInView({
    threshold: 0.3,
  });
  const { ref: PAGE_FOUR, inView: viewFour } = useInView({
    threshold: 0.3,
  });

  const pagesAndDetails = [
    { title: "PAGE_ONE", details: "Details of Page One" },
    { title: "PAGE_TWO", details: "Details of Page Two" },
    { title: "PAGE_THREE", details: "Details of Page Three" },
    { title: "PAGE_FOUR", details: "Details of Page Four" },
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

      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between px-12 fixed">
          <Link
            activeClass="active"
            to="PAGE ONE"
            spy
            smooth
            duration={700}
            className="px-3 py-3 mb-2 bg-[#b8c7ce] rounded-xl border-2 border-white cursor-pointer mr-4"
          >
            {viewOne ? (
              <span>YOU ARE AT {pagesAndDetails[0].title}</span>
            ) : (
              <span> GO TO {pagesAndDetails[0].title}</span>
            )}
          </Link>
          <Link
            activeClass="active"
            to="PAGE TWO"
            spy
            smooth
            duration={700}
            className="px-3 py-3 mb-2 bg-[#E9E948] rounded-xl border-2 border-white cursor-pointer  mr-4"
          >
            {viewTwo ? (
              <span>YOU ARE AT {pagesAndDetails[1].title}</span>
            ) : (
              <span> GO TO {pagesAndDetails[1].title}</span>
            )}
          </Link>
          <Link
            activeClass="active"
            to="PAGE THREE"
            spy
            smooth
            duration={700}
            className="px-3 py-3 mb-2 bg-[#f1f1f1] rounded-xl border-2 border-white cursor-pointer mr-4"
          >
            {viewThree ? (
              <span>YOU ARE AT {pagesAndDetails[2].title}</span>
            ) : (
              <span> GO TO {pagesAndDetails[2].title}</span>
            )}
          </Link>
          <Link
            activeClass="active"
            to="PAGE FOUR"
            spy
            smooth
            duration={700}
            className="px-3 py-3 mb-2 bg-[#7bc191] rounded-xl border-2 border-white cursor-pointer mr-4"
          >
            {viewFour ? (
              <span>YOU ARE AT {pagesAndDetails[3].title}</span>
            ) : (
              <span> GO TO {pagesAndDetails[3].title}</span>
            )}
          </Link>
        </div>

        <Element
          name="PAGE ONE"
          className={`w-full h-screen py-3`}
          style={{
            backgroundColor: colors[0],
          }}
        >
          <div
            ref={PAGE_ONE}
            className={`w-full h-full -mt-16 flex flex-col items-center text-center justify-center `}
          >
            <div className={`w-full mt-2 py-5 font-bold text-2xl `}>
              {pagesAndDetails[0].title}
            </div>
            <div className="w-full  text-sm">{pagesAndDetails[0].details}</div>
          </div>
        </Element>
        <Element
          name="PAGE TWO"
          className={`w-full h-screen py-3`}
          style={{
            backgroundColor: colors[1],
          }}
        >
          <div
            ref={PAGE_TWO}
            className={`w-full h-full -mt-16 flex flex-col items-center text-center justify-center `}
          >
            <div className={`w-full mt-2 py-5 font-bold text-2xl `}>
              {pagesAndDetails[1].title}
            </div>
            <div className="w-full  text-sm">{pagesAndDetails[1].details}</div>
          </div>
        </Element>
        <Element
          name="PAGE THREE"
          className={`w-full h-screen py-3`}
          style={{
            backgroundColor: colors[2],
          }}
        >
          <div
            ref={PAGE_THREE}
            className={`w-full h-full -mt-16 flex flex-col items-center text-center justify-center `}
          >
            <div className={`w-full mt-2 py-5 font-bold text-2xl `}>
              {pagesAndDetails[2].title}
            </div>
            <div className="w-full  text-sm">{pagesAndDetails[2].details}</div>
          </div>
        </Element>
        <Element
          name="PAGE FOUR"
          className={`w-full h-screen py-3`}
          style={{
            backgroundColor: colors[3],
          }}
        >
          <div
            ref={PAGE_FOUR}
            className={`w-full h-full -mt-16 flex flex-col items-center text-center justify-center `}
          >
            <div className={`w-full mt-2 py-5 font-bold text-2xl `}>
              {pagesAndDetails[3].title}
            </div>
            <div className="w-full  text-sm">{pagesAndDetails[3].details}</div>
          </div>
        </Element>
      </div>
    </>
  );
}
