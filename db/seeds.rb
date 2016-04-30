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

Photo.create!({title: 'Botanical Beauty', description: 'A stunning shot from the gardens of Denmark.',
               photo_url: "https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0eee25e1e8252c9ec91aa736760d1a2e",
               user_id: 1})
