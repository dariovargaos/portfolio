import { useState, useEffect } from "react";

import { storage } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

export const useStorage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoverImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const imagePaths = [
          "coverImages/countries.jpg",
          "coverImages/memory.jpg",
          "coverImages/myMoney.jpg",
        ];

        const coverImages = await Promise.all(
          imagePaths.map(async (path) => {
            const url = await getDownloadURL(ref(storage, path));
            return {
              src: url,
            };
          })
        );

        setData(coverImages);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err);
        console.log("Error fetching images: ", err);
      }
    };

    fetchCoverImages();
  }, []);

  return { data, isLoading, error };
};
