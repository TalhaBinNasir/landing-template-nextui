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
        flexDirection: "column",
        "@md": {
          flexDirection: "row",
        },
      }}
    >
      <Box
        as={"footer"}
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@md": {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }}
      >
        <Image
          src={"/Trucktalk (1) (1)-01.jpg"}
          alt="logo"
          width={400}
          height={250}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        {/* <ModalLogin /> */}
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            "@md": {
              flexDirection: 'row',
            },
            py: "$10",
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              "@md": {
                padding: '50px',
              },
            }}
          >
            <h3 style={{ color: 'rgb(61, 70, 83)' }}>Phone</h3>
            <h4 style={{ color: 'grey' }}>+1(315)2808191</h4>
          </Box>
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <h3 style={{ color: 'rgb(61, 70, 83)' }}>Email</h3>
            <h4 style={{ color: 'grey' }}>anthonyjames@trucktalklogistics.com</h4>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
