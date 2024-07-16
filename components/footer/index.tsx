import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Image from "next/image";
import { ModalLogin } from "../modal";

export const Footer = () => {
  return (
    <Flex
      css={{
        py: "$20",
        px: "$6",
      }}
    >
      <Box
        as={"footer"}
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src={"/Trucktalk (1) (1)-01.jpg"}
          alt="logo"
          width={400}
          height={250}
        />
        <ModalLogin />
      </Box>
    </Flex>
  );
};
