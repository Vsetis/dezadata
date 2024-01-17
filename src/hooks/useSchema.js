import XsdData from "../data/schema.xsd";
import { useEffect, useState } from "react";

export const useSchema = () => {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    const fetchSchema = async (pathName) => {
      try {
        const response = await fetch(pathName);
        const data = await response.text();
        setSchema(data);
      } catch (error) {
        console.log("Error with fetching schema:", error);
      }
    };

    fetchSchema(XsdData);
  }, []);

  return { schema };
};
