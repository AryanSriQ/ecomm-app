import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
interface ISelectProps {
  values: {
    key: string;
    value: string;
  }[];
}
const MultiSelect = ({ values }: ISelectProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const handleSelectChange = (value: string) => {
    if (!selectedItems.includes(value)) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      const referencedArray = [...selectedItems];
      const indexOfItemToBeRemoved = referencedArray.indexOf(value);
      referencedArray.splice(indexOfItemToBeRemoved, 1);
      setSelectedItems(referencedArray);
    }
  };

//   console.log(selectedItems)

  const isOptionSelected = (value: string): boolean => {
    return selectedItems.includes(value) ? true : false;
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-2 font-bold">
            <span>Select Values</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" onCloseAutoFocus={(e) => e.preventDefault()}>
          <DropdownMenuLabel>Color</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {values.map((value: ISelectProps["values"][0], index: number) => {
            return (
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                key={index}
                checked={isOptionSelected(value.value)}
                onCheckedChange={() => handleSelectChange(value.value)}
              >
                {value.value}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MultiSelect;