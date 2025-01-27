import { useEffect, useState } from 'react';
import { ISelectOption } from '../../utils/types/index';

const TEAM_MEMBERS = [
  {
    id: 5,
    full_name: 'Jesper Qvist',
  },
  {
    id: 2322,
    full_name: 'Carlos Llorens',
  },
  {
    id: 3007,
    full_name: 'Gabriel Boone',
  },
  {
    id: 3113,
    full_name: 'Salestools User',
  },
  {
    id: 3573,
    full_name: 'Renuka Ramkumar',
  },
  {
    id: 11013,
    full_name: 'SDR Account',
  },
  {
    id: 11502,
    full_name: 'Julia M.',
  },
  {
    id: 16086,
    full_name: 'Esosa Akpata',
  },
  {
    id: 16233,
    full_name: 'Salman A',
  },
  {
    id: 16291,
    full_name: 'Kalyan Jambavathi',
  },
  {
    id: 16350,
    full_name: 'Loredana Qvist',
  },
  {
    id: 16355,
    full_name: 'Bhuvaneswary Senthilkumar',
  },
];

const FIELD_SETTINGS = [
  {
    id: 57315,
    value: 'Demo Booked',
  },
  {
    id: 59116,
    value: 'Closed',
  },
  {
    id: 59261,
    value: 'Demo Done',
  },
  {
    id: 73164,
    value: 'Cold / Not Started',
  },
  {
    id: 73165,
    value: 'Approaching',
  },
  {
    id: 73167,
    value: 'Unresponsive',
  },
  {
    id: 73168,
    value: 'Do Not Contact',
  },
  {
    id: 73170,
    value: 'Interested',
  },
  {
    id: 73171,
    value: 'Not Interested',
  },
];

export const useMember = () => {
  const [memberOptions, setMembers] = useState<ISelectOption[]>([]);
  const [stageOptions, setStageOptions] = useState<ISelectOption[]>([]);

  const loadMembersAndStages = () => {
    // Map team members
    const members = TEAM_MEMBERS.map((member) => ({
      value: member.id,
      label: member.full_name,
    }));

    // Map field settings
    const stages = FIELD_SETTINGS.map((stage) => ({
      value: stage.id,
      label: stage.value,
    }));

    setMembers(members);
    setStageOptions(stages);
  };

  useEffect(() => {
    loadMembersAndStages();
  }, []);

  return { memberOptions, stageOptions };
};
