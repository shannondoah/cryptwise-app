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

  def balance_of(user)
    primary == user ? primary_owes : secondary_owes
  end

  def balance(payer_is_primary, amount)
    if payer_is_primary
      self.primary_owes -= amount
      self.secondary_owes += amount
    else
      self.primary_owes += amount
      self.secondary_owes -= amount
    end
    save!
  end
end
