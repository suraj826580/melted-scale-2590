import { Spinner, Center } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProductPageCardMaker from "./SingleProductPageCardMaker";

export default function SingleProductPAge() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({});
  const { id } = useParams();
  const pro = () => {
    setloading(true);
    axios
      .get(`https://63c71d3cd307b76967472ac6.mockapi.io/products/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    pro();
  }, []);
  if (loading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <div>
      <SingleProductPageCardMaker {...data} />
    </div>
  );
}
