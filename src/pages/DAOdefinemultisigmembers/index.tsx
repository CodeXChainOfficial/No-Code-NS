import React from "react";

import { Button, Img } from "components";

const DAOdefinemultisigmembersPage: React.FC = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-raleway sm:gap-10 md:gap-10 gap-[1145px] justify-start mx-auto p-[97px] md:px-10 sm:px-5 w-full">
        <Img
          className="h-6 md:ml-[0] ml-[1004px] mt-[166px] w-6"
          src="images/img_checkmark.svg"
          alt="checkmark"
        />
        <div className="flex flex-row gap-8 items-start justify-start mb-[349px] md:ml-[0] ml-[1072px] w-auto">
          <Button className="border border-light_blue-500 border-solid capitalize cursor-pointer font-semibold min-w-[72px] py-[11px] rounded text-base text-center text-light_blue-500 tracking-[0.80px]">
            back
          </Button>
          <Button className="bg-gradient  capitalize cursor-pointer font-semibold min-w-[70px] py-[11px] rounded text-base text-center text-white-A700 tracking-[0.80px]">
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default DAOdefinemultisigmembersPage;
