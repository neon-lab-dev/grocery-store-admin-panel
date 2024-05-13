import axios from "axios";
import API from ".";
import { TOKEN } from "../assets/mockData/auth";
import { DriverFormData } from "../pages/Drivers/AddUpdateDriverModal";

export const handleAddDriver = (driver: DriverFormData): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.addDriver, driver, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data?.statusCode < 200 || res.data?.statusCode >= 300) {
          reject(res.data?.errorMessage ?? "Something went wrong!");
        }
        resolve(res.data?.message);
      })
      .catch((err) => {
        reject(err.response.data?.message ?? "Something went wrong!");
      });
  });
};

export type DriverResponseType = {
  id: string;
  name: string;
  contactNo: string;
  vehicleNo: string;
  available: boolean;
};

export const getAllDrivers = async (): Promise<DriverResponseType[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.allDrivers, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data?.statusCode < 200 || res.data?.statusCode >= 300) {
          reject(res.data?.errorMessage);
        }
        resolve(res.data?.responseBody?.content ?? []);
      })
      .catch((err) => {
        reject(err.response.data?.message);
      });
  });
};

export const handleDeleteDriver = async (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .delete(API.deleteDriver, {
        data: [id],
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data?.statusCode < 200 || res.data?.statusCode >= 300) {
          reject(res.data?.errorMessage);
        }
        resolve(res.data?.message ?? "Driver deleted successfully!");
      })
      .catch((err) => {
        reject(err.response.data?.message);
      });
  });
};

export const handleUpdateDriver = async (
  driver: DriverResponseType
): Promise<string> => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.updateDriver, driver, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data?.statusCode < 200 || res.data?.statusCode >= 300) {
          reject(res.data?.errorMessage);
        }
        resolve(res.data?.message ?? "Driver updated successfully!");
      })
      .catch((err) => {
        reject(err.response.data?.message);
      });
  });
};

export const handleGetDriversByName = async (
  name: string
): Promise<DriverResponseType[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.allDrivers}?name=${name}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data?.statusCode === 404) {
          resolve([]);
        }
        if (res.data?.statusCode < 200 || res.data?.statusCode >= 300) {
          reject(res.data?.errorMessage);
        }
        resolve(res.data?.responseBody?.content ?? []);
      })
      .catch((err) => {
        reject(err.response.data?.message);
      });
  });
};