import React, { useEffect} from "react";
import { GET } from "@/services/service";
import Nav from "@/components/nav";

export default function ApiSample() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [text, setText] = React.useState<any>(null);

  useEffect(() => {
    // Example of fetching data when the component mounts
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Delay to simulate loading state
        await new Promise(resolve => setTimeout(resolve, 1000));
        const data = await GET('/M/HelloWorld');
        if (data) {
          setText(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      {isLoading && <div>Load data from API...</div>}

      {!isLoading && 
        <h1>{text}</h1>
      }
    </div>
  );
}