import { Button, Divider, Input, Text } from "@nextui-org/react";
import React from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Hero = () => {
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
          border: "1px solid",
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
            filter: "blur(4px)",
          }}
        />
        <Box
          css={{
            pt: "$13",
            display: "flex",
            flexDirection: "column",
            gap: "$5",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              Truck Talk Logistics
            </Text>
          </Box>
          <Text
            css={{
              color: "$accents3",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            Your Freight, Our Priority.
          </Text>
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0", left: "0", mt: "$10" }}
      />
    </>
  );
};
