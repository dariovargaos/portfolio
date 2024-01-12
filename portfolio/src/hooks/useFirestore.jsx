import { useQuery } from "@tanstack/react-query";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const fetchProjects = async () => {
  const querySnapshot = await getDocs(collection(db, "projects"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const useFirestore = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
