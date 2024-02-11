import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function BotCollection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setData(data), console.log(data));
  }, [data]);

  return (
    <>
      {data.map((bot) => (
        <Card
          maxW="sm"
          key={bot.id}
          borderWidth="1px"
          borderRadius="lg"
          borderColor="blue"
          overflow="hidden"
          width="300px"
          margin="1rem"
        >
          <CardBody>
            <Image src={bot.avatar_url} alt={bot.name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">Bot_Name: {bot.name}</Heading>
              <Text>Bot_class: {bot.bot_class}</Text>
              <Text color="blue.600" fontSize="2xl">
                Bot_Health: {bot.health}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default BotCollection;
