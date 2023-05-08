import React, { useState } from "react";
import "./EditProfile.css";
import { Input, Button } from "@mantine/core";
import { EditProfileAPI } from "../../api/EditProfileAPI";

export default function EditProfile(props) {
  const [formData, setFormData] = useState({
    user_id: props.userData.id,
    username: props.userData.username,
    first_name: props.userData.first_name,
    last_name: props.userData.last_name,
    email: props.userData.email,
  });

  const submitHandler = async (formData) => {
    try {
      await EditProfileAPI(formData);
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
          <h2>Enter New User Data</h2>
          <Input
            onChange={(event) => {
              setFormData({ ...formData, username: event.target.value });
            }}
            value={formData.username}
            variant="filled"
            placeholder="Username"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={(event) => {
              setFormData({ ...formData, first_name: event.target.value });
            }}
            value={formData.first_name}
            variant="filled"
            placeholder="First Name"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={(event) => {
              setFormData({ ...formData, last_name: event.target.value });
            }}
            value={formData.last_name}
            variant="filled"
            placeholder="Last Name"
            radius="lg"
            size="xl"
          />
          <Input
            onChange={(event) => {
              setFormData({ ...formData, email: event.target.value });
            }}
            value={formData.email}
            variant="filled"
            placeholder="Email"
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
