import { siteId } from "./site";
import { menuId } from "./menu";
import { planId } from "./plan";
import { userId } from "./user";

/*—— reservationState ————————*/
export interface reservation {
  reservationId: number;
  siteId: siteId;
  siteName: string;
  orderDate: string;
  reservationDate: string;
  reservationTime: reservationTime;
  reservationStart: string;
  reservationEnd: string;
  reservationMembers: number;
  representiveName: string;
  representiveTel: string;
  reservationMenus: menuId[];
  reservationPlans: planId[];
  reservationCost: number;
  reservationStatus: reservationStatus;
  reservationNote?: string;
  userId: userId;
}

export interface postReservation {
  reservationId: number;
  siteId: siteId;
  siteName: string;
  orderDate: string;
  reservationDate: string;
  reservationTime: reservationTime;
  reservationStart: string;
  reservationEnd: string;
  reservationMembers: number;
  representiveName: string;
  representiveTel: string;
  reservationMenus: menuId[];
  reservationPlans: planId[];
  reservationCost: number;
  reservationStatus: reservationStatus;
  reservationNote?: string;
  userId: userId;
}

export interface thisReservation {
  siteId: siteId;
  siteName: string;
  orderDate: string;
  reservationDate: string;
  reservationTime?: reservationTime;
  reservationStart: string;
  reservationEnd: string;
  reservationMembers: number;
  representiveName: string;
  representiveTel: string;
  reservationMenu?: menuId[];
  reservationPlan: object;
  reservationCost: number;
  reservationStatus: reservationStatus;
  reservationNote?: string;
  userId: userId;
}

export interface reservationIsReady {
  reservationDate: boolean;
  reservationStart: boolean;
  reservationEnd: boolean;
  reservationMembers: boolean;
  representiveName: boolean;
  representiveTel: boolean;
  reservationPlan: boolean;
}

export type reservationStatus = "ordered" | "canceled" | "done";
export type reservationTime = "dayTime" | "nightTime";
export type reservationPlan = object;

/*—— view ————————*/
export type reservationContainer = {
  step: number;
  steps: stepValue[];
  pickedDate: Date;
};

export type step = "date" | "plan" | "info" | "confirm";
export type stepValue = {
  step: step;
  value: string;
};
