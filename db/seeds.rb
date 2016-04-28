# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!({username: 'demothedog', first_name: 'demo', last_name: 'thedog',
              email: 'demothedog@gmail.com', password: 'demodemo',
              bio: 'Hi! I\'m Demo the Dog!'})
