import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const EmailVerification = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let params = [];
  const navigate = useNavigate();

  const handleEmailVerification = async (userId, code) => {
    if (userId === "") {
      return null;
    }

    const urlRootAPI = "https://localhost:7209/api/";
    const API_URL = `${urlRootAPI}Account/ConfirmEmailAsync?userId=${userId}&code=${code}`;

    try {
      const response = await axios.post(API_URL, {}, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.data) {
        localStorage.setItem("isRegistered", response.data);
        navigate("/");
      } else {
        localStorage.clear();
        console.log("La Mail non risulta corretta");
        navigate("/Register");
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  setSearchParams(window.location.search);
  searchParams.forEach((value, key) => {
    params.push([key, value]);
  });

  useEffect(() => {
    if (params.length > 0) {
      const userId = params[0][1];
      const code = params[1][1];
      console.log('userId=' + userId);
      console.log('code=' + code);

      handleEmailVerification(userId, code);

      params = [];
    }
  }, []);

  const username = localStorage.getItem("username");

  return (
    <div>
      <h1>Benvenuto, {username}!</h1>
      <h2>Ti abbiamo inviato una mail per verificare il tuo indirizzo di posta elettronica!</h2>
    </div>
  );
};

export default EmailVerification;
