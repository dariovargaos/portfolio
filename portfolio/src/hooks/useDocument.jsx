import { useQuery } from "@tanstack/react-query";
import { db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

const fetchDocument = async ({ queryKey }) => {
  const [_, collectionName, id] = queryKey;

  const docRef = doc(db, collectionName, id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { id: docSnapshot.id, ...docSnapshot.data() };
  } else {
    throw new Error("Document does not exist.");
  }
};

export const useDocument = (collectionName, id) => {
  return useQuery({
    queryKey: ["document", collectionName, id],
    queryFn: () =>
      fetchDocument({ queryKey: ["document", collectionName, id] }),
    enabled: !!id,
  });
};
