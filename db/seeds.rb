# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
PHOTO_URLS = ["https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1459664018906-085c36f472af.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/download.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1432637194732-34cedd856522.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1431576901776-e539bd916ba2.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1416169607655-0c2b3ce2e1cc.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1453230806017-56d81464b6c5.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/168a83a7-731f-4734-9249-181d9ecefdee.jpg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/CzcmeSt.jpg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/oCLeyEy.jpg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/eNu5TtyHRnWf9627TvZN_IMG_7791.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-24584.jpg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-29998.jpg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-38170.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-90548.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-92075.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-92248.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/pexels-photo-92380.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1422393462206-207b0fbd8d6b+(1).jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1427464407917-c817c9a0a6f6.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1428189923803-e9801d464d76.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1432383079404-c66efb4828a3.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1433190152045-5a94184895da.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1440557653082-e8e186733eeb.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1443926886562-c91054221a5c.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1445346366695-5bf62de05412.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1447877085163-3cce903855cd.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1451906278231-17b8ff0a8880.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1453227588063-bb302b62f50b.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1453282716202-de94e528067c.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/photo-1458724338480-79bc7a8352e4.jpeg",
  "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/squirrel-rodent-animal-nature.jpg"]

PHOTO_TITLES = ["Botanical Beauty",
  "Take the Leap",
  "You are NOT Alone",
  "Grid",
  "Sea of Green",
  "The Grind",
  "Lime Cilantro Chicken",
  "Parmesan Potato Wedges",
  "Sky of Fire",
  "Path to Paradise",
  "A Night in the City",
  "Spanish Alleyway",
  "Afternoon Nap",
  "Puzzlin\'",
  "Solace in Winter",
  "City at Midnight",
  "Excited Anticipation",
  "Civilization by the Sea",
  "Serene Winds",
  "Minimalistic",
  "David and Goliath",
  "Hidden Beach",
  "Sunrise in the Mountains",
  "Glacial Waters",
  "Central Perks",
  "Cozy Winters",
  "Windy Bluffs",
  "Pug Burrito",
  "Take Flight",
  "Mean Muggin\'",
  "Lunch Break"]

PHOTO_DESCRIPTIONS = ["From the gardens of Denmark.",
  "Own your fear.",
  "The world isn't such a bad place, after all.",
  "City symmetry.",
  "Take a breather.",
  "Business never takes a break.",
  "Chicken with lime, garlic, and cilantro. My friends really liked this recipe!",
  "Cheesy, crispy, and garlicky. Just the way I like it.",
  "Dusk's fiery beauty.",
  "Just a few steps away...",
  "San Francisco lighting up the night.",
  "Outside one of my favorite restaurants.",
  "zzZZZzzzZz",
  "Tickle your brain!",
  "A cold silence.",
  "Follow the lights.",
  "He REALLY wanted me to throw the ball!",
  "Metropolitan madness.",
  "I really liked how the clouds reflected in this photo!",
  "One of my portfolio items.",
  "Find strength within yourself and you can overcome any obstacle.",
  "Hidden away from civilization.",
  "The early bird gets- well, you know.",
  "You gotta be careful in these parts.",
  "Million dollar view.",
  "Gotta stay warm!",
  "A nice windy walk for two.",
  "A swaddling pug.",
  "Let's go on an adventure.",
  "What're you lookin\' at?",
  "Nommin\'"]

User.create!({username: 'demothedog', first_name: 'Demo', last_name: 'the Dog',
              email: 'demothedog@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/photos/4aa2cbac-be2a-4fe9-ba32-181efb87eeef.jpeg",
              password: 'demodemo', bio: 'Hi! I\'m Demo the Dog!'})

User.create!({username: 'reedforSPEED', first_name: 'Reed', last_name: 'Williams',
              email: 'soccerb0i@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/reed.jpg",
              password: 'ilykesokker', bio: 'Awww so cute yeaaahhhh'})

User.create!({username: 'trashbihn', first_name: 'Bihn', last_name: 'Kim',
              email: 'bihnkim@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/bihn.png",
              password: 'datboioshitwaddup', bio: 'I\'m DAT BOI. O shi- waddup!'})

User.create!({username: 'theWaleeder', first_name: 'Walid', last_name: 'Arghandewal',
              email: 'kobeluvr24@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/walid.jpg",
              password: 'koberox24', bio: 'Kobe is the GOAT.'})

User.create!({username: 'millmane', first_name: 'Eric', last_name: 'Millman',
              email: 'cheeselord@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/millman.jpg",
              password: 'parmesanoreggiano', bio: 'I like cheese.'})

User.create!({username: 'benditlikebeck', first_name: 'Beck', last_name: 'Nygard',
              email: 'definitelynotbeck@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/beck.jpg",
              password: 'ibetyouwanttoknowwhatmypasswordis', bio: 'They\'re always watching...'})

User.create!({username: 'thatguy', first_name: 'Guy', last_name: 'Hadas',
              email: 'thatotherguy@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/guy.jpg",
              password: 'imthebest', bio: 'I\'m SOOOOO good at programming.'})

User.create!({username: 'kaspertheghost', first_name: 'Kasper', last_name: 'Kuo',
              email: 'kasperkuo@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/kasper.png",
              password: 'artistlyfe', bio: 'I am an ARTIST!!!'})

User.create!({username: 'yougotrobbed', first_name: 'Kasper', last_name: 'Kuo',
              email: 'robtheman@gmail.com', profile_pic: "https://s3-us-west-1.amazonaws.com/pyxels-photos/avatars/kasper.png",
              password: 'imsorob', bio: 'Everything is AWESOME.'})


PHOTO_URLS.each_with_index do |el, i|
  users = [1,2,3,4,5,6,7]
  Photo.create!({title: PHOTO_TITLES[i], description: PHOTO_DESCRIPTIONS[i],
                 photo_url: PHOTO_URLS[i],
                 user_id: users.sample})
end

Comment.create!({body: "O shi- waddup!", user_id: 2, photo_id: 5})
Comment.create!({body: "I really like the colors in this photo.", user_id: 7, photo_id: 5})
