import Input from '../common/Input';
import Ionicons from '@expo/vector-icons/Ionicons';

type SearchInputProps = {
  inputChanged: (text: string) => void;
  loading?: boolean;
};

export const SearchInput = ({ inputChanged, loading }: SearchInputProps) => {
  return (
    <Input
      inputChanged={inputChanged}
      placeholder="Search players & teams"
      endIcon={<Ionicons name="search-outline" size={20} />}
      loading={loading}
    />
  );
};
