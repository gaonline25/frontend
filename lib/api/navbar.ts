// lib/api/navbar.ts
// API functions to fetch navbar data from Payload CMS

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://goldfingerbackend.vercel.app";

export interface NavbarData {
  enabled: boolean;
  upperNav: UpperNavData;
  mainNav: MainNavData;
  stickyNav: StickyNavData;
  animations: AnimationsData;
}

export interface UpperNavData {
  enabled: boolean;
  styling: {
    backgroundColor: string;
    textColor: string;
    linkHoverColor: string;
    padding: string;
  };
  items: UpperNavItem[];
}

export interface UpperNavItem {
  type: "link" | "phone" | "social" | "search";
  label?: string;
  href?: string;
  ariaLabel?: string;
  customClasses?: string;
  phoneNumber?: string;
  phoneLink?: string;
  socialLinks?: SocialLink[];
  searchConfig?: {
    buttonText: string;
    buttonAriaLabel: string;
    buttonTitle: string;
  };
  visibility: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  title?: string;
  ariaLabel?: string;
  iconClass?: string;
}

export interface MainNavData {
  enabled: boolean;
  styling: {
    headerClass: string;
    backgroundColor: string;
    textColor: string;
    linkHoverColor: string;
    activeItemColor: string;
    padding: string;
  };
  logo: {
    imageUrl: {
      url: string;
      alt?: string;
    };
    width: number;
    height: number;
    altText: string;
    linkUrl: string;
  };
  navigationSettings: {
    desktopType: string;
    tabletType: string;
    mobileType: string;
    breakpointMobile: number;
    breakpointTablet: number;
    hamburgerColor: string;
    hamburgerColorExpanded: string;
  };
  menuItems: MenuItem[];
}

export interface MenuItem {
  label: string;
  href: string;
  isActive: boolean;
  rel?: string;
  customClasses?: string;
  subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  href: string;
  rel?: string;
  customClasses?: string;
  subMenu?: NestedSubMenuItem[];
}

export interface NestedSubMenuItem {
  label: string;
  href: string;
  rel?: string;
  customClasses?: string;
}

export interface StickyNavData {
  enabled: boolean;
  offset: number;
}

export interface AnimationsData {
  enableTransitions: boolean;
  transitionDuration: string;
  dropdownAnimation: string;
}

/**
 * Fetch navbar configuration from Payload CMS Global
 */
export async function fetchNavbarConfig(): Promise<NavbarData | null> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/api/globals/navbar`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch navbar config: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching navbar config:", error);
    return null;
  }
}




export async function fetchUpperNav(): Promise<UpperNavData | null> {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/api/globals/navbar?depth=2&draft=false`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch upper nav: ${res.status}`);
    }

    const data = await res.json();

    console.log(data, 'this is real data')
    // Fix: Remove docs?.[0] - the response is the navbar data directly
    return data || null;
  } catch (error) {
    console.error("Error fetching upper nav:", error);
    return null;
  }
}

/**
 * Fetch main nav configuration from Payload CMS Collection
 */
export async function fetchMainNav(): Promise<MainNavData | null> {
  try {
    const res = await fetch(`${PAYLOAD_API_URL}/api/main-nav?limit=1`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch main nav: ${res.status}`);
    }

    const data = await res.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error("Error fetching main nav:", error);
    return null;
  }
}
