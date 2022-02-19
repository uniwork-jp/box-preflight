/*—— toolState ————————*/
export interface tool {
  toolName: string,
  toolDiscription: string,
  toolDetails: toolDetails[],
  toolCost: number,
  toolMinMembers: number,
  tolMaxMembers: number,
  toolReservationNeeds: boolean,
  toolImg: string[],
}

export interface toolDetails {
  ingredient: string,
  amount: number,
  unit: string,
  ingredientImg: string[],
}
