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
      console.log("GetUser error", error);
    }
  },
  async search(material) {
    try {
      const { search } = material;
      const request = new Request(`${URL_API}/api/music/${search}`, {
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
      console.log("GetUser error", error);
    }
  }
}