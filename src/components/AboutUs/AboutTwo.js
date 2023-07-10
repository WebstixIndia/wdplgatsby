import { Link } from "gatsby"
import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQueryTwo"
// import ReactReadMoreReadLess from "react-read-more-read-less"

export default function AboutTwo() {
  const data = useAboutQuery()
  const title = data.wpPage.title
  const Content = data.wpPage.content
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <section class="max-w-[85rem] mx-auto lg:mt-[6rem]  lg:px-6 clsAbouttwo ">
      <div class="flex flex-wrap ">
        <div class="grow-0 shrink-0  basis-auto mb-12 md:mb-0 w-full md:w-12/12 md:pb-12 lg:w-6/12 px-3 lg:px-2">
          <h2
            class="text-3xl font-bold mb-6 text-[#333] text-[30px] capitalize pt-4"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div class="flex items-start rounded-xl  lg:w-[90%] ">
            <div class="">
              <p
                className="leading-7 text-[17px] "
                dangerouslySetInnerHTML={{ __html: Content }}
              >
                {/* <ReactReadMoreReadLess
                    charLimit={340}
                    readMoreText={"Read More "}
                    readLessText={"Read Less "}
                  >
                    {data.wpPage.aboutus.aboutus}
                  </ReactReadMoreReadLess> */}
              </p>
            </div>
          </div>
          <Link to="/about-us">
            <button class="bg-transparent text-[14px] mt-6 rounded-md hover:bg-[#333] text-[#333] font-semibold hover:text-white py-[0.5rem] px-[1.2rem]  border border-black hover:border-transparent">
              Learn More
            </button>
          </Link>
        </div>

        <div class="grow-0 shrink-0 basis-auto  sm:mb-[0px] w-full md:w-12/12 lg:w-6/12 px-3 pt-1  lg:px-6">
          <img src={Image} alt="about-us" />
        </div>
      </div>
    </section>
  )
}
