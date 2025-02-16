import Input from "../../../../../components/base/Input";
import { ISelectOption } from "../../../../../utils/types";
interface Props {
  value?: ISelectOption;
  handleInputChange: (e: ISelectOption) => void;
}

const CompanySizeByEmployee: React.FC<Props> = ({ value, handleInputChange }) => {
  const handleChange = (event: number) => {
    handleInputChange({ label: "companySizeByEmployee", value: event });
  };

  return (
    <div className='flex flex-col gap-12 w-full'>
      <div className='w-full flex px-5 mb-4 gap-3'>
        <span className={`font-bold text-neutral-800 dark:text-neutral-200 text-base`}>
          Prospects per company
        </span>
      </div>
      <div className='flex items-center gap-12'>
        <Input
          fullWidth
          value={value?.value}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            handleChange(newValue);
          }}
        />
      </div>
    </div>
  );
};

export default CompanySizeByEmployee;
