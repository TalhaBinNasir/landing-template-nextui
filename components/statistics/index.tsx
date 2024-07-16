import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { GlobeIcon } from "./globeicon";
import { ResponseIcon } from "./response";
import { TrustIcon } from "./trusticon";
import { SolutionIcon } from "./solutions";
import { PeaceIcon } from "./peace";
import { CostIcon } from "./costicon";

export const Statistics = () => {
  return (
    <>
      <Box
        css={{
          pt: "$20",
          pb: "$16",
          px: "$6",
        }}
      >
        <Flex direction={"column"} align={"center"}>
          <Text
            h3
            css={{
              textAlign: "center",
            }}
          >
            Why Choose Us?
          </Text>
        </Flex>
        <Flex
          direction={"row"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "4rem",
            pt: "$16",
            "@sm": {
              gap: "10rem",
            },
          }}
        >
          <Flex direction={"column"}>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GlobeIcon />
              <Text h3 css={{ color: "$blue600", pl: "6px" }}>
                Expertise
              </Text>
            </Box>
          </Flex>
          <Flex direction={"column"}>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CostIcon />
              <Text h3 css={{ color: "$blue600", pl: "6px" }}>
                Cost Savings
              </Text>
            </Box>
          </Flex>
          <Flex direction={"column"}>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ResponseIcon />
              <Text h3 css={{ color: "$blue600", pl: "6px" }}>
                Fast Response
              </Text>
            </Box>
          </Flex>
          <Flex direction={"column"}>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PeaceIcon />
              <Text h3 css={{ color: "$blue600", pl: "6px" }}>
                Peace of Mind
              </Text>
            </Box>
          </Flex>
          <Flex direction={"column"}>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SolutionIcon />
              <Text h3 css={{ color: "$blue600", pl: "6px" }}>
                Customized Solutions
              </Text>
            </Box>
          </Flex>
          <Flex direction={"column"}>
            <Box
              css={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TrustIcon />
              <Text h3 css={{ color: "$blue600", pl: "6px" }}>
                Reliability
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
