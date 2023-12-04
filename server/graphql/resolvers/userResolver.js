const User = require('../../models/user')
const bycrypt = require('bcryptjs')

const userResolver = {
    users: () => {
         User.find()
            .then(users => {
                return users.map(user => {
                    return { ...user._doc }
                })
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    },
    user: (args) => {
        return User.findById(args.id)
            .then(user => {
                return { ...user._doc }
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    },
    createUser: (args) => {
         return User.findOne({ email: args.userInput.email })
            .then(user => {
                if (user) {
                    throw new Error('User exists already')
                } else {
                    return bycrypt
                    .hash(args.userInput.password, 12)
                    .then(hashedPassword => {
                        const user = new User({
                            email: args.userInput.email,
                            password: hashedPassword
                        })
                        return user.save()
                    })
                    .then(result => {
                        return { ...result._doc, password: null }
                    })
                    .catch(err => {
                        console.log(err)
                        throw err
                    })
                }
            })
    }
}

module.exports = userResolver