import { useMemo, useEffect, useState } from "react";

const useApi = (url, token = "") => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchParams, setFetchParams] = useState({});
  const [performRequest, setPerformRequest] = useState(false);

  const updateParams = (newParams) => {
    setFetchParams(newParams);
  };

  const perform = () => {
    setPerformRequest(true);
  };

  const config = useMemo(() => {
    const initialConfig = {
      method: "GET",
      ...fetchParams,
    };

    if (token && token != "") {
      if (initialConfig.headers == null) {
        initialConfig.headers = {};
      }

      initialConfig.headers["api-token"] = token;
    }

    return initialConfig;
  }, [url, token, fetchParams]);

  useEffect(() => {
    if (!loading) {
      setPerformRequest(false);
    }
  }, [loading]);

  useEffect(() => {
    if (performRequest) {
      if (!loading) {
        setLoading(true);
      }

      setError("");

      fetch(url, config)
        .then((res) => res.json())
        .then((json) => {
          if (json.error != null) {
            setError(json.error);
          } else {
            setData(json);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [url, config, performRequest]);

  return {
    loading,
    data,
    error,
    updateParams,
    perform,
  };
};

export default useApi;
