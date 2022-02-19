/*—— userState ————————*/
export interface user {
  userId?: userId,
  userName?: string,
  userTel?: string,
  userPassword?: string,
  userMail?: string,
}

export interface userIsReady {
  userName: boolean,
  userTel: boolean,
  userPassword: boolean,
}

export type userId = number;

//   localStorage
export type userLogin = {
  userName?: string,
  userTel?: string,
  userMail?: string,
  token?: string, 
}

/*—— api ————————*/
