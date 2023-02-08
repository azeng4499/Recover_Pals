import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth, storage } from "../../Firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "../SharedComponents/Header";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Dropdown from "./Dropdown/Dropdown";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { AiFillCamera } from "react-icons/ai";
import "./SignUp.css";

import {
  SubtitleContainer,
  SubtitleP1,
  Input,
  LongAnswerInput,
  BigContainer,
  SmallContainer,
  SmallContainer2,
  PictureContainer,
  Button,
  ButtonText,
  ErrorContainer,
  ErrorP1,
  ButtonContainer,
} from "../SharedComponents/BodyComponents";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    keyword: "",
    hobbies: "",
    birthday: "",
    story: "",
    type: "recoveree",
    url: "",
    error: null,
    loading: false,
  });

  const navigate = useNavigate();

  const {
    firstName,
    lastName,
    email,
    password,
    keyword,
    hobbies,
    birthday,
    story,
    type,
    url,
    error,
    loading,
  } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !keyword ||
      !hobbies ||
      !story ||
      !birthday ||
      !url ||
      !type
    ) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, data.type, result.user.uid), {
        uid: result.user.uid,
        firstName,
        lastName,
        email,
        password,
        keyword,
        hobbies,
        birthday: new Date(birthday),
        story,
        type,
        url,
        matched: [],
        passed: [result.user.uid],
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        keyword: "",
        hobbies: "",
        birthday: "",
        story: "",
        url: "",
        error: null,
        loading: false,
      });

      if (data.type === "mentor") {
        navigate("/mentor-portal");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  const [recClicked, setRecClicked] = useState(true);
  const [menClicked, setMenClicked] = useState(false);

  const clickedRec = () => {
    if (menClicked) {
      setMenClicked(false);
    }
    setRecClicked(true);
    setData({ ...data, type: "recoveree" });
  };

  const clickedMen = () => {
    if (recClicked) {
      setRecClicked(false);
    }
    setMenClicked(true);
    setData({ ...data, type: "mentor" });
  };
  const [image, setImage] = useState("");

  useEffect(() => {
    if (image) {
      const uploadImage = async () => {
        const imageRef = ref(
          storage,
          `pictures/${new Date().getTime()} - ${image.name}`
        );
        const snap = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
        console.log(snap.ref.fullPath);
        console.log(url);
        setData({ ...data, url: url });
      };
      uploadImage();
    }
  }, [image]);

  return (
    <>
      <Header message="Welcome to the Team!" />
      <SubtitleContainer>
        <SubtitleP1>I am a...</SubtitleP1>
      </SubtitleContainer>
      <ButtonContainer>
        <Button clicked={recClicked} onClick={clickedRec}>
          <ButtonText>Recoveree</ButtonText>
        </Button>
        <Button clicked={menClicked} onClick={clickedMen}>
          <ButtonText>Mentor</ButtonText>
        </Button>
      </ButtonContainer>
      <SubtitleContainer>
        <SubtitleP1>Account</SubtitleP1>
      </SubtitleContainer>
      <PictureContainer>
        <div className="image_container">
          <img
            alt=""
            src={
              data.url
                ? data.url
                : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-3.jpg"
            }
          />
          <div className="overlay">
            <div>
              <label htmlFor="photo">
                <AiFillCamera size="1.5em" />
              </label>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="photo"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
        </div>
      </PictureContainer>
      <SmallContainer>
        <Input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
        />
        <Input
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name"
        />
      </SmallContainer>
      <SmallContainer>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="text"
          name="birthday"
          onChange={handleChange}
          placeholder="Birthday (MM/DD/YYYY)"
        />
      </SmallContainer>
      <SmallContainer2>
        <Input
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <Dropdown
          selectedOption={data.keyword}
          changeOption={(value) => setData({ ...data, keyword: value })}
        />
      </SmallContainer2>
      <SubtitleContainer>
        <SubtitleP1>Matching Questions</SubtitleP1>
      </SubtitleContainer>
      <BigContainer>
        <LongAnswerInput
          type="text"
          name="story"
          onChange={handleChange}
          placeholder="My story of what I went through..."
        />
      </BigContainer>
      <BigContainer>
        <LongAnswerInput
          type="text"
          name="hobbies"
          onChange={handleChange}
          placeholder="In my free time I like to..."
        />
      </BigContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit} disable={loading} largePadding="true">
          <ButtonText>
            <BsFillArrowRightCircleFill />
          </ButtonText>
        </Button>
      </ButtonContainer>
      <ErrorContainer>
        <ErrorP1>{error ? <p>{error}</p> : null}</ErrorP1>
      </ErrorContainer>
    </>
  );
};

export default SignUp;
