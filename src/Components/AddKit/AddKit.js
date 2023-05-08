import React, { useState } from "react";
import "./AddKit.css";
import { Input, Button } from "@mantine/core";
import { CreateKit } from "../../api/CreateKitAPI";

export default function AddKit(props) {
  const [formData, setFormData] = useState({ location: "" });

  const submitHandler = async (formData) => {
    try {
      await CreateKit(formData);
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
          <h2>Enter Kit Location</h2>
          <Input
            onChange={(event) => {
              setFormData({ ...formData, location: event.target.value });
            }}
            value={formData.location}
            variant="filled"
            placeholder="Location"
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
