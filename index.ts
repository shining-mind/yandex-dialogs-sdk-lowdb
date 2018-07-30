import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

export default function stateFileMiddleware(filePath: string) {
    const adapter = new FileSync(filePath)
    const db = low(adapter)

    return async ctx => {
        const sessionId = ctx.sessionId
        const userId = ctx.userId

        try {
            const users = db.get('users')
            if (!users.value()) {
                db.defaults({ users: [] }).write()
            }

            const user = db.get('users').find({ userId })
            if (!user.value()) {
                users.push({ sessionId, userId, state: ctx.state }).write()
                return ctx
            }

            let state = user.value().state
            console.log(state)
            Object.defineProperty(ctx, 'state', {
                get() {
                    return state
                },
                set(value) {
                    state = Object.assign({}, state, value)
                    // user.assign({ state }).write()
                },
                configurable: true,
            })
            user.assign({ state }).write()
            return ctx
        } catch (error) {
            console.error(error)
            return ctx
        }
    }
}

module.exports = stateFileMiddleware
