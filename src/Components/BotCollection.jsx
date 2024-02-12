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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const cards = data.map((bot) => (
    <Card
      maxW="sm"
      key={bot.id}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="blue"
      overflow="hidden"
      width="300px"
      margin="1rem"
      alignItems="center"
      justifyContent="center"
      background="#eaf6ff"
    >
      <CardBody>
        <Heading size="md">Name: {bot.name}</Heading>
        <Text color="black">ID: {bot.id}</Text>
        <Image src={bot.avatar_url} alt={bot.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Text color="black">Class: {bot.bot_class}</Text>
          <Text color="green">Health: {bot.health}</Text>
          <Text color="red">Damage: {bot.damage}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="red"
            w="200px"
            alignItems="center"
            justifyContent="center"
          >
            X
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ));

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <div>{cards}</div>
    </div>
  );
}

export default BotCollection;
