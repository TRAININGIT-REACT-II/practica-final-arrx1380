import { format } from "date-fns";

const useDate = () => {
  const parse = (d) => {
    return format(Date.parse(d), "yyyy-MM-dd HH:mm:ss");
  };

  return {
    parse,
  };
};

export default useDate;
