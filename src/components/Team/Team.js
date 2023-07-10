import { Link } from "gatsby"
import React from "react"
import { useTeamQuery } from "../../hooks/useTeamQuery"
import { FaLinkedin } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

export const Team = () => {
  const data = useTeamQuery()
  const team = data.allWpTeam.nodes
  const title = data.wpPage.title
  const content = data.wpPage.content
  const cat = data.allWpCategory.nodes

  return (
    <div class="max-w-[85rem] mx-auto  lg:px-6 flex lg:pb-[100px] md:pb-[100px]  clsteamContainer">
      <div class="mb-10 md:mb-16  max-w-[32%] pr-[75px] fixed mt-[6rem] clsteamContent z-10">
        <h2 class="text-3xl font-bold mb-4 text-[#333] text-[40px] capitalize pt-4">
          {title}
        </h2>

        <p
          class="max-w-screen-md mx-auto mt-[4px] text-left md:text-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex flex-wrap ">
          <div className="clsCatBtn">
                      {cat.map(c => (
              <>
              
                <Link to={c.uri}>
                  <button
                    type="button"
                    class=" rounded-lg text-[12px]  text-center inline-flex items-center bg-[#fff] mt-6 hover:bg-[#333] text-[#333] font-semibold hover:text-[#fff] py-[7px] px-[14px] border border-black mr-3"
                  >
                    {c.name}
                    <span className="pl-2">
                      <FaArrowRight />
                    </span>
                  </button>
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="clsTeamBtn">
        <div >
          <Link to="/organization">
            <button class="bg-[#fff] mt-8 hover:bg-[#333] text-[#333] rounded-md font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
              Organization Chart
            </button>
          </Link>
        </div>
        <div> 
          <Link to="/careers">
            <button class="bg-[#fff] mt-7 hover:bg-[#333] text-[#333] rounded-md font-semibold hover:text-[#fff] py-[0.5rem] px-[1.2rem] text-[14px]  border border-black">
              Join us
            </button>
          </Link>
        </div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-3 w-[62%] ml-auto h-fit lg:mt-[6.5rem] md:mt-[4rem] clsteamImage">
        {team.map(t => (
          <div class="p-4 shadow-lg max-h-[460px]">
            <div class="h-[250px] mb-2 overflow-hidden rounded-lg bg-[#f5f5f5]  md:h-[250px] clsTeamImagediv">
              <img
                src={t.featuredImage.node.sourceUrl}
                alt="team-img"
                class="object-cover relative object-center w-full h-[280px]"
              />
            </div>

            <div class="flex flex-col items-left justify-center">
              <div className="flex justify-between">
                <div class="font-bold text-[#333] md:text-lg clsPersonName">{t.title}</div>
                <div className="pt-1">
                  {t.teamDetails.linkedin ? (
                    <div class="flex">
                      <a
                        href={t.teamDetails.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="text-[#26a7de] text-[20px] clsLinkedIn" />
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
              <p class="text-sm text-gray-500 md:text-base clsDesignation text-[16px]">
                {t.teamDetails.designation}
              </p>

              {/* <div class="flex">
                <div class="flex gap-4">
                  <a href={t.teamDetails.linkedin} target="_blank">
                    <FaLinkedin className="text-[#26a7de] text-[25px]" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
