import axios from "../../utils/functions/axios";

class UserApi {
  async getLinkedinConnectionInfo() {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/integration/linkedin/connection-status`
    );
    return response.data;
  }

  async getCookieInfo() {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/growth-flows/cookie-stats`
    );
    return response;
  }

  async updateUser(data: any) {
    const response = await axios(true).put(
      `https://app.usedemand.com/api/account/user`,
      data
    );
    return response;
  }

  async updatePassword(data: any) {
    const response = await axios(true).put(
      `${process.env.REACT_APP_DEMAND_API_URL}/dashboard/settings/change-password`,
      data
    );
    return response;
  }

  async updateBilling(data: any) {
    const response = await axios(true).put(
      `${process.env.REACT_APP_DEMAND_API_URL}/account/billing`,
      data
    );
    return response;
  }
}

export const userApi = new UserApi();
