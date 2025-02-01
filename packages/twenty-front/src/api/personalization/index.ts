import axios from "../../utils/functions/axios";
import { IEditMessage, IManualReq } from "../../utils/types/personalization";

class PersonalizationApi {
  async getManualProspects(req: IManualReq) {
    const response = await axios(true).get(
      `https://workflows.saleshub.ai/api/workflow/${req.wid}/manual-prospects-bypage?page=${req.page}`
    );
    return response;
  }

  async handleSkipPost(req: IManualReq) {
    const response = await axios(true).delete(
      `https://workflows.saleshub.ai/api/workflow/${req.wid}/manual-prospects/${req.pid}`
    );
    return response;
  }

  async handleSendProspect(req: IManualReq) {
    const response = await axios(true).put(
      `https://workflows.saleshub.ai/api/workflow/${req.wid}/manual-prospects/${req.pid}/process`
    );
    return response;
  }

  async updateMessage(req: Partial<IEditMessage>) {
    const response = await axios(true).put(
      `https://workflows.saleshub.ai/api/workflow/${req.wid}/manual-prospects/${req.pid}/messages/${req.sid}`,
      {
        message: req.message,
      }
    );
    return response;
  }

  async editMessageByAskAi(req: Partial<IEditMessage>) {
    const response = await axios(true).post(
      `https://workflows.saleshub.ai/api/workflow/${req.wid}/manual-prospects/${req.pid}/edit-message/${req.sid}/message-id/${req.mid}/prompt-id/${req.promptId}`,
      { message: req.message }
    );
    return response;
  }
}
export const personalizationApi = new PersonalizationApi();
