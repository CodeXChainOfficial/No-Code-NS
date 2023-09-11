import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import DAOHOMEGENERATORProcesdao from "components/DAOHOMEGENERATORProcesdao";

const DAOHOMEGENERATORPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-[37px] justify-end mx-auto py-[114px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] mr-[1016px] mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[2.40px]"
          size="txtRalewayRomanSemiBold48"
        >
          Name Service
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-start w-full">
            <DAOHOMEGENERATORProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
            <div className="flex flex-col gap-4 items-center justify-start max-w-[1256px] mt-24 mx-auto md:px-5 py-2 w-full">
              <Text
                className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[1.60px] w-auto"
                size="txtRalewayRomanSemiBold32"
              >
                select blockchain
              </Text>
              <div className="flex flex-col items-start justify-start max-w-[1256px] py-2 w-full">
                <Text
                  className="leading-[160.00%] max-w-[1256px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
                  size="txtRalewayRomanRegular16"
                >
                  <span className="text-white-A700_e5 font-raleway text-left font-normal">
                    The chain you choose is where your tokens and assets are
                    stored. If you already have a token, choose the chain your
                    token is minted on. This cannot be changed later. For help
                    selecting your chain, read our guide on choosing the
                  </span>
                  <span className="text-light_blue-500 font-raleway text-left font-normal">
                    {" "}
                    best blockchain for your Name Service.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1094px] md:ml-[0] ml-[68px] mt-[34px] md:px-5 w-full">
              <Text
                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanSemiBold16"
              >
                deploy option
              </Text>
              <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
                <Input
                  name="language"
                  placeholder=" single-chain"
                  className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                  wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 pb-[17px] pl-[35px] pr-8 pt-[21px] rounded-lg w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-[3px] h-4 ml-[35px]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  }
                ></Input>
                <Input
                  name="radiobuttonOne"
                  placeholder="multi-chain"
                  className="capitalize font-semibold p-0 placeholder:text-white-A700 sm:px-5 text-base text-left text-white-A700 tracking-[0.80px] w-full"
                  wrapClassName="bg-black-900_01 border border-solid border-white-A700_33 flex flex-1 px-8 py-[19px] rounded-lg w-full"
                  suffix={
                    <Img
                      className="h-4 ml-[35px] my-px"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-[1094px] md:ml-[0] ml-[68px] mt-10 md:px-5 w-full">
              <Text
                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanSemiBold16"
              >
                chain selection
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col items-start justify-start max-w-[1428px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1428px] md:px-10 px-20 sm:px-5 py-2 w-full">
                    <div className="flex flex-row gap-8 items-center justify-start py-2 w-full">
                      <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[98px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        Mainnet
                      </Button>
                      <Button
                        className="common-pointer bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                        onClick={() => navigate("/daoselecttesnet")}
                      >
                        tesnet
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-16 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1428px] mt-8 mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div
                  className="common-pointer bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full"
                  onClick={() => navigate("/nameservice")}
                >
                  <div className="bg-white-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <Button className="bg-black-900_01 flex h-12 items-center justify-center p-1.5 rounded-[50%] w-12">
                      <Img
                        className="h-[33px]"
                        src="images/img_frame370829.png"
                        alt="frame370829"
                      />
                    </Button>
                  </div>
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    codex mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062.png"
                    alt="frame371062"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    tron mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_48x48.png"
                    alt="frame371062_One"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    etherium mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_1.png"
                    alt="frame371062_Two"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    polygon mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_2.png"
                    alt="frame371062_Three"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    arbritrum nova
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_3.png"
                    alt="frame371062_Four"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    fantom opera mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_4.png"
                    alt="frame371062_Five"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    kava
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_5.png"
                    alt="frame371062_Six"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    moonbeam mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_6.png"
                    alt="frame371062_Seven"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    moonriver{" "}
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_7.png"
                    alt="frame371062_Eight"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    optimism
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-[54px]"
                    src="images/img_image406.png"
                    alt="image406"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Arthera
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_8.png"
                    alt="frame371062"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    arbritrum mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_9.png"
                    alt="frame371062_One"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    avalanche mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_10.png"
                    alt="frame371062_Two"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    BSC Mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_11.png"
                    alt="frame371062_Three"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    cello
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_12.png"
                    alt="frame371062_Four"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    cronos mainnet
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-[41px] md:h-auto object-cover w-[42px]"
                    src="images/img_image402.png"
                    alt="image402"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Polkadot
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-[60px] md:h-auto object-cover w-[54px]"
                    src="images/img_image403.png"
                    alt="image403"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Kusama
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_frame371062_13.png"
                    alt="frame371062_Five"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    harmony
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-[46px] md:h-auto object-cover w-[50px]"
                    src="images/img_image404.png"
                    alt="image404"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Chainlink
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-12"
                    src="images/img_image405.png"
                    alt="image405"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Osmosis
                  </Text>
                </div>
                <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                  <Img
                    className="h-[54px] md:h-auto object-cover w-[58px]"
                    src="images/img_image407.png"
                    alt="image407"
                  />
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    Cosmos
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[1182px] mt-[100px] md:px-5 w-auto">
              <Button
                className="common-pointer bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]"
                onClick={() => navigate("/nameservice")}
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

export default DAOHOMEGENERATORPage;
