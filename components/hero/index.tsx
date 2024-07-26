import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Image from "next/image";

interface props {
  title?:string
}

export const Hero = ({title = 'Your Freight, Our Priority.'}:props) => {
  return (
    <>
      <Flex
        css={{
          position: "relative",
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          width: "100%",
          minHeight: "500px",
          "@sm": {
            flexDirection: "column",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("sunset-img-truck.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
          }}
        />
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            {/* <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Truck Talk Logistics
            </Text> */}
            <Image
              src={"/Trucktalk (1) (1)-01.png"}
              alt="logo"
              width={800}
              height={400}
              layout="responsive"
            />
          </Box>
          <Text
            css={{
              color: "$accents5",
              maxWidth: "400px",
            }}
            size={"$2xl"}
            span
          >
            {title}
          </Text>
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0", left: "0", mt: "$10" }}
      />
    </>
  );
};
