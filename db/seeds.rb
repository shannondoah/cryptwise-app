# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create!(
  first_name: "Stanley",
  last_name: "Safari",
  avatar_url: "https://www.referralsaasquatch.com/wp-content/uploads/2017/02/Outdoor-Square-Profile-Derek.jpg",
  email: "shannon+stanley@spark.re",
  password: "woofwoof",
  admin: true
)

b = User.create!(
  first_name: "Kelly",
  last_name: "Chrome",
  avatar_url: "https://testing-cdn.spark.re/uploads/material/upload/d4cfecaac6a654141ccf5ff603a80446/Screen_Shot_2018-12-02_at_8.06.18_PM.png",
  email: "shannon+kelly@spark.re",
  password: "loyboy"
)

c = User.create!(
  first_name: "Farah",
  last_name: "Firefox",
  avatar_url: "https://testing-cdn.spark.re/uploads/material/upload/88abc4de403df18b5bb960320aebe1e5/Screen_Shot_2018-12-02_at_8.09.41_PM.png",
  email: "shannon+farah@spark.re",
  password: "fowler"
)

b.friendships_as_primary.create(secondary: c)

25.times.each do |n|
  password = Devise.friendly_token[0, 8]
  new_user = User.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    avatar_url: "https://testing-cdn.spark.re/uploads/material/upload/4ab581955f989e8f335f56fd34dd4a5c/Untitled_design__3_.png",
    password: password
  )
  new_user.save!
end

User.all.each do |u|
  User.where.not(id: u.id).each do |u2|
    next if u2.friendship_with(u.id)

    u2.friendships_as_secondary.find_or_create_by(primary: u)
  end
end

["Dinner at the Greek", "Cab to Granville", "Party supplies", "Lunch at Parlour", "Gas for Tyler", "Cover charge for paintball", "Dessert at Cacao 70", "Cable bill", "Wedding gift for Kim and Nancy", "Groceries for the house", "Rideshare for mountain biking", "Car rental for Oregon road trip", "Art & Wine class fees", "Duty fees", "Beer Friday", "Chicago Airbnb", "More stuff for the house", "Girl's night at Pourhouse", "Pizza Garden delivery", "Noodlebox delivery", "Brunch at Medina"].each do |snippet|
  e = Expense.new
  e.creator = [b,c].sample
  e.payer = [b,c,User.all.sample].sample
  e.amount = rand(10.0...125.0).round(2)
  e.description = snippet

  debtors = e.payer.friendships.pluck(:primary_id).uniq.sample(rand(2..6))
  debtors.delete(e.payer.id)
  e.debtor_ids = debtors
  e.created_at = rand(1.month.ago..1.day.ago)
  e.save!
end

10.times.each do |n|
  payer = [b,c,User.all.sample].sample
  e = Expense.new
  e.payer = payer
  e.creator = payer
  e.amount = rand(10.0...50.0).round
  e.kind = "payment"
  e.payment_kind = "paid"
  e.debtor_ids = [User.where.not(id: payer.id).pluck(:id).sample]
  e.created_at = rand(2.weeks.ago..1.day.ago)
  e.save!
end
