import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import NameServiceProcesdao from "components/NameServiceProcesdao";

const NameServicePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-end mx-auto py-[93px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] mt-[23px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          Name Service{" "}
        </Text>
        <div className="flex flex-col md:gap-10 gap-24 items-center w-full">
          <NameServiceProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1288px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start px-4 py-2 w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32"
              >
                Describe your Name Service
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="text-base text-center text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16"
                >
                  <>
                    Name and define your Name Service so new contributors know
                    they&#39;ve come to the right place.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex md:h-[1168px] sm:h-[1242px] h-[1331px] justify-end mt-[58px] relative w-full">
              <div className="flex flex-row gap-8 h-full items-center justify-between mb-[19px] ml-auto mr-2 mt-auto w-auto">
                <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                  back
                </Button>
                <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                  Next
                </Button>
              </div>
              <div className="absolute bg-black-900_01 flex flex-col gap-12 h-full inset-[0] items-start justify-start m-auto max-w-7xl p-8 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-end justify-end w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16"
                        >
                          Project name
                        </Text>
                        <Input
                          name="inputfieldtext"
                          placeholder="Type your Namer Service’s name..."
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-full"
                          type="text"
                        ></Input>
                        <Text
                          className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-full"
                          size="txtRalewayRomanMedium16WhiteA70099"
                        >
                          Maximum of 128 characters
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16"
                  >
                    Domain’s Name
                  </Text>
                  <Text
                    className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-full"
                    size="txtRalewayRomanMedium16WhiteA70099"
                  >
                    You may select based on the chain you wish to deploy
                  </Text>
                  <Input
                    name="inputfieldtext_One"
                    placeholder=".dot, .Meta, .NFT, . CDX"
                    className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                    wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                  ></Input>
                </div>
                <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[58px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                  Add{" "}
                </Button>
                <div className="flex flex-col gap-12 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start max-w-[1216px] w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16"
                        >
                          Logo{" "}
                        </Text>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[85px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          Optional
                        </Button>
                      </div>
                      <Text
                        className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16WhiteA70099"
                      >
                        JPG, PNG, GIF, or SVG of no more than 3MB. We recommend
                        1024x1024px.
                      </Text>
                    </div>
                    <div className="bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col h-24 items-center justify-start p-10 sm:px-5 rounded-lg w-24">
                      <Img
                        className="h-4 w-[15px]"
                        src="images/img_minimize.svg"
                        alt="minimize"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16"
                    >
                      Description
                    </Text>
                    <div className="border border-solid border-white-A700_33 flex flex-col h-[200px] md:h-auto items-start justify-start px-4 py-2 rounded-lg w-full">
                      <Text
                        className="capitalize text-base text-white-A700_4c tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA7004c"
                      >
                        description
                      </Text>
                    </div>
                    <Text
                      className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanMedium16WhiteA70099"
                    >
                      <>
                        Describe your Project&#39;s purpose in a few sentences.
                        This is listed on the Explore page so new contributors
                        can find you.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start max-w-[1216px] w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16"
                        >
                          Links
                        </Text>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[85px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          Optional
                        </Button>
                      </div>
                      <Text
                        className="text-base text-white-A700_99 tracking-[0.80px] w-full"
                        size="txtRalewayRomanMedium16WhiteA70099"
                      >
                        <>
                          Links to your Project&#39;s website, social media
                          profiles, Discord, or other places your community
                          gathers.
                        </>
                      </Text>
                    </div>
                    <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col gap-4 items-start justify-start p-4 rounded-lg w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between max-w-[658px] w-full">
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          nmae/ description
                        </Text>
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          link
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                        <Input
                          name="inputfieldtext_Two"
                          placeholder="Lens, Discord, etc."
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_99 sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 flex-1 sm:flex-1 pl-4 pr-[35px] py-[11px] rounded-lg w-[48%] sm:w-full"
                        ></Input>
                        <Input
                          name="inputfieldtext_Three"
                          placeholder="https://"
                          className="capitalize font-semibold p-0 placeholder:text-white-A700_99 sm:pr-5 text-base text-left text-white-A700_99 tracking-[0.80px] w-full"
                          wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 flex-1 sm:flex-1 pb-[9px] pl-4 pr-[35px] pt-[13px] rounded-lg w-[48%] sm:w-full"
                        ></Input>
                      </div>
                      <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[105px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        Add link
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1074px] mt-[162px] w-auto">
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                back
              </Button>
              <Button
                className="common-pointer bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/nameservicedefinefunctionality")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameServicePage;
