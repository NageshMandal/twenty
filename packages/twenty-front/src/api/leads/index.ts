import axios from '../../utils/functions/axios';
import {
  ICustomSearch,
  IExportCSV,
  IReqLead,
  ITemplate,
} from '../../utils/types/leads';

class LeadApi {
  async getProspects(data = {}) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/prospects/search`,
      data,
    );
    return response;
  }

  async getProspectDetail(id: string) {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/prospects/${id}`,
    );
    return response;
  }

  async getAutomationActivity(id: string) {
    const response = await axios(true).get(
      `${process.env.REACT_APP_WORKFLOW_API_URL}/prospect/workflow-activities?prospect_id=${id}`,
    );
    return response;
  }

  async addAutomation(req: IReqLead) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/workflows/${req.wid}/prospects`,
      {
        filter: {
          all: req.all,
          ids: req.ids,
          query: req.query,
        },
      },
    );
    return response;
  }

  async handleHubSpot(req: IReqLead) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/integration-exports/hubspot`,
      {
        crm_type: 'Lead',
        filter: {
          all: req.all,
          ids: req.ids,
          query: req.query,
        },
      },
    );
    return response;
  }

  async handleZapier(req: IReqLead) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/integration-exports/zapier`,
      {
        crm_type: 'Lead',
        filter: {
          all: req.all,
          ids: req.ids,
          query: req.query,
        },
      },
    );
    return response;
  }

  async getFileExportsSetting() {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/file-exports/settings`,
    );
    return response;
  }

  async getFileExportsTemplate(objectType: number) {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/export-templates?object_type=${objectType}`,
    );
    return response;
  }

  async saveTemplate(data: Partial<ITemplate>) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/export-templates`,
      data,
    );
    return response;
  }

  async exportCSV(data: IExportCSV) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/file-exports`,
      data,
    );
    return response;
  }

  async getLeadTags() {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/tags?limit=300`,
    );
    return response;
  }

  async addListByTag(data: any) {
    const response = await axios(true).put(
      `https://app.usedemand.com/api/prospects/tags/batch-update`,
      data,
    );
    return response;
  }

  async handleReply(data: any) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/prospect/workflow-response`,
      data,
    );
    return response;
  }

  async getTechnology() {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/technologies`,
    );
    return response;
  }

  async getTeam() {
    const response = await axios(true).get(
      `https://app.usedemand.com/api/account/team`,
    );
    return response;
  }

  async getLocation(query: any) {
    let response = null;
    if (query) {
      response = await axios(true).get(
        `https://app.usedemand.com/api/addresses/search?q=${query}`,
      );
    } else {
      response = await axios(true).get(
        `https://app.usedemand.com/api/addresses/search`,
      );
    }
    return response;
  }

  async handleCustomSearch(data: ICustomSearch) {
    const response = await axios(true).post(
      `https://app.usedemand.com/api/prospects/custom-search`,
      data,
    );
    return response;
  }
}

export const leadApi = new LeadApi();
