/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Page2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,183.5999920964241,0,1)"
      overflow="hidden"
      position="relative"
      height="900px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(0,0,0,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Roboto"
        top="422px"
        left="624px"
        fontSize="48px"
        lineHeight="56.25px"
        position="absolute"
        fontWeight="400"
        direction="column"
        children="ページ２"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
