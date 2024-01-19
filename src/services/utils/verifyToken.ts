import * as jwt from 'jsonwebtoken'

export function verifyToken(token: string): void {
  try {
    const payload: any = jwt.decode(token, { complete: true })
    const expTimestamp: number = payload.payload.exp
    const currentTimestamp: number = Math.floor(Date.now() / 1000)
    if (currentTimestamp > expTimestamp) {
      throw new jwt.TokenExpiredError('Token expirado.', new Date(expTimestamp))
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw error
    } else {
      throw new Error('Token inválido.')
    }
  }
}
