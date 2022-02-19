import { geo, url } from './global';
import { menuId } from './menu';
import { planId } from './plan';
import { companyId } from './company';


export interface site {
  siteId: siteId,
  siteName: string,
  siteDiscription: string,
  siteZipcode: number,
  siteAddress: string,
  siteTel: string,
  sitePlans: planId[],
  siteMenus: menuId[],
  siteConditions:  string[],
  siteOpen: string,
  siteClose: string,
  siteHoliday: siteHoliday,
  siteStation: string,
  siteGeo: geo,
  siteNote: string,
  siteImgs: url[],
}

export interface newSite {
  companyId: companyId,
  siteName: string,
  siteDiscription: string,
  siteZipcode: number,
  siteAddress: string,
  siteTel: string,
  sitePlans: planId[],
  siteMenus: menuId[],
  siteConditions: string[],
  siteOpen: string,
  siteClose: string,
  siteHoliday: siteHoliday,
  siteStation: string,
  siteGeo: geo,
  siteNote: string,
  siteImgs: url[],
}

export interface siteReady {
  siteName: boolean,
  siteDiscription: boolean,
  siteZipcode: boolean,
  siteAddress: boolean,
  siteTel: boolean,
  sitePlans: boolean,
  siteEnvironment: boolean,
  siteOpen: boolean,
  siteClose: boolean,
  siteHoliday: boolean,
  siteStation: boolean,
  siteGeo: boolean,
  siteNote: boolean,
  siteImgs: boolean,
}
//   menu
export interface siteMenuDetails {
  menuId: number,
  menuKind: string,
  manuName: string,
  menuCount: number,
  menuUnit: string,
  menuImgs: string[],
}

//   site
export interface siteConditions {
  id?: string,
  icon?: string,
  name?: string,
}

export interface siteHoliday {
  weekday?: {
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    sun: boolean,
  },
  holiday?: boolean,
  others?: string[],
}

export type siteId = number;

/*—— api ————————*/
export interface getSites {
  companyId: string,
  siteIds: number[],
}
