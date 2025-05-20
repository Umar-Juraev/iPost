"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "UZ",
    label: "O'zbek",
  },
  {
    value: "EN",
    label: "English",
  },
  {
    value: "RU",
    label: "Русский",
  },
  {
    value: "zh",
    label: "️中文",
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="p-0 h-10.5 w-10.5 rounded-full border-[#FFFFFF33] font-organetto text-[10px] font-light"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.value
            : "UZ"}
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={20} className="w-[200px] p-0 bg-white border-none rounded-none">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
export function LanguageSelector() {
  return (
    <div className="flex items-center space-x-2">
      <ComboboxDemo />
    </div>
  )
}
