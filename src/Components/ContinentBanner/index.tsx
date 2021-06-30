import { Flex, Heading } from "@chakra-ui/react";
import { Continent } from "../../pages/continent/[slug]";

type ContinentBanner = {
  name: string;
  image: string;
};

export function ContinentBanner({ name, image }: ContinentBanner) {
  console.log(name);
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage={`url(/banners/${image})`}
      bgPosition={name === "América do Norte" ? "100% 50%" : "100% 70%"}
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        {name}
      </Heading>
    </Flex>
  );
}