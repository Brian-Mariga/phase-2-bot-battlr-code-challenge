import React from "react";
import {
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

function YourBotArmy() {
  const { army, removeFromArmy } = useFetch("http://localhost:8001/bots");

  const armyCards = army.map((bot) => (
    <Card
      onClick={() => removeFromArmy(bot.id)}
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
        <Text>Click on the card to remove it from your army</Text>
      </CardFooter>
    </Card>
  ));

  return (
    <>
      <h1 className="title">Your Bot Army</h1>
      <h3>Click on a Bot to remove it from Your Bot Army</h3>
      <div>{armyCards}</div>
    </>
  );
}

export default YourBotArmy;
