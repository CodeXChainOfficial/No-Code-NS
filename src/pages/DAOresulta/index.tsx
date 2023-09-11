import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DAOresultaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway items-start justify-start mx-auto p-20 md:px-10 sm:px-5 w-full">
        <Text
          className="capitalize mt-9 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          Name Service
        </Text>
        <div className="flex flex-col gap-8 items-center max-w-7xl mt-[37px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-start justify-start py-2 w-auto md:w-full">
            <Text
              className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
              size="txtRalewayRomanSemiBold32"
            >
              Deploy your Name Service
            </Text>
            <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
              <Text
                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanMedium16"
              >
                Double-check that everything is correct before launching your
                Name Service.
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] items-start justify-start w-auto md:w-full">
            <div className="bg-black-900_01 flex flex-col font-raleway md:gap-10 gap-20 h-[930px] md:h-auto items-start justify-start p-8 sm:px-5 rounded-lg w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-row gap-4 items-center justify-start w-auto">
                        <Text
                          className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanSemiBold16WhiteA700"
                        >
                          Blockchain
                        </Text>
                        <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[117px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                          Not changeable
                        </Button>
                      </div>
                      <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                        <Img src="images/img_feedit.svg" alt="feedit" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col font-raleway items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Network
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Blockchain
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Mainnet
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Tron 
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row font-raleway gap-4 items-center justify-between w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-auto">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              project details
                            </Text>
                            <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[117px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                              Not changeable
                            </Button>
                          </div>
                          <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                            <Img src="images/img_feedit.svg" alt="feedit_One" />
                          </Button>
                        </div>
                        <div className="flex flex-col font-raleway items-start justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Logo
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Project Name
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Summary
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Domains Name
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <div className="bg-white-A700_19 border border-dashed border-white-A700_e5 flex flex-col items-start justify-start px-4 py-1 rounded-lg w-auto">
                                <Text
                                  className="capitalize text-sm text-white-A700 tracking-[0.70px] w-auto"
                                  size="txtRalewayRomanSemiBold14"
                                >
                                  logo.png
                                </Text>
                              </div>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Tron Name Services
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Dynamic name services in Tron
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                . CDX , .TRX, .Tron, .USDD
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-[1216px] w-full">
                <div className="flex flex-col items-end justify-end w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col font-raleway gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-auto">
                            <Text
                              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
                              size="txtRalewayRomanSemiBold16WhiteA700"
                            >
                              Functionality
                            </Text>
                            <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[117px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                              Not changeable
                            </Button>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Seleced Color
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Payment Currency
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Functionality
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Marketplace
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                <span className="text-white-A700_e5 font-raleway text-left font-medium">
                                  FFFFFFF ,{" "}
                                </span>
                                <span className="text-white-A700_e5 font-raleway text-left font-normal">
                                  40CD81
                                </span>
                                <span className="text-white-A700_e5 font-raleway text-left font-medium">
                                  {" "}
                                </span>
                              </Text>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16"
                                >
                                  CDX, USDC
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16"
                                >
                                  Buy, Sell, Trade, Auction{" "}
                                </Text>
                              </div>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px]"
                                size="txtRalewayRomanMedium16"
                              >
                                no
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                      <Button className="bg-white-A700_19 flex h-6 items-center justify-center p-1 rounded-lg w-6">
                        <Img src="images/img_feedit.svg" alt="feedit_Two" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-blue-400_7f capitalize cursor-pointer font-inter min-w-[791px] md:min-w-full py-2.5 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
              Except for the chain you choose and the token you mint, you can
              change all these values later with a vote in your DAO
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-7xl mb-[422px] mt-[234px] mx-auto px-[17px] w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Button
              className="common-pointer bg-gradient  capitalize cursor-pointer font-semibold min-w-[180px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
              onClick={() => (window.location.href = "http://localhost:3000")}
            >
              Deploy Automatic
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOresultaPage;
