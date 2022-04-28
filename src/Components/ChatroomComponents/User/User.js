import React, { useEffect, useState } from "react";
import { 
    UserWrapper,
    UserProfilePic,
    UserText,
    UserTextP2,
    UserTextP1,
 } from "./UserComponents";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import any from '../../../images/user.png'

const User = ({ uid, selectUser}) => {
  const [info, setInfo] = useState({});
  
  useEffect(async () => {
    try {
      const getInfo = async () => {
        const docRef = doc(db, "mentor", uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setInfo({ ...data });

        return () => getInfo();
      };

      getInfo();
    } catch {}
  });
  return (
    <>
      <UserWrapper onClick={() => selectUser(info)}>
        <UserProfilePic src={info.url ? info.url : any} />
        <UserText>
          <UserTextP1>
            {info.firstName} {info.lastName}
          </UserTextP1>
          <UserTextP2>{info.keyword} Mentor</UserTextP2>
        </UserText>
      </UserWrapper>
    </>
  );
};

export default User;
