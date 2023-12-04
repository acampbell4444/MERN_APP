const event = require('../../models/event')
const Event = require('../../models/event')
const User = require('../../models/user')

const user = (userId) => {
    return User.findById(userId)
        .then(user => {
            return { ...user._doc, _id: user.id, createdEvents: events.bind(this, user._doc.createdEvents) }
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const events = eventIds => {
    return Event.find({ _id: { $in: eventIds } })
        .then(events => {
            return events.map(event => {
                return { ...event._doc, _id: event.id, creator: user.bind(this, event._doc.creator), date: new Date(event._doc.date).toISOString() }
            })
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const eventsResolver = {
    events: () => {
        return Event.find()
            .then(events => {
                return events.map(event => {
                    return { ...event._doc, _id: event.id, creator: user.bind(this, event._doc.creator), date: new Date(event._doc.date).toISOString() }
                })
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    },
    createEvent: (args) => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date(args.eventInput.date),
            creator: '656d0da589383d4114895cb0'

        })
        let createdEvent
        return event.save()
            .then(result => {
                createdEvent = {
                    ...result._doc,
                    _id: result._doc._id.toString(),
                    creator: user.bind(this, result._doc.creator),
                    date: new Date(event._doc.date).toISOString()
                }
                return User.findById('656d0da589383d4114895cb0')
            })
            .then(user => {
                if (!user) {
                    throw new Error('User not found')
                }
                user.createdEvents.push(event)
                return user.save()
            })
            .then(result => {
                return createdEvent
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }
}

module.exports = eventsResolver