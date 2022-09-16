import axios from "axios";

const DOMAIN = "http://3.36.178.251:8080";

const request = axios.create({
  baseURL: `${DOMAIN}/api`,
});

export const api = {
  menus: {
    findAll: () => request.get("/menus"),
    findOne: (id) => request.get(`/menus/${id}`),
    create: (name, description, file) => {
      // file 업로드시 formData를 활용
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("file", file);
      return request.post("/menus", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    },
    update: (id, name, description) => request.patch(`/menus/${id}`, {
      name: name,
      description: description
    }),
    updateImage: (id, file) => {
      const formData = new FormData();
      formData.append("file", file);
      return request.post(`/menus/${id}/image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
    },
    delete: (id) => request.delete(`/menus/${id}`),
  },
  orders: {
    findAll: () => request.get("/orders"),
    create: (menus_id, quantity, request_detail) => request.post("/orders", {
      menus_id,
      quantity,
      request_detail
    }),
    findOne: (id) => request.get(`/orders/${id}`),
    updata: (id, menus_id, quantity, request_detail) => request.patch(`/orders/${id}`,{
      menus_id: menus_id,
      quantity: quantity,
      request_detail: request_detail,
    }),
    delete: (id) => request.delete(`/orders/${id}`),
  },
};
