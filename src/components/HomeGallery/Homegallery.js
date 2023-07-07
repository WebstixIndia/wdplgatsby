import { Link } from "gatsby"
import React from "react"
import { useHomeGallery } from "../../hooks/useHomeGallery"

export default function Homegallery() {
  const data = useHomeGallery()

  const galleryImages = data.wpGallery.gallery.photos
  const slice = galleryImages

  return (
    <>
      <div className="clsHomeGallerybg">
        <section class="max-w-[85rem] mx-auto mt-[6rem] lg:pl-6 lg:pr-8 clsHomeGalleryMain">
          <div class="">
            <div class="ml-2">
              <h2 class="text-3xl font-bold mb-8 text-[#333] text-[36px]">
                Gallery
              </h2>
              <div className="">
                <div className="flex justify-start items-start h-full pb-6 w-[100%]  clshomeGalleryContainer  ">
                  <div className="w-[38%] pr-12 h-full clsHomeGallerydivOne pt-[12px]">
                    <p
                      className="text-[22px] leading-7 font-bold sidekick blockquote"
                      // dangerouslySetInnerHTML={{ __html: Content }}
                    >
                      {" "}
                      Where work meets joy and collaboration thrives, magic happens and joy flourishes.
</p>
                    <div className=" mt-5 clsHomeGallerybtn">
                      <Link to="/gallery">
                        <button class="bg-transparent  rounded-md mt-6 hover:bg-[#333] text-[#333] font-semibold hover:text-white py-[0.5rem] px-[1.2rem] text-[14px] border border-black hover:border-transparent">
                          See More
                        </button>
                      </Link>
                    </div>
                    <div className="pt-[82px] clsHomeGalleryImg">
                      {/* <img src={data.wpGallery.featuredImage.node.sourceUrl} /> */}
                    </div>
                  </div>

                  <div className="galleryWrap clsHomeGallery container mx-auto pt-2 w-[62%] mt-[100px] pl-[0px]">
                    {slice &&
                      slice.map((slide, index) => {
                        return (
                          // <section class="clsHomeglySec">
                            <div class="flex flex-wrap clsHomeImgContainer">
                              <div className="single md:w-1/4 " key={index}>
                                <img
                                  className=""
                                  src={slide.sourceUrl}
                                  alt=""
                                />
                              </div>
                            </div>
                          // </section>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
