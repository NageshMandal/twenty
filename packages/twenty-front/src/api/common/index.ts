import axios from "../../utils/functions/axios";

class CommonApi {
  async getWorkflow(params = {}) {
    const response = await axios(true).get(`https://workflows.saleshub.ai/api/workflow`, {
      params,
    });
    return response;
  }
}

export const commonApi = new CommonApi();
