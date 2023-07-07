import { Link } from "gatsby"
import React from "react"
import { useAboutQuery } from "../../hooks/useAboutQuery"

// import ReactReadMoreReadLess from "react-read-more-read-less"

export default function AboutOne() {
  const data = useAboutQuery()
  // const title = data.wpPage.blocks[0].originalContent
  const title = data.wpPage.title
  // const Content = data.wpPage.blocks[2].originalContent
  const Content = data.wpPage.content
  //const Image = data.wpPage.featuredImage.node.localFile.publicURL
  const Image = data.wpPage.featuredImage.node.localFile.publicURL

  return (
    <section class="max-w-[85rem] mx-auto pt-[6rem] lg:px-8 pb-[100px]">
      <div class="flex flex-wrap clsAboutOne">
        {/* <div class="grow-0 shrink-0 basis-auto mb-6 mt-[4rem] md:mb-0 w-[50%] md:w-12/12 md:pb-8 lg:w-6/12 px-3 lg:px-2 clsAboutContentdiv"> */}
        <h2
          class="text-3xl font-bold mb-0 text-[#333] text-[40px] capitalize pt-4"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>

        <div class="clsAboutContent ">
           <img
            src={Image}
            className="w-full object-cover pl-[40px]"
            alt="about-us"
          /> 
          <p
            className="leading-7 mt-[1rem] text-[17px] xl:w-[70%] "
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
        <div className="clsAbtBtn">
          <Link to="/our-team">
          <button className="bg-[#fff] mr-5 hover:bg-[#333] text-[#333] rounded-md font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
            Our Team
          </button>
        </Link>
        <Link to="/careers">
          <button className="bg-[#fff] rounded-md  hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
            Join Us
          </button>
        </Link>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
