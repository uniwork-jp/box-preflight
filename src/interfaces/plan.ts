import { url } from './global';
import { menuId } from './menu';
import { companyId } from './company';

/*—— planState ————————*/
export interface plan {
  planId: planId,
  planName: string,
  planDescription: string,
  planDetails: menuId[],
  planCost: number,
  planMaxMembers: number,
  planMinMembers: number,
  planReservationNeeds: boolean,
  planImgs?: url[],
}

export interface newPlan {
  companyId: companyId,
  planName: string,
  planDescription: string,
  planDetails: menuId[],
  planCost: number,
  planMaxMembers: number,
  planMinMembers: number,
  planReservationNeeds: boolean,
  planImgs: url[],
}

export interface planReady {
  planName: boolean,
  planDescription: boolean,
  planDetails: boolean,
  planCost: boolean,
  planMaxMembers: boolean,
  planMinMembers: boolean,
  planReservationNeeds: boolean,
  planImgs: boolean,
}

export type planId = number;

/*—— api ————————*/
export interface planGet {
  companyId: companyId,
  planIds: planId[],
}
