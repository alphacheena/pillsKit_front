import React, { useState } from "react";
import "./AddMedicine.css";
import { CreateMedicine } from "../../api/CreateMedicineAPI";
import { Input, Button } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

export default function AddMedicine(props) {
  const [searchParams, _] = useSearchParams();
  const kitId = searchParams.get("id");
  const [formData, setFormData] = useState({
    kit_id: kitId,
    name: "",
    expire_date: "",
    count: "",
  });

  const submitHandler = async (formData) => {
    try {
      await CreateMedicine(formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return props.trigger ? (
    <>
      <div className="modal">
        <div onClick={() => props.setTrigger(false)} className="overlay"></div>
        <div className="modal-content">
          <h2>Enter Medicine Data</h2>
          <Input
            onChange={(event) => {
              setFormData({ ...formData, name: event.target.value });
            }}
            value={formData.location}
            variant="filled"
            placeholder="Name"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={(event) => {
              setFormData({ ...formData, expire_date: event.target.value });
            }}
            value={formData.location}
            variant="filled"
            placeholder="Expire (YYYY-MM-DD)"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={(event) => {
              setFormData({ ...formData, count: event.target.value });
            }}
            value={formData.location}
            variant="filled"
            placeholder="Left"
            radius="lg"
            size="xl"
          />
          <Button
            onClick={() => {
              submitHandler(formData);
              props.setTrigger(false);
            }}
            radius="lg"
            size="lg"
            uppercase
            style={{ display: "block", margin: "10px auto 0" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
