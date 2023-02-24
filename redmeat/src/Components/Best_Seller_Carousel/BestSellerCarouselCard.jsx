import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";

import { FiShoppingCart } from "react-icons/fi";

function BestSellerCarouselCard(props) {
  return (
    <Flex p={3} w="full" alignItems="center" justifyContent="center">
      <Box
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          overflow: "hidden",
        }}>
        <Image
          src={props.images}
          alt={`Picture of ${props.name}`}
          roundedTop="lg"
          transition="all .3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
          }}
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="1xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color={"gray.700"}
              isTruncated>
              {props.title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"red.600"}
              borderRadius={10}
              fontSize={"1.0em"}>
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex mt={2} mb={2}>
            <Box>{props.description}</Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Box>
              {props.price}
            </Box>
            <Button
              color="#fff"
              _hover={{
                bg: "#D11243",
              }}
              bg={"#D11243"}>
              Join Now
            </Button>
          </Flex>
          <Divider p={2} />
          <Box mt={2}>
            <Center> Delivery in 90 minutes</Center>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default BestSellerCarouselCard;