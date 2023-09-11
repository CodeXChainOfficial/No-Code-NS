import React from "react";

import { Img, Text } from "components";

type NameServiceDefineFunctionalityRadiobuttonProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "tokenholderstext" | "contrastimage" | "toactasvotingtext"
> &
  Partial<{
    tokenholderstext: string;
    contrastimage: string;
    toactasvotingtext: string;
  }>;

const NameServiceDefineFunctionalityRadiobutton: React.FC<
  NameServiceDefineFunctionalityRadiobuttonProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-between w-full">
          {!!props?.tokenholderstext ? (
            <Text
              className="capitalize text-base text-white-A700 tracking-[0.80px] w-auto"
              size="txtRalewayRomanSemiBold16WhiteA700"
            >
              {props?.tokenholderstext}
            </Text>
          ) : null}
          {!!props?.contrastimage ? (
            <Img
              className="h-4 w-4"
              alt="contrast"
              src="props?.contrastimage"
            />
          ) : null}
        </div>
        <Text
          className="leading-[160.00%] max-w-[207px] md:max-w-full text-base text-white-A700_e5 tracking-[0.80px]"
          size="txtRalewayRomanRegular16"
        >
          {props?.toactasvotingtext}
        </Text>
      </div>
    </>
  );
};

NameServiceDefineFunctionalityRadiobutton.defaultProps = {
  toactasvotingtext: "Swap names, fostering a lively market.",
};

export default NameServiceDefineFunctionalityRadiobutton;
