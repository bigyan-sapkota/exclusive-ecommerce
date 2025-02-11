import { useEffect } from "react";
import { useRef } from "react";

export function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // !ref.current.contains(event.target)
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);

  return ref;
}
