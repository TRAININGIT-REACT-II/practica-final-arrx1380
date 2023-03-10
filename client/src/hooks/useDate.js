import { format } from "date-fns";

const useDate = () => {
  const parse = (d) => {
    try {
      return format(Date.parse(d), "yyyy-MM-dd HH:mm:ss");
    } catch (e) {
      return d;
    }
  };

  return {
    parse,
  };
};

export default useDate;
