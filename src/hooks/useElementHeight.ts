import { useEffect, useState } from "react";

export function useElementHeight(id: string): string | null {
  const [height, setHeight] = useState<string | null>(null);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      const height = element.clientHeight;
      setHeight(height.toString());
    } else {
      setHeight(null);
    }
  }, [id]);

  return height;
}
