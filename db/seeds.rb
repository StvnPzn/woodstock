require 'open-uri'

puts "destroy all"
Category.destroy_all
Part.destroy_all
Order.destroy_all
User.destroy_all

puts "creating 3 users"
steven = User.create!(email: "s@go.com", password: "azerty")
lisa = User.create!(email: "l@go.com", password: "qwerty")
flore = User.create!(email: "f@go.com", password: "azerty")
puts "done"

puts "creating 6 categories"
table = Category.create!(title: "table")
chair = Category.create!(title: "chaise")
rack = Category.create!(title: "étagères")
buffet = Category.create!(title: "buffet")
dresser = Category.create!(title: "commode")
meuble_tv = Category.create!(title: "meuble tv")
puts "done"

puts "creating tables with their parts"

table1 = Piece.create!(name: "Didi", user: lisa, category: table, description: "Table en chêne, réalisée par Antonio Dorno")
file = URI.open("https://www.monmeubletendance.com/clients/myhometendance/documents/1280_1024/pr_MA88CA492TABLSXT3I-0ec7fc1c56-43.jpg")
table1.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table1 = Part.create!(color: 2, height: 10, width: 100, length: 160, material: 1, shape: 1, position: 0, piece: table1)
bottom_table1 = Part.create!(color: 1, height: 100, width: 60, length: 0, material: 4, shape: 1, position: 1, piece: table1)

table2 = Piece.create!(name: "Loulou", user: lisa, category: table, description: "Table de séjour en teck, réalisée par Lison Chattely")
file = URI.open("https://www.ikea.com/fr/fr/images/products/ekedalen-table-extensible-brun-fonce__0736963_pe740827_s5.jpg?f=m")
table2.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table2 = Part.create!(color: 4, height: 8, width: 60, length: 100, material: 4, shape: 1, position: 0, piece: table2)
botttom_table2 = Part.create!(color: 1, height: 100, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table2)

table3 = Piece.create!(name: "Jack", user: lisa, category: table, description: "Table ronde en hêtre, réalisée par Steevy Pouzy")
file = URI.open("https://ruma-home.com/wp-content/uploads/2018/08/riva-round-table-front.jpg")
table3.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table3 = Part.create!(color: 1, height: 6, width: 60, length: 120, material: 2, shape: 1, position: 0, piece: table3)
botttom_table3 = Part.create!(color: 1, height: 80, width: 60, length: 0, material: 2, shape: 1, position: 1, piece: table3)

table4 = Piece.create!(name: "Go", user: lisa, category: table, description: "Table en acier et hêtre, réalisée par Florent Byle")
file = URI.open("https://www.idmarket.com/11659/table-a-manger-phoenix-224-cm-bois-et-noir.jpg")
table4.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table4 = Part.create!(color: 0, height: 10, width: 60, length: 80, material: 4, shape: 1, position: 0, piece: table4)
botttom_table4 = Part.create!(color: 4, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table4)

table5 = Piece.create!(name: "Lizzie", user: lisa, category: table, description: "Table en bois verni, réalisée par Antonio Dorno")
file = URI.open("https://www.piguno.com/workshop49035/wp-content/uploads/2018/02/Aston-coffee-table-1200x900.jpg")
table5.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table5 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table5 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)


table6 = Piece.create!(name: "Suzy", user: lisa, category: table, description: "Table basse, acier et bois, réalisée par Lison Chattely")
file = URI.open("https://cdn3.hellin.fr/13441-zoom_default/tables-basses-gigogne-en-bois-et-metal-allen.jpg")
table6.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table6 = Part.create!(color: 2, height: 4, width: 60, length: 180, material: 1, shape: 1, position: 0, piece: table5)
botttom_table6 = Part.create!(color: 3, height: 100, width: 60, length: 0, material: 5, shape: 2, position: 1, piece: table5)


table7 = Piece.create!(name: "Polo", user: lisa, category: table, description: "Table style scandinave blanche, réalisée par Antonio Dorno")
file = URI.open("https://www.idmarket.com/13845/table-extensible-scandinave-inga-160-200-cm-blanche.jpg")
table7.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table7 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table7 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)


table8 = Piece.create!(name: "Coolies", user: lisa, category: table, description: "Tables gigognes acier et bois, réalisées par Steevy Pouzy")
file = URI.open("https://www.drawer.fr/68155-thickbox_default/2-tables-basses-gigognes-metal-woood-fara.jpg")
table8.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table8 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table8 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)

table9 = Piece.create!(name: "Valies", user: lisa, category: table, description: "Tables basses encastrables, réalisée par Florent Byle")
file = URI.open("https://www.miliboo.com/tables-basses-scandinaves-chene-et-blanc-(lot-de-2)-artik-46727-5e708f6976210_1010_800_0.jpg")
table9.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table9 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table9 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)

table10 = Piece.create!(name: "Donna", user: lisa, category: table, description: "Table pieds croisés, réalisée par Kevin Créations")
file = URI.open("https://www.crack.be/media/21039/table-splendor-spider-pieds-x-decor-halifax-golden-brown-brun-180x100cm-lievens.jpg?mode=max&width=800&height=800&format=jpg&quality=50")
table10.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table10 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table10 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)

table11 = Piece.create!(name: "Martha", user: lisa, category: table, description: "Table ronde en chêne, réalisée par Antonio Dorno")
file = URI.open("https://www.bebitalia.com/sites/default/files/slider/Xilos_table_home_01.jpg")
table11.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table11 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table11 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)

table12 = Piece.create!(name: "Chiara", user: lisa, category: table, description: "Table basse en bois massif, réalisée par ateliers Xavo")
file = URI.open("https://cdn3.hellin.fr/4482-medium_default/table-basse-moderne-en-chene-clair-boston.jpg")
table12.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')

top_table12 = Part.create!(color: 5, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table5)
botttom_table12 = Part.create!(color: 2, height: 120, width: 60, length: 0, material: 5, shape: 1, position: 1, piece: table5)



puts "done"

puts "creating 5 objects, different from tables"

commode1 = Piece.create!(name: "Marguaux", category: dresser, user: steven)
chair1 = Piece.create!(name: "Lizzie", category: chair, user: lisa)
buffet1 = Piece.create!(name: "Steevy", category: buffet, user: flore)
etagere1 = Piece.create!(name: "Jane", category: rack, user: lisa)
meuble_tv1 = Piece.create!(name: "Marc", category: meuble_tv, user: steven)

puts "done"

order1 = Order.create!(user: lisa, progress: 0, piece: table1, price: 800)
order2 = Order.create!(user: lisa, progress: 0, piece: table2, price: 750)
order3 = Order.create!(user: lisa, progress: 0, piece: table3, price: 500)
puts "3 orders created"
