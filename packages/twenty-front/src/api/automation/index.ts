import axios from "../../utils/functions/axios";

class AutomationApi {
  async getAutomationsList() {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/workflow/`,
      {}
    );
    return response;
  }

  async deleteAutomationProcessFromList(id: number) {
    try {
      const response = await axios(true).post(
        `https://workflows.saleshub.ai/api/workflow/${id}/delete`,
        {}
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to delete process");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error deleting process: ${error.message}`);
      } else {
        throw new Error("Error deleting process");
      }
    }
  }
}

export const automationApi = new AutomationApi();
