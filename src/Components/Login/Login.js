import React, { useEffect, useState } from "react";
import { loginUser } from "./../../api/authAPI";
import { Link, useNavigate } from "react-router-dom";
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

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const creds = await loginUser({ username, password });
    if (!creds) {
      alert("Invalid username or password");
    } else {
      setCredentials(creds);
      localStorage.setItem("jwt", JSON.stringify(creds));
      navigate("/");
    }
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
          onChange={(event) => setUsername(event.currentTarget.value)}
          value={username}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="sm"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
        />
        <Button fullWidth mt="md" onClick={handleSubmit}>
          Sign in
        </Button>

        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component={Link} to="/signup">
            Create account
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
