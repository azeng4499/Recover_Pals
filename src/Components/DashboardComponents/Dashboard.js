import React, { useEffect, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import {
  DashContainer,
  Card,
  CardPicture,
  CardTextH1,
  CardTextP2,
  CardTextH2,
  TopContainer,
  PictureContainer,
  BottomContainer,
  BottomContainerSection1,
  BottomContainerSection2,
  TextH1,
} from "./DashboardComponents";
import TinderCard from "react-tinder-card";
import "./Dashboard.css";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { updateDoc, doc, getDoc, arrayUnion } from "firebase/firestore";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const getPassedUIDs = async () => {
    const docRef = doc(db, "recoveree", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const passed = data.passed;
    const matched = data.matched;
    return passed.concat(matched);
  };

  useEffect(async () => {
    const passedUIDS = await getPassedUIDs();
    const allUsers = query(
      collection(db, "mentor"),
      where("uid", "not-in", passedUIDS)
    );

    const unsubscribe = onSnapshot(allUsers, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const swipeLeft = async (user) => {
    await updateDoc(doc(db, "recoveree", auth.currentUser.uid), {
      passed: arrayUnion(user.uid),
    });
  };

  const swipeRight = async (user) => {
    await updateDoc(doc(db, "recoveree", auth.currentUser.uid), {
      matched: arrayUnion(user.uid),
    });

    await updateDoc(doc(db, "mentor", user.uid), {
      matched: arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <>
      <DashContainer>
        <TextH1 style={{ marginRight: "330px" }}>
          <BsFillCaretLeftFill size="0.8em" /> Pass
        </TextH1>
        <CardTextH2>Come Back Soon For More Matches!</CardTextH2>
        <TextH1 style={{ marginLeft: "330px" }}>
          Match <BsFillCaretRightFill size="0.8em" />
        </TextH1>
        {users.map((user) => (
          <TinderCard
            className="swipe"
            key={user.name}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={(direction) =>
              direction === "left"
                ? swipeLeft(user)
                : direction === "right"
                ? swipeRight(user)
                : null
            }
          >
            <Card>
              <TopContainer>
                <CardTextH1>
                  {user.firstName} {user.lastName}
                </CardTextH1>
                <CardTextP2>
                  {user.keyword}
                </CardTextP2>
              </TopContainer>
              <PictureContainer>
                <CardPicture src={user.url} />
              </PictureContainer>
              <BottomContainer>
                <BottomContainerSection1>
                  {user.story}
                </BottomContainerSection1>
                <BottomContainerSection2>
                  Hobbies: {user.hobbies}
                </BottomContainerSection2>
              </BottomContainer>
            </Card>
          </TinderCard>
        ))}
      </DashContainer>
    </>
  );
};

export default Dashboard;
