import { url } from './global';

export interface menu {
  menuId: number,
  manuName: string,
  menuKind: menuKind,
  menuDescription: string,
  menuDetails: menuDetails[],
  menuCost: number,
  menuMinMembers: number,
  menuMaxMembers: number,
  menuReservationNeeds: boolean,
  menuImgs: url[],
}

export interface menuDetails {
  ingredient: string,
  unit: string,
  amount: number,
}

export type menuId = number;
export type menuKind = 'food' | 'drink' | 'tool' | 'others';
// export type menuDetail = ['admin' | 'ore' | ids ];


/*—— api ————————*/
export interface menuGet {
  companyId: string,
  menuIds: number[],
}
