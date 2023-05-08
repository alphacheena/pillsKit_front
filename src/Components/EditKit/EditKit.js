import React, { useState } from "react";
import "./EditKit.css";
import { Input, Button } from "@mantine/core";
import { EditKitAPI } from "../../api/EditKitAPI";

export default function EditKit(props) {
  const [formData, setFormData] = useState({
    location: "",
    kit_id: "",
  });

  const submitHandler = async (formData) => {
    try {
      await EditKitAPI(formData);
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
          <h2>Enter New Kit Location</h2>
          <Input
            onChange={(event) => {
              setFormData({
                location: event.target.value,
                kit_id: props.kit_id,
              });
            }}
            value={formData.location}
            variant="filled"
            placeholder="New Location"
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
