import React from "react";

import { Button, Img, List, Text } from "components";

type NameServiceDefineFunctionalityProcesdaoProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "settingsimage"
  | "checkmarkimage"
  | "blockchainselect"
  | "projectdescription"
  | "functionalitydefinition"
  | "approvalbutton"
> &
  Partial<{
    settingsimage: string;
    checkmarkimage: string;
    blockchainselect: string;
    projectdescription: string;
    functionalitydefinition: string;
    approvalbutton: string;
  }>;

const NameServiceDefineFunctionalityProcesdao: React.FC<
  NameServiceDefineFunctionalityProcesdaoProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-16 items-end justify-start p-[18px] w-[70%] md:w-full"
          style={{ backgroundImage: "url('images/img_group4.svg')" }}
        >
          <div className="flex flex-row items-start justify-between mr-0.5 w-[36%] md:w-full">
            <Img
              className="h-[25px]"
              alt="settings"
              src="props?.settingsimage"
            />
            <Img
              className="h-6 mt-[3px] w-6"
              alt="checkmark"
              src="props?.checkmarkimage"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Button className="bg-black-900 capitalize cursor-pointer font-raleway font-semibold py-[35px] rounded-lg text-center text-white-A700_e5 text-xl tracking-[1.00px] w-[200px]">
              {props?.blockchainselect}
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-20 grid sm:grid-cols-1 grid-cols-2 w-[47%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-center text-white-A700_e5 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20WhiteA700e5"
                  >
                    {props?.projectdescription}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="bg-black-900 flex flex-col items-center justify-start px-4 py-8 rounded-lg w-[200px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="capitalize leading-[160.00%] max-w-[168px] md:max-w-full text-center text-white-A700_e5 text-xl tracking-[1.00px]"
                    size="txtRalewayRomanSemiBold20WhiteA700e5"
                  >
                    {props?.functionalitydefinition}
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-center justify-start w-auto">
            <Button className="bg-black-900 capitalize cursor-pointer font-raleway font-semibold py-[34px] rounded-lg text-center text-white-A700_e5 text-xl tracking-[1.00px] w-[200px]">
              {props?.approvalbutton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

NameServiceDefineFunctionalityProcesdao.defaultProps = {
  blockchainselect: "Select blockchain",
  projectdescription: "Describe your Project",
  functionalitydefinition: "Define Functionality",
  approvalbutton: "Approval",
};

export default NameServiceDefineFunctionalityProcesdao;
