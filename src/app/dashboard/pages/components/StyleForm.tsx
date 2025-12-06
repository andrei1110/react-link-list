"use client";

import { Input } from "@/components/ui/Input";
import { PageStyle } from "@/types/page";

type Props = {
  style: PageStyle;
  onChange: (partial: Partial<PageStyle>) => void;
};

export default function StyleForm({ style, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm opacity-70 block mb-1">Cor de fundo</label>
        <Input
          className="input"
          type="color"
          value={style.backgroundColor}
          onChange={(e) => onChange({ backgroundColor: e.target.value })}
          style={{ height: 46 }}
        />
      </div>

      <div>
        <label className="text-sm opacity-70 block mb-1">Cor do texto</label>
        <Input
          type="color"
          value={style.textColor}
          style={{ height: 46 }}
          className="input"
          onChange={(e) => onChange({ textColor: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm opacity-70 block mb-1">Cor dos botões</label>
        <Input
          type="color"
          style={{ height: 46 }}
          value={style.buttonColor}
          onChange={(e) => onChange({ buttonColor: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm opacity-70 block mb-1">Fonte</label>
        <select
          className="input"
          value={style.fontFamily}
          onChange={(e) => onChange({ fontFamily: e.target.value })}
        >
          <option value="Inter">Inter</option>
          <option value="Poppins">Poppins</option>
          <option value="Roboto">Roboto</option>
        </select>
      </div>
    </div>
  );
}
