/* eslint-disable brace-style, space-before-blocks, space-before-function-paren */

let sessionId = null
let sessionUsr = null
let sessionDate = 0
let sessionTtl = 0

class SessionManager
{
  constructor()
  {
    sessionId = null
    sessionUsr =
    {
      usr: 'ghost',
      name: 'Casper Ndlovu',
      firstname: 'Casper',
      lastname: 'Ndlovu',
      cell: 'N/A',
      tel: 'N/A',
      email: 'N/A',
      access_level: 3
    }
    sessionDate = 0
    sessionTtl = 0
  }

  setSessionId(sessId)
  {
    sessionId = sessId
  }

  getSessionId()
  {
    return sessionId
  }

  getSessionUser()
  {
    return sessionUsr
  }

  setSessionUser(user)
  {
    sessionUsr = user
  }

  getSessionDate()
  {
    return sessionDate
  }

  setSessionDate(date)
  {
    sessionDate = date
  }

  getSessionTtl()
  {
    return sessionTtl
  }

  setSessionTtl(ttl)
  {
    sessionTtl = ttl
  }
}

const sessionManager = new SessionManager()

export default sessionManager
export const getSessionUser = sessionManager.getSessionUser
