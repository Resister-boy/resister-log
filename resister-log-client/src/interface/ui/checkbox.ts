export type BaseCheckboxProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  orientation: 'top' | 'down' | 'left' | 'right';
  onChange: () => void;
  message: string;
};
