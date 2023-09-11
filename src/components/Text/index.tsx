import React from "react";

const sizeClasses = {
  txtRalewayRomanSemiBold48: "font-raleway font-semibold",
  txtRalewayRomanMedium16: "font-medium font-raleway",
  txtRalewayRomanMedium16WhiteA70099: "font-medium font-raleway",
  txtRalewayRomanSemiBold16WhiteA700: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16WhiteA70099: "font-raleway font-semibold",
  txtRalewayRomanSemiBold14: "font-raleway font-semibold",
  txtRalewayRomanSemiBold20WhiteA700e5: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16: "font-raleway font-semibold",
  txtRalewayRomanSemiBold32: "font-raleway font-semibold",
  txtRalewayRomanSemiBold24: "font-raleway font-semibold",
  txtRalewayRomanRegular16: "font-normal font-raleway",
  txtRalewayRomanSemiBold12: "font-raleway font-semibold",
  txtRalewayRomanSemiBold40: "font-raleway font-semibold",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtRalewayItalicSemiBold16: "font-raleway font-semibold italic",
  txtInterSemiBold16: "font-inter font-semibold",
  txtRalewayRomanSemiBold16Black900: "font-raleway font-semibold",
  txtRalewayRomanSemiBold16WhiteA7004c: "font-raleway font-semibold",
  txtRalewayRomanSemiBold12WhiteA70099: "font-raleway font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtRalewayRomanMedium16Lightblue500: "font-medium font-raleway",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
