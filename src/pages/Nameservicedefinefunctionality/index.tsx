import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Radio, Text } from "components";
import NameServiceDefineFunctionalityProcesdao from "components/NameServiceDefineFunctionalityProcesdao";
import NameServiceDefineFunctionalityRadiobutton from "components/NameServiceDefineFunctionalityRadiobutton";

const NameservicedefinefunctionalityPage: React.FC = () => {
  const navigate = useNavigate();

  const nameServiceDefineFunctionalityRadiobuttonPropList = [
    {},
    { toactasvotingtext: "Buy names for user-friendly transactions." },
    {
      toactasvotingtext:
        "List names for sale, encouraging ownership diversity.",
    },
    { toactasvotingtext: "Bid on unique names, ensuring fairness." },
    { toactasvotingtext: "Control names, link to content." },
    { toactasvotingtext: "Organize with hierarchical names." },
    { toactasvotingtext: "Associate with content hashes." },
    { toactasvotingtext: "Prevent hoarding via periodic renewal." },
    { toactasvotingtext: "Seamlessly connect with DeFi and services." },
    {
      toactasvotingtext:
        "Users & entities establish distinct online identities, boost trust & recognition.",
    },
  ];
  const nameServiceDefineFunctionalityRadiobuttonPropList1 = [
    { toactasvotingtext: "FFFFF" },
    { toactasvotingtext: "000000" },
    { toactasvotingtext: "40CD81" },
    { toactasvotingtext: "D9D9D9" },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-9 items-start justify-end mx-auto py-[82px] w-full">
        <Text
          className="capitalize md:ml-[0] ml-[85px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          Name Service
        </Text>
        <div className="flex flex-col gap-[31px] items-center w-full">
          <NameServiceDefineFunctionalityProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1319px] mx-auto md:px-5 w-full">
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
            <div className="h-[1829px] md:h-[1837px] sm:h-[1990px] mt-2 p-8 sm:px-5 relative w-[1280px] md:w-full">
              <div className="absolute h-[1806px] md:h-[1829px] sm:h-[1982px] inset-[0] justify-center m-auto w-full">
                <div className="bg-black-900_01 h-[1829px] m-auto rounded-lg w-full"></div>
                <div className="absolute bottom-[0] flex flex-col gap-12 inset-x-[0] items-center justify-start mx-auto w-[95%]">
                  <div className="bg-black-900_01 flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16"
                      >
                        Domain Price
                      </Text>
                      <Text
                        className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                        size="txtRalewayRomanRegular16"
                      >
                        You may decided the minimum price for the domain per
                        each characters and its amount{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[3px] items-center justify-start w-full">
                      <div className="bg-black-900_01 border border-solid border-white-A700_19 flex flex-col gap-2 items-start justify-start px-4 py-8 rounded-lg w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[85%] md:w-full">
                          <Text
                            className="capitalize mb-1.5 text-base text-white-A700_e5 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16"
                          >
                            Character Amount
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[393px] md:mt-0 mt-1.5 text-base text-white-A700_e5 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16"
                          >
                            Limit
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[295px] md:mt-0 mt-1.5 text-base text-white-A700_e5 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16"
                          >
                            Price per each
                          </Text>
                        </div>
                        <div className="border-solid border-white-A700_19 border-y flex md:flex-col flex-row md:gap-10 items-center justify-between py-4 w-full">
                          <div className="border border-solid border-white-A700_19 flex flex-col font-raleway h-[41px] md:h-auto items-start justify-start sm:px-5 px-8 py-4 w-[330px]">
                            <div className="flex flex-col items-center justify-start pt-1.5">
                              <Text
                                className="text-base text-light_blue-500 tracking-[0.80px]"
                                size="txtRalewayRomanMedium16Lightblue500"
                              >
                                5
                              </Text>
                            </div>
                          </div>
                          <div className="border border-solid border-white-A700_19 flex flex-col font-inter items-start justify-start px-4 py-2 rounded-lg w-auto">
                            <div className="flex flex-row gap-12 items-center justify-start w-auto">
                              <div className="bg-white-A700_19 flex flex-col h-12 items-center justify-start p-[21px] sm:px-5 rounded-lg w-12">
                                <div className="bg-white-A700 h-px my-0.5 w-[84%]"></div>
                              </div>
                              <Text
                                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtInterSemiBold16"
                              >
                                1000
                              </Text>
                              <Button className="bg-white-A700_19 flex h-12 items-center justify-center p-5 rounded-lg w-12">
                                <Img
                                  className="h-[7px]"
                                  src="images/img_grid.svg"
                                  alt="grid"
                                />
                              </Button>
                            </div>
                          </div>
                          <Button className="bg-white-A700_33 capitalize cursor-pointer font-inter font-semibold min-w-[137px] py-[19px] rounded-lg text-base text-center text-white-A700_e5 tracking-[0.80px]">
                            10 USDC
                          </Button>
                          <Img
                            className="h-12 w-12"
                            src="images/img_frame371164.svg"
                            alt="frame371164"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[81%] md:w-full">
                          <Text
                            className="capitalize text-base text-white-A700_e5 tracking-[0.80px]"
                            size="txtRalewayRomanSemiBold16"
                          >
                            5 Character
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[448px] text-base text-white-A700_e5 tracking-[0.80px]"
                            size="txtInterSemiBold16"
                          >
                            1000
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[294px] text-base text-white-A700_e5 tracking-[0.80px]"
                            size="txtInterSemiBold16"
                          >
                            10 USCD
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="capitalize text-base text-black-900 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16Black900"
                      >
                        1 Address
                      </Text>
                      <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                        <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[65px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                          add
                        </Button>
                        <Img
                          className="h-12 rounded-lg w-12"
                          src="images/img_frame371164_black_900_01.svg"
                          alt="frame371164_One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                      <div className="flex flex-col items-end justify-end w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-col gap-4 items-start justify-start w-full">
                            <Text
                              className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16"
                            >
                              Functionality
                            </Text>
                            <Text
                              className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                              size="txtRalewayRomanRegular16"
                            >
                              Specify what kind of functionality you wish you
                              have on your Name Service
                            </Text>
                          </div>
                          <div className="border border-solid border-white-A700_19 flex flex-col items-start justify-start p-4 rounded-lg w-full">
                            <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                              {nameServiceDefineFunctionalityRadiobuttonPropList.map(
                                (props, index) => (
                                  <React.Fragment
                                    key={`NameServiceDefineFunctionalityRadiobutton${index}`}
                                  >
                                    <NameServiceDefineFunctionalityRadiobutton
                                      className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 flex-col gap-2 h-36 md:h-auto items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-full"
                                      {...props}
                                    />
                                  </React.Fragment>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                  <div className="flex flex-col gap-12 h-[460px] md:h-auto items-end justify-end max-w-[1200px] w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                        size="txtRalewayRomanSemiBold16"
                      >
                        Select Color
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[147px] justify-start max-w-[1179px] w-full"
                        orientation="horizontal"
                      >
                        {nameServiceDefineFunctionalityRadiobuttonPropList1.map(
                          (props, index) => (
                            <React.Fragment
                              key={`NameServiceDefineFunctionalityRadiobutton${index}`}
                            >
                              <NameServiceDefineFunctionalityRadiobutton
                                className="bg-black-900_01 border border-solid border-white-A700_33 flex flex-col gap-2 h-[147px] md:h-auto items-start justify-start sm:px-5 px-8 py-4 rounded-lg w-[283px]"
                                {...props}
                              />
                            </React.Fragment>
                          ),
                        )}
                      </List>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16"
                        >
                          Payment Currency
                        </Text>
                      </div>
                      <Input
                        name="price"
                        placeholder="USDC"
                        className="capitalize font-semibold p-0 placeholder:text-white-A700_4c sm:pr-5 text-base text-left text-white-A700_4c tracking-[0.80px] w-full"
                        wrapClassName="bg-black-900_01 border border-solid border-white-A700_19 pl-4 pr-[35px] py-[11px] rounded-lg w-full"
                      ></Input>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="border border-solid border-white-A700_33 flex flex-col items-center justify-end pl-4 rounded-lg w-full">
                          <div className="bg-white-A700_19 flex flex-col items-start justify-start px-2.5 py-2 rounded-br-lg rounded-tr-lg w-auto">
                            <Img
                              className="h-3.5 w-5"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[58px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          Add{" "}
                        </Button>
                        <Text
                          className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16"
                        >
                          You may add more than one payment method
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-pointer flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1145px] mt-[95px] w-auto"
              onClick={() => navigate("/daodefinemultisigmembersone")}
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

export default NameservicedefinefunctionalityPage;
