export interface PageStyle {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  fontFamily: string;
}

export interface PageLink {
  id?: string;
  label: string;
  url: string;
  icon?: string;
  order: number;
}

export interface SocialLink {
  id?: string;
  type: string;
  url: string;
  icon?: string;
  order: number;
}

export interface PageData {
  id?: string;
  slug: string;
  title: string;
  description: string;
  style: PageStyle;
  links: PageLink[];
  socialLinks: SocialLink[];
  totalClicks?: number;
  avatarUrl?: string;
}

export const emptyPage: PageData = {
  slug: "",
  title: "",
  description: "",
  style: {
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
    buttonColor: "#FF8C00",
    fontFamily: "Inter",
  },
  links: [],
  socialLinks: [],
};

export type UpdatePageDto = Partial<PageData>;
export type CreatePageDto = Omit<PageData, "id" | "totalClicks">;
