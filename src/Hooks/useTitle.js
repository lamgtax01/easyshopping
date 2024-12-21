import { useEffect } from "react";

export const useTitle = (title) => {
  
    useEffect ( () => {
        document.title = `EasyShopping |  ${title}`;
        // console.log(title);
      },[title]);
  
    return null;
}
