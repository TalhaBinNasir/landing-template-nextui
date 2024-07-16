import { Card, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import Image from "next/image";

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: "$6",
          pb: "$14",
        }}
      >
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          css={{
            pt: "$20",
          }}
        >
          <Text h3>Our Services</Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              color: "$accents8",
              textAlign: "center",
            }}
          >
            At Truck Talk Logistics, we provide comprehensive logistics
            solutions tailored to meet your transportation needs. Our range of
            services ensures efficient and reliable delivery of your goods,
            every step of the way.
          </Text>
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          wrap={"wrap"}
          css={{
            gap: "1rem",
            pt: "$14",
          }}
        >
          <Card css={{ mw: "500px", minHeight: "600px" }}>
            <Card.Body>
              <Image
                src="/dry-van.jpg"
                alt="dry-van"
                layout="responsive"
                width={400}
                height={200}
                className="rounded-t-lg"
              />
              <Flex
                css={{
                  gap: "0.5rem",
                  padding: "$10",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex direction={"column"}>
                  <Text h3>Dry Van</Text>
                  <Text span>
                    Our dry van services ensure the safe and secure
                    transportation of non-perishable goods. With a fleet of
                    modern, fully-enclosed trailers, we protect your cargo from
                    weather and road conditions, providing reliable and
                    efficient delivery for a variety of industries.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px", minHeight: "600px" }}>
            <Card.Body>
              <Image
                src="/box-truck.jpg"
                alt="boxtruck"
                layout="responsive"
                width={400}
                height={200}
                className="rounded-t-lg"
              />
              <Flex
                css={{
                  gap: "0.5rem",
                  padding: "$10",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex direction={"column"}>
                  <Text h5>Box Truck</Text>
                  <Text span>
                    Ideal for local and regional deliveries, our box truck
                    services offer flexible and efficient transportation
                    solutions. Perfect for smaller loads and expedited
                    shipments, our box trucks ensure quick turnaround times and
                    dependable service.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px", minHeight: "600px" }}>
            <Card.Body>
              <Image
                src="/hotshot.png"
                alt="hotshot"
                layout="responsive"
                width={400}
                height={200}
                className="rounded-t-lg"
              />
              <Flex
                css={{
                  gap: "0.5rem",
                  padding: "$10",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex direction={"column"}>
                  <Text h5>Hot Shot</Text>
                  <Text span>
                    For urgent and time-sensitive deliveries, our hot shot
                    services provide rapid transportation using specialized
                    trucks. Whether it's critical freight or last-minute
                    shipments, we guarantee prompt and reliable service to meet
                    your tight deadlines.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px", minHeight: "600px" }}>
            <Card.Body>
              <Image
                src="/flatbed.webp"
                alt="flatbed"
                layout="responsive"
                width={400}
                height={200}
                className="rounded-t-lg"
              />
              <Flex
                css={{
                  gap: "0.5rem",
                  padding: "$10",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex direction={"column"}>
                  <Text h5>Flat Bed</Text>
                  <Text span>
                    Our flatbed services are designed for the transportation of
                    oversized and heavy loads. With versatile and durable
                    trailers, we can accommodate a wide range of freight,
                    including construction materials, machinery, and large
                    equipment, ensuring secure and timely delivery.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={"center"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "1rem",
            pt: "$8",
          }}
        >
          <Card css={{ mw: "500px", minHeight: "600px" }}>
            <Card.Body>
              <Image
                src="/reefer.jpg"
                alt="Reefer"
                layout="responsive"
                width={400}
                height={200}
                className="rounded-t-lg"
              />
              <Flex
                css={{
                  gap: "0.5rem",
                  padding: "$10",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex direction={"column"}>
                  <Text h5>Reefer</Text>
                  <Text span>
                    We offer top-notch refrigerated (reefer) services for the
                    transportation of perishable goods. Our
                    temperature-controlled trailers maintain the integrity of
                    your products, making us the ideal choice for food,
                    pharmaceuticals, and other temperature-sensitive cargo.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
          <Card css={{ mw: "500px", minHeight: "600px" }}>
            <Card.Body>
              <Image
                src="/power-only.webp"
                alt="poweronly"
                layout="responsive"
                width={400}
                height={200}
                className="rounded-t-lg"
              />
              <Flex
                css={{
                  gap: "0.5rem",
                  padding: "$10",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Flex direction={"column"}>
                  <Text h5>Power Only</Text>
                  <Text span>
                    Our power only services provide experienced drivers and
                    reliable tractors to haul your trailers. Whether you need to
                    move loaded or empty trailers, our power only solutions
                    offer flexibility and efficiency, ensuring your freight
                    reaches its destination on time.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
