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
  const [botArmy, setBotArmy] = useState([]);
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

  function handleClick(id) {
    setBotArmy([...botArmy, data.filter((army) => army.id == id)]);
    console.log(botArmy);
  }

  function handleDelete(id) {
    console.log("Deleted");
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    });
  }

  const cards = data.map((bot) => (
    <Card
      onClick={() => handleClick(bot.id)}
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
    </div>
  );
}

export default BotCollection;
