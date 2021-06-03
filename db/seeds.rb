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

puts "creating tables with their parts and their orders"
table1 = Piece.create!(name: "Didi", user: lisa, category: table, description: "Table en chêne, réalisée par Antonio Dorno")
file = URI.open("https://www.monmeubletendance.com/clients/myhometendance/documents/1280_1024/pr_MA88CA492TABLSXT3I-0ec7fc1c56-43.jpg")
table1.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table1 = Part.create!(color: 6, height: 10, width: 100, length: 160, material: 1, shape: 2, position: 0, piece: table1)
bottom_table1 = Part.create!(color: 6, height: 0, width: 5, length: 60, material: 1, shape: 0, position: 1, piece: table1)
order1 = Order.create!(user: lisa, progress: 3, piece: table1, price: 800)
puts "Table 1 ok"

table2 = Piece.create!(name: "Loulou", user: flore, category: table, description: "Table de séjour en teck, réalisée par Lison Chattely")
file = URI.open("https://www.ikea.com/fr/fr/images/products/ekedalen-table-extensible-brun-fonce__0736963_pe740827_s5.jpg?f=m")
table2.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table2 = Part.create!(color: 0, height: 8, width: 100, length: 170, material: 4, shape: 2, position: 0, piece: table2)
botttom_table2 = Part.create!(color: 0, height: 0, width: 5, length: 70, material: 5, shape: 0, position: 1, piece: table2)
order2 = Order.create!(user: flore, progress: 3, piece: table2, price: 300)
puts "Table 2 ok"

table3 = Piece.create!(name: "Jack", user: flore, category: table, description: "Table ronde en hêtre, réalisée par Steevy Pouzy")
file = URI.open("https://ruma-home.com/wp-content/uploads/2018/08/riva-round-table-front.jpg")
table3.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table3 = Part.create!(color: 2, height: 6, width: 60, length: 120, material: 2, shape: 0, position: 0, piece: table3)
botttom_table3 = Part.create!(color: 0, height: 0, width: 7, length: 60, material: 2, shape: 0, position: 1, piece: table3)
order3 = Order.create!(user: flore, progress: 3, piece: table3, price: 500)
puts "Table 3 ok"

table4 = Piece.create!(name: "Go", user: lisa, category: table, description: "Table en acier et hêtre, réalisée par Florent Byle")
file = URI.open("https://www.idmarket.com/11659/table-a-manger-phoenix-224-cm-bois-et-noir.jpg")
table4.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table4 = Part.create!(color: 6, height: 13, width: 90, length: 175, material: 4, shape: 2, position: 0, piece: table4)
botttom_table4 = Part.create!(color: 0, height: 0, width: 5, length: 50, material: 5, shape: 0, position: 1, piece: table4)
order4 = Order.create!(user: lisa, progress: 3, piece: table4, price: 700)
puts "Table 4 ok"

table5 = Piece.create!(name: "Lizzie", user: flore, category: table, description: "Table en bois verni, réalisée par Antonio Dorno")
file = URI.open("https://www.piguno.com/workshop49035/wp-content/uploads/2018/02/Aston-coffee-table-1200x900.jpg")
table5.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table5 = Part.create!(color: 6, height: 20, width: 100, length: 150, material: 2, shape: 1, position: 0, piece: table5)
botttom_table5 = Part.create!(color: 6, height: 0, width: 10, length: 70, material: 5, shape: 0, position: 1, piece: table5)
order5 = Order.create!(user: flore, progress: 3, piece: table5, price: 800)
puts "Table 5 ok"

table6 = Piece.create!(name: "Suzy", user: lisa, category: table, description: "Table basse, acier et bois, réalisée par Lison Chattely")
file = URI.open("https://cdn3.hellin.fr/13441-zoom_default/tables-basses-gigogne-en-bois-et-metal-allen.jpg")
table6.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table6 = Part.create!(color: 2, height: 4, width: 65, length: 170, material: 1, shape: 2, position: 1, piece: table6)
botttom_table6 = Part.create!(color: 0, height: 0, width: 2, length: 40, material: 5, shape: 0, position: 0, piece: table6)
order6 = Order.create!(user: lisa, progress: 3, piece: table6, price: 450)
puts "Table 6 ok"

