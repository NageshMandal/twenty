import axios from "../../utils/functions/axios";

class AuthApi {
  async login(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/account/login`,
      data
    );
    return response;
  }

  async forgotPass(data: any) {
    const response = await axios().post(
      `https://app.usedemand.com/api/account/password/email`,
      data
    );
    return response;
  }

  async restorePass(data: any) {
    const response = await axios().post(
      `https://app.usedemand.com/api/account/password/reset`,
      data
    );
    return response;
  }

  async getUserInfoByIp() {
    const response = await axios().get(`https://app.usedemand.com/api/account/ip`);
    return response;
  }

  async getPlan(params = {}) {
    const response = await axios().get(`https://app.usedemand.com/api/chargebee/plans`, {
      params,
    });
    return response;
  }

  async getOpenpayPlans(params = {}) {
    const response = await axios().get(`https://app.usedemand.com/api/openpay/plans`, {
      params,
    });
    return response;
  }

  async getOpenpayCheckout(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/openpay/checkout-plan`,
      data
    );
    return response;
  }

  async subscriptionEstimate(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/chargebee/subscription-estimate`,
      data
    );
    return response;
  }

  async subscriptionOpenpayEstimate(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/openpay/subscription-estimate`,
      data
    );
    return response;
  }

  async createPaymentIntent(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/chargebee/payment-intent`,
      data
    );
    return response;
  }

  async createOpenpayPaymentIntent(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/openpay/payment-intent`,
      data
    );
    return response;
  }

  async registerUser(data = {}) {
    const response = await axios().post(
      `https://app.usedemand.com/api/account/registerUser`,
      data
    );
    return response;
  }

  async createForCard(data = {}) {
    const response = await axios().post("/", data);
    return response;
  }

  async getUserInfo() {
    const response = await axios(true).get(`https://app.usedemand.com/api/account/user`);
    return response;
  }

  async logout() {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/account/logout`
    );
    return response;
  }
}

export const authApi = new AuthApi();
