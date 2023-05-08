import React, { useEffect, useState } from "react";
import { fetchMedicines } from "../../api/medicinesAPI";
import { useSearchParams } from "react-router-dom";
import {
  Badge,
  Card,
  Text,
  Image,
  Button,
  Grid,
  Flex,
  getBreakpointValue,
} from "@mantine/core";
import styles from "./Kit.module.css";
import AddMedicine from "../AddMedicine/AddMedicine";
import EditMedicine from "../EditMedicine/EditMedicine";
import { DeleteMedicine } from "../../api/DeleteMedicineAPI";

export default function Kit() {
  const [searchParams, _] = useSearchParams();
  const kitId = searchParams.get("id");
  const [medicines, setMedicines] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [editButtonPopup, setEditButtonPopup] = useState(false);
  const [medicineId, setMedicineId] = useState("");

  useEffect(() => {
    fetchMedicines(kitId).then((medicines) => {
      const currentDate = new Date();

      setMedicines(medicines);
    });
  }, []);

  const handleDelete = async (medicine_id) => {
    try {
      await DeleteMedicine(medicine_id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid>
        {medicines.map((medicine) => (
          <Grid.Col key={medicine.id} span={4}>
            <Card
              shadow="sm"
              padding="xl"
              key={medicine.id}
              className={styles.card}
            >
              <Card.Section>
                <div className={styles["centered-image"]}>
                  <Image
                    src="https://www.svgrepo.com/show/41104/pill.svg"
                    height={200}
                    width={200}
                    alt="No way!"
                  />
                </div>
              </Card.Section>
              <Flex justify="center" align="center" direction="column" gap="xs">
                <Flex justify="center" align="center" direction="row" gap="lg">
                  <Text weight={500} size="lg" mt="md" >
                    {medicine.name}
                  </Text>

                  {new Date(medicine.expire_date) < new Date() && (
                    <Badge color="red" size="lg" radius="xs" >
                      Expired
                    </Badge>
                  )}
                </Flex>

                <Text weight={500} size="lg" mt="md">
                  Expire Date: {medicine.expire_date}
                </Text>
                <Text weight={500} size="lg" mt="md">
                  Left: {medicine.count}
                </Text>
                <Flex justify="center" align="center" direction="row" gap="md">
                  <Button
                    color="yellow"
                    onClick={() => {
                      setMedicineId(medicine.id);
                      setEditButtonPopup(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(medicine.id);
                    }}
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
                onClick={() => setButtonPopup(true)}
                variant="outline"
                size="xl"
                className={styles.button}
              >
                Add Medicine
              </Button>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>

      <AddMedicine
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      ></AddMedicine>
      <EditMedicine
        medicine_id={medicineId}
        trigger={editButtonPopup}
        setTrigger={setEditButtonPopup}
      ></EditMedicine>
    </>
  );
}
