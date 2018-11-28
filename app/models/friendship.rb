class Friendship < ApplicationRecord
  belongs_to :primary, class_name: "User"
  belongs_to :secondary, class_name: "User"

  validates :secondary_id, uniqueness: { scope: :primary_id, message: "is already friends with this person" }

  def self.by_user(id)
    where("primary_id = ? OR secondary_id = ?", id, id)
  end

  def friend_to(user)
    primary == user ? secondary : primary
  end
end