table7 = Piece.create!(name: "Polo", user: lisa, category: table, description: "Table style scandinave blanche, réalisée par Antonio Dorno")
file = URI.open("https://www.idmarket.com/13845/table-extensible-scandinave-inga-160-200-cm-blanche.jpg")
table7.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table7 = Part.create!(color: 1, height: 4, width: 90, length: 180, material: 2, shape: 2, position: 0, piece: table7)
botttom_table7 = Part.create!(color: 6, height: 0, width: 3, length: 80, material: 5, shape: 0, position: 1, piece: table7)
order7 = Order.create!(user: lisa, progress: 3, piece: table7, price: 800)
puts "Table 7 ok"

table8 = Piece.create!(name: "Coolies", user: flore, category: table, description: "Tables gigognes acier et bois, réalisées par Steevy Pouzy")
file = URI.open("https://www.drawer.fr/68155-thickbox_default/2-tables-basses-gigognes-metal-woood-fara.jpg")
table8.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table8 = Part.create!(color: 5, height: 30, width: 40, length: 40, material: 2, shape: 0, position: 0, piece: table8)
botttom_table8 = Part.create!(color: 0, height: 0, width: 2, length: 80, material: 5, shape: 0, position: 1, piece: table8)
order8 = Order.create!(user: flore, progress: 3, piece: table8, price: 550)
puts "Table 8 ok"

table9 = Piece.create!(name: "Valies", user: flore, category: table, description: "Table en bois de chêne rouge foncé, réalisée par Florent Byle")
file = URI.open("https://pictureserver.net/images/pic/b8/01/undef_src_sa_picid_761346_type_whitesh_image.jpg?ver=8")
table9.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table9 = Part.create!(color: 3, height: 8, width: 85, length: 180, material: 2, shape: 1, position: 0, piece: table9)
botttom_table9 = Part.create!(color: 3, height: 0, width: 5, length: 75, material: 5, shape: 0, position: 1, piece: table9)
order9 = Order.create!(user: flore, progress: 3, piece: table9, price: 750)
puts "Table 9 ok"

table10 = Piece.create!(name: "Donna", user: lisa, category: table, description: "Table pieds croisés, réalisée par Kevin Créations")
file = URI.open("https://www.miliboo.com/table-a-manger-extensible-bois-clair-et-blanc-l160-240-cm-laho-49473-60ab9bb6aa00c_1010_427_0.jpg")
table10.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table10 = Part.create!(color: 1, height: 9, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table10)
botttom_table10 = Part.create!(color: 6, height: 120, width: 4, length: 60, material: 5, shape: 0, position: 1, piece: table10)
order10 = Order.create!(user: lisa, progress: 3, piece: table10, price: 800)
puts "Table 10 ok"

table11 = Piece.create!(name: "Martha", user: flore, category: table, description: "Table ronde en chêne, réalisée par Antonio Dorno")
file = URI.open("https://www.miliboo.com/table-a-manger-ronde-design-noyer-d106-cm-walford-33710-5c1393d57a95b_1010_427_0.jpg")
table11.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table11 = Part.create!(color: 2, height: 4, width: 60, length: 180, material: 2, shape: 1, position: 0, piece: table11)
botttom_table11 = Part.create!(color: 2, height: 120, width: 5, length: 75, material: 5, shape: 0, position: 1, piece: table11)
order11 = Order.create!(user: flore, progress: 3, piece: table11, price: 250)
puts "Table 11 ok"

table12 = Piece.create!(name: "Chiara", user: lisa, category: table, description: "Table basse en bois massif, réalisée par ateliers Xavo")
file = URI.open("https://www.miliboo.com/table-a-manger-design-finition-chene-sauvage-et-metal-bocca-47964-5e81c66b6bfdb_1010_427_0.jpg")
table12.photo.attach(io: File.open(file), filename: 'table.jpg', content_type: 'image/jpg')
top_table12 = Part.create!(color: 6, height: 4, width: 60, length: 180, material: 2, shape: 2, position: 0, piece: table12)
botttom_table12 = Part.create!(color: 0, height: 120, width: 2, length: 60, material: 5, shape: 0, position: 1, piece: table12)
order12 = Order.create!(user: lisa, progress: 3, piece: table12, price: 600)
puts "Table 12 ok"
puts "done for tables, parts and orders"

# puts "creating 5 objects, different from tables"
# commode1 = Piece.create!(name: "Marguaux", category: dresser, user: steven)
# chair1 = Piece.create!(name: "Lizzie", category: chair, user: lisa)
# buffet1 = Piece.create!(name: "Steevy", category: buffet, user: flore)
# etagere1 = Piece.create!(name: "Jane", category: rack, user: lisa)
# meuble_tv1 = Piece.create!(name: "Marc", category: meuble_tv, user: steven)
# puts "done"
puts "Seeds done"

