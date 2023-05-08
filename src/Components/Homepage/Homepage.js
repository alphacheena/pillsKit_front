import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { fetchUser } from "../../api/accountsAPI";
import { fetchKits } from "../../api/kitsAPI";
import {
  Card,
  Text,
  Image,
  Button,
  Grid,
  Flex,
  ActionIcon,
} from "@mantine/core";
import styles from "./Homepage.module.css";
import AddKit from "../AddKit/AddKit";
import { DeleteKit } from "../../api/DeleteKitAPI";
import EditKit from "../EditKit/EditKit";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [addButtonPopup, setAddButtonPopup] = useState(false);
  const [editButtonPopup, setEditButtonPopup] = useState(false);
  const [kitId, setKitId] = useState("");

  useEffect(() => {
    fetchKits().then((kits) => {
      setData(kits);
    });
  }, []);

  const handleDelete = async (kit_id) => {
    try {
      await DeleteKit(kit_id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const backgroundImage = "https://example.com/button-background.jpg";

  return (
    <>
      <Grid>
        {data.map((kit) => (
          <Grid.Col key={kit.id} span={4}>
            <Card shadow="sm" padding="xl" key={kit.id} className={styles.card}>
              <Card.Section>
                <Image
                  src="https://media.istockphoto.com/id/877759952/vector/first-aid-symbol-vector.jpg?s=612x612&w=0&k=20&c=B6AR8gGjncqSO-4HyPko4ryPa4J6GubO9hbwxZEe4M8="
                  height={380}
                  alt="No way!"
                />
              </Card.Section>
              <Flex justify="center" align="center" direction="column">
                <Text weight={500} size="lg" mt="md" mb="sm">
                  {kit.location}
                </Text>
                <Flex justify="center" align="center" direction="row" gap="md">
                  <Link to={`/kit?id=${kit.id}`}>
                    <Button variant="light" color="blue">
                      Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setKitId(kit.id);
                      setEditButtonPopup(true);
                    }}
                    variant="light"
                    color="green"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(kit.id);
                    }}
                    variant="light"
                    color="red"
                  >
                    Delete
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Grid.Col>
        ))}
        <Grid.Col span={4}>
          <Card shadow="sm" padding="xl" className={styles.card}>
            <Card.Section>
              <Button
                onClick={() => setAddButtonPopup(true)}
                variant="outline"
                size="xl"
                className={styles.button}
              >
                Add Kit
              </Button>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>

      <AddKit trigger={addButtonPopup} setTrigger={setAddButtonPopup}></AddKit>
      <EditKit
        kit_id={kitId}
        trigger={editButtonPopup}
        setTrigger={setEditButtonPopup}
      ></EditKit>
    </>
  );
}
