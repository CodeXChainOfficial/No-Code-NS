import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const Frame371687Modal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[22%]"
      overlayClassName="bg-black-900_0c fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-black-900_01 flex flex-col items-start justify-start mb-[686px] mt-[578px] md:px-5 rounded-lg w-auto">
          <div className="bg-light_blue-500 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-[305px]">
            <Text
              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA700"
            >
              USDT
            </Text>
          </div>
          <Text
            className="bg-black-900 capitalize justify-center pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-lg text-base text-white-A700 tracking-[0.80px] w-[305px]"
            size="txtRalewayRomanSemiBold16WhiteA700"
          >
            CDX
          </Text>
          <Text
            className="bg-black-900 capitalize justify-center pl-4 sm:pr-5 pr-[35px] py-[11px] rounded-lg text-base text-white-A700 tracking-[0.80px] w-[305px]"
            size="txtRalewayRomanSemiBold16WhiteA700"
          >
            ETH
          </Text>
          <Button
            className="common-pointer bg-black-900 capitalize cursor-pointer font-semibold py-[11px] rounded-lg text-base text-center text-white-A700 tracking-[0.80px] w-[305px]"
            onClick={() => navigate("/nameservicedefinefunctionality")}
          >
            master Card
          </Button>
          <div className="bg-black-900 flex flex-col items-start justify-start px-4 py-2 rounded-lg w-[305px]">
            <Text
              className="capitalize italic text-base text-white-A700 tracking-[0.80px] w-auto"
              size="txtRalewayItalicSemiBold16"
            >
              Explore More....
            </Text>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default Frame371687Modal;
