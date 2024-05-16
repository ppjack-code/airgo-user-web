'use client';

import Icon from '@/components/Icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { languages, useLanguage } from '@/i18n';
import { getCountry } from '@/lib/countries';

export default function SwitchLanguage() {
  const { lng, changeLanguage } = useLanguage();
  const country = getCountry(lng);

  return (
    <Select value={lng} onValueChange={changeLanguage}>
      <SelectTrigger
        aria-label="Select Language"
        className="w-10 border-none p-0 shadow-none"
      >
        <Icon
          icon={`flagpack:${country?.alpha2.toLowerCase()}`}
          className="size-5"
        />
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map(getCountry).map((item) => (
          <SelectItem
            key={`${item?.lang}-${item?.alpha2}`}
            value={`${item?.lang}-${item?.alpha2}`}
          >
            <div className="flex items-center gap-1">
              <Icon icon={`flagpack:${item?.alpha2.toLowerCase()}`} />
              {item?.country}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
