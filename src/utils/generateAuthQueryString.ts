import MD5 from "crypto-js/md5";

const generateAuthQueryString = () => {
  try {
   
    const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
 

    return `apikey=${public_key}`;
  } catch (error) {
    return ``;
  }
};

export default generateAuthQueryString;
