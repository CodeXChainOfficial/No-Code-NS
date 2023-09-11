import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import DAOHOMEGENERATORProcesdao from "components/DAOHOMEGENERATORProcesdao";

const DAOselecttesnetPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway gap-9 justify-start mx-auto py-[116px] w-full">
        <Text
          className="capitalize ml-20 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px]"
          size="txtRalewayRomanSemiBold40"
        >
          Name Service
        </Text>
        <div className="flex flex-col items-center mb-[34px] w-full">
          <div className="flex flex-col justify-start w-full">
            <DAOHOMEGENERATORProcesdao className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] pt-8 md:px-10 px-20 sm:px-5 w-full" />
            <div className="flex flex-col gap-4 items-center justify-start max-w-[1256px] mt-[107px] mx-auto md:px-5 py-2 w-full">
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
                    best blockchain for your Project.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1094px] md:ml-[0] ml-[83px] mt-14 md:px-5 w-full">
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
            <div className="flex flex-col items-start justify-start max-w-[1094px] md:ml-[0] ml-[83px] mt-10 md:px-5 w-full">
              <Text
                className="capitalize text-base text-white-A700_e5 tracking-[0.80px] w-auto"
                size="txtRalewayRomanSemiBold16"
              >
                chain selection
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col items-start justify-start mt-4 w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-black-900 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-2 w-full">
                    <div className="flex flex-row flex-wrap gap-8 items-center justify-start max-w-7xl mx-auto py-2 w-full">
                      <Button
                        className="common-pointer bg-black-900_01 capitalize cursor-pointer font-semibold min-w-[98px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]"
                        onClick={() => navigate("/daohomegenerator")}
                      >
                        Mainnet
                      </Button>
                      <Button className="bg-light_blue-500 capitalize cursor-pointer font-semibold min-w-[87px] py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px]">
                        tesnet
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-900 flex flex-col items-start justify-start max-w-[1440px] mt-8 md:px-10 px-20 sm:px-5 rounded-lg shadow-bs w-full">
              <div className="flex flex-col gap-8 items-start justify-start max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                    size="txtRalewayRomanSemiBold20"
                  >
                    tesnet
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
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
                        codex testnet
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
                        tron testnet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_10.png"
                        alt="frame371062_One"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        BSC testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_3.png"
                        alt="frame371062_Two"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        fantom opera testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_5.png"
                        alt="frame371062_Three"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        moonbeam testNet
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_9.png"
                        alt="frame371062"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        avalanche testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_12.png"
                        alt="frame371062_One"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        cronos testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_48x48.png"
                        alt="frame371062_Two"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        etherium testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-row gap-2 items-center justify-start p-2 rounded-lg w-full">
                      <Img
                        className="h-12 md:h-auto object-cover w-12"
                        src="images/img_frame371062_1.png"
                        alt="frame371062_Three"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                        size="txtRalewayRomanSemiBold20"
                      >
                        mumbay testNet
                      </Text>
                    </div>
                    <div className="bg-black-900_01 flex flex-col items-center justify-start p-2 rounded-lg w-full">
                      <div className="bg-black-900_01 flex flex-row gap-2 h-[57px] md:h-auto items-center justify-start p-2 rounded-lg w-[616px] md:w-full">
                        <Img
                          className="h-[41px] md:h-auto object-cover w-[42px]"
                          src="images/img_image402.png"
                          alt="image402"
                        />
                        <Text
                          className="capitalize text-white-A700 text-xl tracking-[1.00px] w-auto"
                          size="txtRalewayRomanSemiBold20"
                        >
                          Polkadot testNet
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start md:ml-[0] ml-[1166px] mt-[110px] md:px-5 w-auto">
              <Button
                className="common-pointer border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]"
                onClick={() => navigate("/daohomegenerator")}
              >
                back
              </Button>
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

export default DAOselecttesnetPage;
