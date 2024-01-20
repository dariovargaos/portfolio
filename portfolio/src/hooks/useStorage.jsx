import { useQuery } from "@tanstack/react-query";

import { storage } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

const fetchCoverImages = async () => {
  const imagePaths = [
    "Professional CV Resume Croatian image.png",
    "Professional CV Resume image.png",
    "CV - Dario Varga.pdf",
    "CV English - Dario Varga.pdf",
  ];

  const coverImages = await Promise.all(
    imagePaths.map(async (path) => {
      const url = await getDownloadURL(ref(storage, path));
      return {
        src: url,
      };
    })
  );

  return coverImages;
};

export const useStorage = () => {
  return useQuery({
    queryKey: ["cvImages"],
    queryFn: fetchCoverImages,
  });
};
