import React from 'react';

import Button from '../../../../../components/base/Button';
import { useForm } from 'react-hook-form';

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onNext: Function;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onBack: Function;
};

const options = [
  { value: '01', label: 'United State' },
  { value: '02', label: 'Ukraine' },
  { value: '03', label: 'Italy' },
  { value: '04', label: 'Switzerland' },
  { value: '05', label: 'Norway' },
  { value: '06', label: 'German' },
];

const FromVisitor: React.FC<Props> = ({ onNext, onBack }) => {
  const { control } = useForm();
  return (
    <div>
      <div className=" py-20 text-center justify-center">
        {/* <h2 className='text-16 text-neutral-800 dark:text-neutral-300'>
          Prospect visitors by automation
        </h2> */}
        <h2 className="text-16 text-neutral-800 dark:text-neutral-300 pt-10">
          This Automation will auto select those Prospects that Visited Your
          Website,
        </h2>
        <h3 className="text-14 text-neutral-800 dark:text-neutral-300 pt-10">
          You can present them your best products or opportunities to turn them
          into regular loyal customers
        </h3>
      </div>
      <div className="py-10 max-w-500"></div>
      <form className="flex flex-col gap-16">
        {/* <Input fullWidth label='Complete Landing Page URL' />
        <ReactSelectRh
          options={options}
          label='Location'
          isMulti
          control={control}
          name='location'
        />
        <ReactSelectRh
          options={options}
          label='Industry'
          isMulti
          control={control}
          name='industry'
        />
        <ReactSelectRh
          options={options}
          label='Company Size'
          isMulti
          control={control}
          name='company_size'
        />
        <ReactSelectRh
          options={options}
          label='Technology Usage'
          isMulti
          control={control}
          name='technology_usage'
        /> */}
        <div className="flex gap-12 pt-10  items-center justify-center">
          <Button
            className="w-130"
            buttonStyle="secondary"
            onClick={() => onBack()}
          >
            Back
          </Button>
          {/* <Button onClick={() => onNext()}>Save and Next</Button> */}
          <Button onClick={() => onNext()}>Next</Button>
        </div>
      </form>
    </div>
  );
};

export default FromVisitor;
