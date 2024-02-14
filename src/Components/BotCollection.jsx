import React from "react";
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
import useFetch from "./useFetch";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const { data, loading, error, addToArmy } = useFetch(
    "http://localhost:8001/bots"
  );

  function handleDelete(id) {
    console.log("Deleted");
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    });
  }

  const cards = data.map((bot) => (
    <Card
      onClick={() => {
        addToArmy(bot);
      }}
      maxW="sm"
      key={bot.id}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="blue"
      overflow="hidden"
      width="250px"
      margin="1rem"
      alignItems="center"
      justifyContent="center"
      background="#eaf6ff"
    >
      <CardBody>
        <Heading size="md">Name: {bot.name}</Heading>
        <Text color="black">ID: {bot.id}</Text>
        <Image src={bot.avatar_url} alt={bot.name} borderRadius="lg" />
        <Stack mt="6" spacing="0">
          <Text color="black">Class: {bot.bot_class}</Text>
          <Text color="green">Health: {bot.health}</Text>
          <Text color="red">Damage: {bot.damage}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            onClick={() => handleDelete(bot.id)}
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
      <h1 className="title">Bot Collection</h1>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <h3>Click on a Bot to add it to Your Bot Army</h3>
      <div className="cards">{cards}</div>
      <YourBotArmy />
    </div>
  );
}

export default BotCollection;