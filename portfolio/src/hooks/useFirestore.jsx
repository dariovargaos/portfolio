import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const useFirestore = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsArray);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err);
        console.log("Error fetching projects: ", err);
      }
    };

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
};
