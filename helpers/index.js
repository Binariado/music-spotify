import { api } from '../api';

const respFormat = (data) => {
  const { resp, status } = data;
  return { ...resp, status };
}

const apiRest = async (nameApi, material) => {
  try {
    if (!api[nameApi] instanceof Function) {
      throw new Error(`error apiRest: the requested method is not a function (${nameApi})`);
    }
    const data = await api[nameApi](material);
    return respFormat(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}

const useApiRest = (rest = undefined) => {

  const groupApi = {};
  rest = !rest ? Object.keys(api) : rest;
  const objetRest = rest instanceof Array ? rest : [rest];

  if (!rest instanceof Array || !rest instanceof String) {
    throw new Error("error useApiRest: the parameter is not an array or string type");
  }

  for (const key in objetRest) {
    if (Object.hasOwnProperty.call(objetRest, key) && rest) {
      const nameApi = objetRest[key];
      groupApi[nameApi] = (material) => apiRest(nameApi, material);
    }
  }

  return groupApi;
}

export {
  useApiRest,
  apiRest
}