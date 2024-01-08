import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { onSnapshot, doc } from "firebase/firestore";

export const useDocument = (collectionName, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setDocument(null);
      setError(null);
      return;
    }

    const docRef = doc(db, collectionName, id);
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setDocument(null);
          setError("Cant fetch document data.");
        }
      },
      (error) => {
        console.log(error.message);
        setError("Could not get the data");
      }
    );

    return () => unsubscribe();
  }, [collectionName, id]);

  return { document, error };
};
