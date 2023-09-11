import React from "react";

import { Button, Img, List, Text } from "components";

const DAOwaitingforconfirmationbPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col items-center justify-end mx-auto pt-[72px] md:px-10 sm:px-5 px-[72px] w-full">
        <div className="backdrop-opacity-[0.5] blur-[10.00px] flex flex-col items-start justify-end max-w-[1288px] mt-[30px] mx-auto w-full">
          <Text
            className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px]"
            size="txtRalewayRomanSemiBold40"
          >
            Name Service
          </Text>
          <div className="flex flex-col font-raleway gap-4 items-start justify-start mt-9 px-4 py-2 w-auto md:w-full">
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
                organization.
              </Text>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-col font-inter md:gap-10 gap-20 items-start justify-start mt-8 p-8 sm:px-5 rounded-lg w-auto md:w-full">
            <div className="h-[469px] sm:h-[516px] md:h-[742px] relative w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <List
                  className="flex flex-col gap-20 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-start justify-start max-w-[1216px] my-0 w-full">
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
                                  Blockchain
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
                                    Testnet
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtRalewayRomanMedium16"
                                  >
                                    Mumbai
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                              These values are correct
                            </Button>
                          </div>
                          <Button className="bg-light_blue-500 capitalize cursor-pointer min-w-[56px] py-2.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                            edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start max-w-[1216px] my-0 w-full">
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
                                  DAO details
                                </Text>
                                <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[139px] py-1.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                                  Change with a vote
                                </Button>
                              </div>
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
                                    DAD name
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtRalewayRomanMedium16"
                                  >
                                    Summary
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
                                    xxxx
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                    size="txtRalewayRomanMedium16"
                                  >
                                    xxxx
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2.5 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                              These values are correct
                            </Button>
                          </div>
                          <Button className="bg-light_blue-500 capitalize cursor-pointer min-w-[56px] py-2.5 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                            edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="absolute bg-black-900_01 flex flex-col font-raleway inset-x-[0] items-center justify-start max-w-[680px] mx-auto p-8 sm:px-5 rounded-[16px] top-[0] w-full">
                <div className="flex flex-col items-start justify-center pb-8 pt-2 w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[1.20px] w-auto"
                      size="txtRalewayRomanSemiBold24"
                    >
                      Deploy your Name Service
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_carbonclosefilled.svg"
                      alt="carbonclosefill"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-end justify-start w-full">
                  <Text
                    className="text-base text-white-A700_e5 tracking-[0.80px] w-full"
                    size="txtRalewayRomanMedium16"
                  >
                    The fees below are the cost of using the selected blockchain
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-black-900_01 border-b border-solid border-white-A700_19 flex sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-start py-2 w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16"
                        >
                          Estimated gas fees
                        </Text>
                        <Text
                          className="capitalize text-white-A700_e5 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12"
                        >
                          max fee
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-end justify-start w-full">
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16"
                        >
                          0.0023216 DOT
                        </Text>
                        <Text
                          className="capitalize text-white-A700_99 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA70099"
                        >
                          0.001451 DOT
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900_01 flex sm:flex-col flex-row sm:gap-10 gap-16 items-start justify-start py-2 w-full">
                      <div className="flex flex-1 flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16"
                        >
                          Total cost
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-end justify-center w-[236px]">
                        <Text
                          className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                          size="txtRalewayRomanMedium16"
                        >
                          0.002321 DOT
                        </Text>
                        <Text
                          className="capitalize text-white-A700_99 text-xs tracking-[0.60px] w-auto"
                          size="txtRalewayRomanSemiBold12WhiteA70099"
                        >
                          $2.63
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[202px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
                      Approve transaction
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-20 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-start justify-start max-w-[1216px] w-full">
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
                              Voters
                            </Text>
                            <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[167px] py-1 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                              Changeable with a vote
                            </Button>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Eligible voters
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Token
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Supply
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Distribution
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Proposal creation
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Token holders
                              </Text>
                              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16"
                                >
                                  xx xx{" "}
                                </Text>
                                <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[44px] py-1 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                                  new
                                </Button>
                              </div>
                              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16"
                                >
                                  5xx{" "}
                                </Text>
                                <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[71px] py-1 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                                  mintable
                                </Button>
                              </div>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                See 1 addresses
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Token holders with 5xx
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                      <Button className="bg-light_blue-500 capitalize cursor-pointer min-w-[56px] py-2 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                        edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start max-w-[1216px] w-full">
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
                              Voting parameters
                            </Text>
                            <Button className="bg-white-A700_19 capitalize cursor-pointer font-semibold min-w-[96px] py-1 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                              Change with
                            </Button>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-10 gap-40 items-start justify-between w-full">
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Support threshold
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Minimum participation
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Minimum duration
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Early execution
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                Vote change
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                <>&gt; 50%</>
                              </Text>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16"
                                >
                                  <>&gt; 50% (&gt;1%)</>
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                  size="txtRalewayRomanMedium16"
                                >
                                  2 days 2 hours 3 minutes
                                </Text>
                              </div>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                yes
                              </Text>
                              <Text
                                className="text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                                size="txtRalewayRomanMedium16"
                              >
                                no
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-400_7f capitalize cursor-pointer font-inter min-w-[175px] py-2 rounded-lg text-center text-white-A700_e5 text-xs tracking-[0.60px]">
                          These values are correct
                        </Button>
                      </div>
                      <Button className="bg-light_blue-500 capitalize cursor-pointer min-w-[56px] py-2 rounded text-center text-white-A700 text-xs tracking-[0.60px]">
                        edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Button className="bg-blue-400_7f capitalize cursor-pointer font-inter min-w-[791px] md:min-w-full ml-8 md:ml-[0] mt-12 py-2 rounded-lg text-center text-white-A700 text-xs tracking-[0.60px]">
            Except for the chain you choose and the token you mint, you can
            change all these values later with a vote in your DAO
          </Button>
          <div className="flex flex-col font-raleway items-start justify-start md:ml-[0] ml-[1084px] mt-[84px] w-auto">
            <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[183px] py-2 rounded text-base text-center text-white-A700 tracking-[0.80px]">
              Deploy your DAO ›
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOwaitingforconfirmationbPage;
