import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/authAPI";

export default function Signup({ setToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await createUser({ username, email, first_name, last_name, password });
    navigate("/login");
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome to PillsKit App!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Username"
          placeholder="username"
          required
          onChange={(e) => setUsername(e.currentTarget.value)}
          value={username}
        />
        <TextInput
          label="Email"
          placeholder="example@email.com"
          required
          mt="sm"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
        />
        <TextInput
          label="First name"
          placeholder="John"
          required
          mt="sm"
          onChange={(e) => setFirstName(e.currentTarget.value)}
          value={first_name}
        />
        <TextInput
          label="Last name"
          placeholder="Stones"
          required
          mt="sm"
          onChange={(e) => setLastName(e.currentTarget.value)}
          value={last_name}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="sm"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <Button fullWidth mt="md" onClick={handleSubmit}>
          Sign up
        </Button>

        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{" "}
          <Anchor size="sm" component={Link} to="/login">
            Sign in
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
