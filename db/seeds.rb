# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
PHOTO_URLS = ["https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0eee25e1e8252c9ec91aa736760d1a2e",
  "http://static1.squarespace.com/static/554b5e7ce4b0149371f10a93/554b6899e4b0948fbae2bb80/554b68bfe4b084777ede5774/1431034217827/?format=2500w",
  "https://images.unsplash.com/photo-1432637194732-34cedd856522?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=a135be75b0fa480c18b22b5e557f56b3",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=47d289aab516853866fd57d2312fd101",
  "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=3cd382936e9c68cf7ece9c8883d40db4",
  "https://images.unsplash.com/photo-1453230806017-56d81464b6c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=b135939883e8a42fdd8fdcc7ef1f3fb4",
  "http://i.imgur.com/blbgF7k.jpg",
  "http://i.imgur.com/CzcmeSt.jpg",
  "http://i.imgur.com/oCLeyEy.jpg"]

PHOTO_TITLES = ["Botanical Beauty",
  "Take the Leap",
  "You are NOT Alone",
  "Grid",
  "Sea of Green",
  "The Grind",
  "Lime Cilantro Chicken",
  "Parmesan Potato Wedges",
  "Sky of Fire"]

PHOTO_DESCRIPTIONS = ["From the gardens of Denmark.",
  "Own your fear.",
  "The world isn't such a bad place, after all.",
  "City symmetry.",
  "Take a breather.",
  "Business never takes a break.",
  "Chicken with lime, garlic, and cilantro. My friends really liked this recipe!",
  "Cheesy, crispy, and garlicky. Just the way I like it.",
  "Dusk's fiery beauty."]

User.create!({username: 'demothedog', first_name: 'demo', last_name: 'thedog',
              email: 'demothedog@gmail.com', password: 'demodemo',
              bio: 'Hi! I\'m Demo the Dog!'})

PHOTO_URLS.each_with_index do |el, i|
  Photo.create!({title: PHOTO_TITLES[i], description: PHOTO_DESCRIPTIONS[i],
                 photo_url: PHOTO_URLS[i],
                 user_id: 1})
end
