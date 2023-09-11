import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import NameServiceDefineFunctionalityProcesdao from "components/NameServiceDefineFunctionalityProcesdao";

const DAOdefinemultisigmembersOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] items-start justify-center mx-auto sm:pr-5 pr-[21px] py-[21px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] mt-[95px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          dAO
        </Text>
        <div className="flex flex-col gap-8 items-center max-w-[1419px] mb-[425px] mx-auto md:px-5 w-full">
          <NameServiceDefineFunctionalityProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1419px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
          <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-start px-4 py-2 w-auto md:w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32"
              >
                Define Functionality
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="text-base text-center text-white-A700_e5 tracking-[0.80px] w-auto"
                  size="txtRalewayRomanMedium16"
                >
                  <span className="text-white-A700_e5 font-raleway font-medium">
                    Decide the type of Name Service Provider You Wish to have{" "}
                  </span>
                  <span className="text-light_blue-500 font-raleway font-medium">
                    read this guide.
                  </span>
                </Text>
              </div>
            </div>
            <div className="bg-black-900_01 flex flex-col gap-12 items-start justify-start max-w-7xl mt-[58px] p-8 sm:px-5 rounded-lg w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col items-end justify-end w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16"
                      >
                        Connect to marketplace
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-1 flex-col gap-2 items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              Yes
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_camera.svg"
                              alt="camera"
                            />
                          </div>
                          <Text
                            className="leading-[160.00%] max-w-[528px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            I intend to integrate my name service with
                            established marketplaces that collaborate with CodeX
                          </Text>
                        </div>
                        <div className="bg-black-900_01 border border-light_blue-500 border-solid flex flex-1 flex-col gap-2 h-full items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              No
                            </Text>
                            <Img
                              className="h-4 w-4"
                              src="images/img_contrast_blue_gray_100.svg"
                              alt="contrast"
                            />
                          </div>
                          <Text
                            className="leading-[160.00%] max-w-[528px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16WhiteA70099"
                          >
                            I do not intend to integrate my name service with
                            established marketplaces that collaborate with CodeX
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                    size="txtRalewayRomanSemiBold16"
                  >
                    Marketplace Options
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[1216px] md:max-w-full text-base text-white-A700_99 tracking-[0.80px]"
                    size="txtRalewayRomanMedium16WhiteA70099"
                  >
                    <>
                      Feel free to connect the name service to any number of
                      marketplaces partnered with CodeX—there&#39;s no imposed
                      limit on your integration possibilities.
                    </>
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start py-4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start w-full">
                    <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-1 flex-row gap-7 items-center justify-between p-2 rounded-[16px] w-full">
                      <Text
                        className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA700"
                      >
                        OpenSea
                      </Text>
                      <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[89px] py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                        Added
                      </Button>
                    </div>
                    <Img
                      className="h-12 rounded-lg w-12"
                      src="images/img_frame371164_black_900_01.svg"
                      alt="frame371164"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-start justify-between w-full">
                    <Button
                      className="common-pointer bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[173px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                      onClick={() => navigate("/daodefinemultisigmembers")}
                    >
                      add Marketplace
                    </Button>
                    <Img
                      className="h-12 rounded-lg w-12"
                      src="images/img_frame371164_black_900_01.svg"
                      alt="frame371164_One"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                      size="txtRalewayRomanSemiBold16WhiteA700"
                    >
                      summary
                    </Text>
                    <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16WhiteA70099"
                      >
                        total Marketplace
                      </Text>
                      <Text
                        className="capitalize text-base text-white-A700_99 tracking-[0.80px] w-auto"
                        size="txtInterRegular16"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
                <Button className="bg-blue-400_7f capitalize cursor-pointer font-semibold min-w-[615px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
                  Your Marketplace Choice was automatically added to the list.
                  You can remove it if you like.
                </Button>
              </div>
            </div>
            <div
              className="common-pointer flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1089px] mt-[124px] w-auto"
              onClick={() => navigate("/daoresulta")}
            >
              <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
                back
              </Button>
              <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOdefinemultisigmembersOnePage;
