import axios from "../../utils/functions/axios";

class InboxApi {
  async getInboxThreads(params?: {}) {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/workflow/inbox/conversations`,
      { params }
    );
    return response;
  }

  async getAiSdrInboxThreads(params?: {}, wid?: string) {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/workflow/${wid}/aisdr/conversations`,
      { params }
    );
    return response;
  }

  async inboxSnooze(conversationId: number, delay = 1) {
    const response = await axios(true).post(
      `https://workflows.saleshub.ai/api/workflow/inbox/conversations/${conversationId}/snooze`,
      { endin: delay }
    );
    return response;
  }

  async inboxDismiss(conversationId: number) {
    const response = await axios(true).post(
      `https://workflows.saleshub.ai/api/workflow/inbox/conversations/${conversationId}/dismiss`
    );
    return response;
  }

  async getMessages(conversationId: number) {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/workflow/inbox/conversations/${conversationId}/messages`
    );
    return response;
  }

  async getAiSdrMessages(conversationId: number, wid: string) {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/workflow/${wid}/aisdr/conversations/${conversationId}/messages`
    );
    return response;
  }

  async sendMessages(conversationId: number, data: { message: string }) {
    const response = await axios(true).post(
      `https://workflows.saleshub.ai/api/workflow/inbox/conversations/${conversationId}/reply`,
      data
    );
    return response;
  }
}

export const inboxApi = new InboxApi();
