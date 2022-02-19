/*—— administratorState ————————*/
export interface administrator {
  administratorId: number,
  administratorName: string,
  administratorPassword: string,
  administratorDataPolicy: administratorDataPolicy[],
  administratorSitePolicy: administratorSitePolicy[],
}

export type siteIds = number[];

export type administratorSitePolicy = 'admin' | siteIds;
export type administratorDataPolicy = 'admin' | 'sales' | 'reservations';
