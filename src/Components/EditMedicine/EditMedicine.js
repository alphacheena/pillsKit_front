import React, { useState } from "react";
import "./EditMedicine.css";
import { Input, Button } from "@mantine/core";
import { EditMedicineAPI } from "../../api/EditMedicineAPI";

export default function EditMedicine(props) {
  const [formData, setFormData] = useState({
    name: undefined,
    expire_date: undefined,
    count: undefined,
    medicine_id: undefined,
  });

  const submitHandler = async (formData) => {
    try {
      console.log(formData);
      await EditMedicineAPI(formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      medicine_id: props.medicine_id,
    }));
  };

  return props.trigger ? (
    <>
      <div className="modal">
        <div onClick={() => props.setTrigger(false)} className="overlay"></div>
        <div className="modal-content">
          <h2>Enter New Medicine Data</h2>
          <Input
            onChange={handleInputChange}
            name="name"
            value={formData.name || ""}
            variant="filled"
            placeholder="Name"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={handleInputChange}
            name="expire_date"
            value={formData.expire_date || ""}
            variant="filled"
            placeholder="Expire Date"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={handleInputChange}
            name="count"
            value={formData.count || ""}
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
