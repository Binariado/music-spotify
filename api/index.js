import { URL_API } from '../utils';

const responsed = async (resp, status) => {
  return {
    resp: resp,
    status: status
  }
}

export const api = {
  async getToken() {
    try {
      const request = new Request(`${URL_API}/music/token/set`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      return await fetch(request)
        .then(async resp => {
          return responsed(await resp.json(), resp.status);
        });
    } catch (error) {
      console.log("getToken error", error);
    }
  },
  async search(material) {
    try {
      const { search, token } = material;
      const request = new Request(`${URL_API}/music/search/${search}/${token}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      });
      return await fetch(request)
        .then(async resp => {
          return responsed(await resp.json(), resp.status);
        });
    } catch (error) {
      console.log("search error:", error);
    }
  },
  async paginate(material) {
    try {
      const { search, token,  next} = material;
      
      const request = new Request(`${URL_API}/music/search/${search}/${token}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({next})
      });
      return await fetch(request)
        .then(async resp => {
          return responsed(await resp.json(), resp.status);
        });
    } catch (error) {
      console.log("paginate or search error:", error);
    }
  }
}