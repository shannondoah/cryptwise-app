# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


a = User.create!(
  first_name: "Anna",
  last_name: "Jenkins",
  avatar_url: "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
  email: "shannon+anna@spark.re",
  password: "security"
)

b = User.create!(
  first_name: "Stan",
  last_name: "Hawthorne",
  avatar_url: "https://www.referralsaasquatch.com/wp-content/uploads/2017/02/Outdoor-Square-Profile-Derek.jpg",
  email: "shannon+stan@spark.re",
  password: "woofwoof"
)

25.times.each do |n|
  password = Devise.friendly_token[0, 8]
  new_user = User.new(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    avatar_url: "http://voice4thought.org/wp-content/uploads/2016/08/default1.jpg"
    password: password
  )
  new_user.save!
end

[a,b].each do |u|
  User.where(id: Array.new(rand(10..25)) { rand(3...27) }.uniq).each do |u2|
    u2.friendships_as_secondary.create!(primary: u)
  end
end
